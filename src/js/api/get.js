export default async function getPosts() {
  try {
    return await fetch(
      "http://localhost:3000/bd"
    ).then((res) => res.json());
  } catch (error) {
    console.log(error);
  }
}
