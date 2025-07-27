export default async function postComment(
  updatedComments,
  id,
  amountofComments
) {
  try {
    return await fetch(
      `https://6882a21521fa24876a9b6374.mockapi.io/posts/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          comments: amountofComments,
          commentList: updatedComments,
        }),
      }
    ).then((res) => res.json());
  } catch (error) {
    console.log(error);
  }
}
