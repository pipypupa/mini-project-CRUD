export default async function deletePost(id) {
  try {
    return await fetch(
      `https://6882a21521fa24876a9b6374.mockapi.io/posts/${id}`,
      {
        method: "DELETE",
      }
    );
  } catch (error) {
    console.log(error);
  }
}
