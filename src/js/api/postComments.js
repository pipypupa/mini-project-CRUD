export default async function postComment(
  updatedComments,
  id,
  amountofComments
) {
  try {
    return await fetch(
      ``,
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
