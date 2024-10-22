const URL_BASE = "https://670ed0e63e7151861655dd83.mockapi.io/api/v1";

export async function getAllItemsFromAPI() {
  const response = await fetch(URL_BASE + "/ingredients");
  const data = await response.json();
  return data;
}
export async function postItemToAPI(item) {
  const response = await fetch(URL_BASE + "/ingredients", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(item),
  });
}
export async function deleteItemFromAPI(id) {
  const response = await fetch(URL_BASE + "/ingredients/" + id, {
    method: "DELETE",
  });
}
export async function putItemToAPI(id, item) {
  const response = await fetch(URL_BASE + "/ingredients/" + id, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(item),
  });
}
