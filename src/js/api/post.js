export default async function addPost(post) {
  try {
    return await fetch("http://localhost:3000/bd", {
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