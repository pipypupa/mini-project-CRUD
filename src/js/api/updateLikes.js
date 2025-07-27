export default async function updateLikes(likes, id) {
  try {
    return await fetch(
      ``,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ likes: likes }),
      }
    ).then((res) => res.json());
  } catch (error) {
    console.log(error);
  }
}
