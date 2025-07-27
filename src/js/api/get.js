export default async function getPosts() {
  try {
    return await fetch(
      "https://6882a21521fa24876a9b6374.mockapi.io/posts"
    ).then((res) => res.json());
  } catch (error) {
    console.log(error);
  }
}
