const BASE_URL = "https://rickandmortyapi.com/api";

export async function getAllCharacters() {
  const response = await fetch(`${BASE_URL}/character`);
  if (!response.ok) throw new Error("Error al obtener los personajes");
  return await response.json();
}

export async function getCharacterById(id) {
  const response = await fetch(`${BASE_URL}/character/${id}`);
  if (!response.ok) throw new Error("Personaje no encontrado");
  return await response.json();
}

export async function changeCharacterPage(url) {
  const response = await fetch(url);
  if (!response.ok) throw new Error("Page not found");
  return await response.json();
}