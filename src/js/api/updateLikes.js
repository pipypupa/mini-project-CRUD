export default async function updateLikes(likes, id) {
  try {
    return await fetch(`https://6884da50745306380a399f75.mockapi.io/posts/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ likes: likes }),
    }).then((res) => res.json());
  } catch (error) {
    console.log(error);
  }
}
