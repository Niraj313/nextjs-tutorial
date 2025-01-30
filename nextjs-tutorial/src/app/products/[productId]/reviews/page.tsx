/** @format */
function getRandomInt(count: number) {
  return Math.floor(Math.random() * count);
}

export default function Review() {
  const random = getRandomInt(2);
  if (random === 1) {
    throw new Error("Error loading review");
  }
  return (
    <>
      <h1>Review List</h1>
      <h2>Review Product 1</h2>
      <h2> Review Product 2</h2>
      <h2>Review Product 3</h2>
    </>
  );
}
