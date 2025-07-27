export default async function updatePost(postData, id) {
  try {
    const res = await fetch(
      `https://6884da50745306380a399f75.mockapi.io/posts/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postData),
      }
    );

    if (!res.ok) throw new Error("Failed to update post");

    return await res.json();
  } catch (error) {
    console.error("Failed to update post:", error);
    throw error;
  }
}
