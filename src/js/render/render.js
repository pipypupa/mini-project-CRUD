export default function render(posts) {
  const objectChange = posts
    .map((object) => {
      const newObject = `
    <li class="post-card" data-id="${object.id}">
    <img class="photo-post" src="${object.imageUrl}" alt="photo" />
        <p class="user">${object.userName}</p>
        <div class="stats">
            <p id="like" class="stats-item">
                <button class="like-button"><i class="material-icons">thumb_up</i></button>
                <span class="likes-p">${object.likes}</span>
            </p>
            <p id="comment" class="stats-item">
                <button class="comment-button"><i class="material-icons">comment</i></button>
                <span class="commments-count">${object.comments}</span>
            </p>
        </div>
        <button type="click" class="edit">Edit</button>
        <button type="click" class="delete">Delete</button>
    </li>
    `;
      return newObject;
    })

    .join("");
  return objectChange;
}
