export default async function Read({ params }) {
  const response = await fetch("http://localhost:9999/topics/" + params.id);
  console.log(response);
  const topic = await response.json();
  return (
    <>
      <h2>{topic.title}</h2>
      {topic.body}
    </>
  );
}
