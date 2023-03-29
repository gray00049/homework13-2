export default async function loadService(id = '') {
  let url;
  if (id) {
    url = `${import.meta.env.VITE_LOAD_SERVICES_URL}/${id}`
  } else {
    url = import.meta.env.VITE_LOAD_SERVICES_URL
  }
  console.log(url, id, Boolean(id))
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(response.statusText)
  }

  return await response.json();
}