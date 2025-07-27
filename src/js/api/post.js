export default async function addPost(post) {
  try {
    return await fetch("https://6882a21521fa24876a9b6374.mockapi.io/posts", {
        method: "POST",
        body: JSON.stringify(post),
        headers: {
        "Content-Type": "application/json; charset=UTF-8",
        }
    }).then((res) => res.json())
  } catch (error) {
    console.log(error)
}
}