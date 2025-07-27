export default async function getPosts() {
  try {
    return await fetch(
      ""
    ).then((res) => res.json());
  } catch (error) {
    console.log(error);
  }
}
