export default async function getDocument() {
  const response = await fetch('https://json-server.machens.dev/docs');
  const body = await response.json();
  return body;
}
