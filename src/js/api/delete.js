export default async function deletePost(id) {
  try {
    return await fetch(
      ``,
      {
        method: "DELETE",
      }
    );
  } catch (error) {
    console.log(error);
  }
}
