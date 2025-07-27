export default async function getPosts() {
  try {
    const response = await fetch(
      "https://6884da50745306380a399f75.mockapi.io/posts/"
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Помилка при отриманні постів:", error);
    return [];
  }
}
