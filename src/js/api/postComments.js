export default async function postComment(
  updatedComments,
  id,
  amountofComments
) {
  try {
    return await fetch(
      `http://localhost:3000/bd`,
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
