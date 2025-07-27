export default async function deletePost(id) {
  try {
    return await fetch(
      `hhttp://localhost:3000/bd`,
      {
        method: "DELETE",
      }
    );
  } catch (error) {
    console.log(error);
  }
}
