export default async function deletePost(id) {
  try {
    return await fetch(
      `https://6884da50745306380a399f75.mockapi.io/posts/${id}`,
      {
        method: "DELETE",
      }
    );
  } catch (error) {
    console.log(error);
  }
}
