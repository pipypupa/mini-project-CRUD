export default function renderComments(comments) {
  if (!Array.isArray(comments)) {
    console.warn("renderComments expected an array, but got:", comments);
    return "<li class='comment-card'>No comments yet.</li>";
  }
  return comments
    .map(
      (item) => `
            <li data-comment="This is a comment to delete" class="comment-card">
                <div class="div-comment"><p class="comment-info">${item}</p></div>
                <button class="delete-comment">Delete</button>
            </li>
        `
    )
    .join("");
}
