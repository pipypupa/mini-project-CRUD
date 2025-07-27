import render from "./render/render.js";
import getPosts from "./api/get.js";
import addPost from "./api/post.js";
import updatePost from "./api/edit.js";
import deletePost from "./api/delete.js";
import updateLikes from "./api/updateLikes.js";
import renderComments from "./render/renderComments.js";
import postComment from "./api/postComments.js";

let postsList = [];
let commentPostId = null;
let postId = null;

async function refreshPosts() {
  const data = await getPosts();

  // Нормалізуємо commentList — має бути масив
  data.forEach((post) => {
    if (!Array.isArray(post.commentList)) {
      post.commentList = [];
    }
  });

  document.querySelector(".posts").innerHTML = render(data);
  postsList = data;
}

refreshPosts();

// Відкриття модалки створення посту
document.querySelector(".add").addEventListener("click", () => {
  document.querySelector(".modal-backdrop").classList.remove("hidden");
});

// Закриття модалки створення посту
document.querySelector(".close-modal").addEventListener("click", () => {
  document.querySelector(".modal-backdrop").classList.add("hidden");
});

// Створення нового посту
document
  .querySelector("#new-post-form")
  .addEventListener("submit", async (e) => {
    e.preventDefault();
    const imageUrl = e.target.elements.url.value;
    const userName = e.target.elements.Username.value;

    const postObject = {
      userName,
      imageUrl,
      likes: 0,
      comments: 0,
      commentList: [],
    };

    await addPost(postObject);
    await refreshPosts();

    document.querySelector(".modal-backdrop").classList.add("hidden");
    e.target.reset();
  });

// Закриття модалки коментарів
document
  .querySelector(".close-comment-button")
  .addEventListener("click", () => {
    document.querySelector(".modal-backdropCommments").classList.add("hidden");
  });

// Закриття модалки редагування
document.querySelector(".close-modalEdit").addEventListener("click", () => {
  document.querySelector(".modal-backdropEdit").classList.add("hidden");
});

// Обробник кліків на постах
document.querySelector(".posts").addEventListener("click", (e) => {
  const postCard = e.target.closest(".post-card");
  if (!postCard) return;

  const id = postCard.dataset.id;

  if (e.target.closest(".like-button")) {
    const likeButton = e.target.closest(".like-button");
    const likesElement = postCard.querySelector(".likes-p");
    let likes = Number(likesElement.textContent);

    if (likeButton.classList.contains("liked")) return;

    likes += 1;
    likesElement.textContent = likes;
    likeButton.classList.add("liked");
    updateLikes(likes, id);
  }

  if (e.target.closest(".comment-button")) {
    commentPostId = id;
    document
      .querySelector(".modal-backdropCommments")
      .classList.remove("hidden");

    const post = postsList.find((post) => post.id === commentPostId);
    const commentList = Array.isArray(post.commentList) ? post.commentList : [];
    document.querySelector(".comments").innerHTML = renderComments(commentList);
  }

  if (e.target.closest(".delete")) {
    deletePost(id).then(() => refreshPosts());
  }

  if (e.target.closest(".edit")) {
    postId = id;

    document.querySelector("#username").value =
      postCard.querySelector(".user").textContent;
    document.querySelector("#edit-url").value =
      postCard.querySelector(".photo-post").src;

    document.querySelector(".modal-backdropEdit").classList.remove("hidden");
  }
});

// Збереження редагування посту
document.querySelector(".edit-button").addEventListener("click", async (e) => {
  e.preventDefault();

  const updatedPost = {
    userName: document.querySelector("#username").value,
    imageUrl: document.querySelector("#edit-url").value,
  };

  try {
    await updatePost(updatedPost, postId);
    await refreshPosts();
    document.querySelector(".modal-backdropEdit").classList.add("hidden");
  } catch (error) {
    console.error("Error updating post:", error);
  }
});

// Пошук по ніку
document
  .querySelector('#search-form input[name="query"]')
  .addEventListener("input", (e) => {
    const searchTerm = e.target.value.toLowerCase();

    document.querySelectorAll(".post-card").forEach((card) => {
      const userName = card.querySelector(".user").textContent.toLowerCase();
      card.style.display = userName.includes(searchTerm) ? "block" : "none";
    });
  });

// Додати коментар
document
  .querySelector("#comments-post-form")
  .addEventListener("submit", async (e) => {
    e.preventDefault();
    const comment = document.querySelector("#info").value.trim();
    if (!comment) return;

    const post = postsList.find((post) => post.id === commentPostId);
    if (!post) return;

    const updatedList = Array.isArray(post.commentList)
      ? [...post.commentList, comment]
      : [comment];
    const comments = updatedList.length;

    await postComment(updatedList, commentPostId, comments);
    await refreshPosts();

    document.querySelector(".modal-backdropCommments").classList.add("hidden");
    document.querySelector("#info").value = "";
  });

// Видалити коментар
document.querySelector(".comments").addEventListener("click", (e) => {
  if (e.target.closest(".delete-comment")) {
    const commentCard = e.target.closest("li.comment-card");
    const commentToDelete = commentCard
      .querySelector(".comment-info")
      .textContent.trim();

    const post = postsList.find((post) => post.id === commentPostId);
    if (!post) return;

    const updatedList = post.commentList.filter(
      (comment) => comment !== commentToDelete
    );
    const comments = updatedList.length;

    postComment(updatedList, commentPostId, comments).then(() =>
      refreshPosts()
    );
    document.querySelector(".modal-backdropCommments").classList.add("hidden");
  }
});
