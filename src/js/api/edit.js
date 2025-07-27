export default async function updatePost(postData, id) {
  try {
    const res = await fetch(
      `https://6882a21521fa24876a9b6374.mockapi.io/posts/${id}`,
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
