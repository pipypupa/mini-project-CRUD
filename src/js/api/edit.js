export default async function updatePost(postData, id) {
  try {
    const res = await fetch(
      `http://localhost:3000/bd`,
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
