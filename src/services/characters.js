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

export async function getLeakedCharacters(filters) {
  let url = `${BASE_URL}/character`;

  // Convertimos el objeto en parámetros ignorando valores vacíos
  const params = new URLSearchParams();

  Object.entries(filters).forEach(([key, value]) => {
    if (value !== "") {
      params.append(key, value);
    }
  });

  // Si hay al menos un filtro válido, agregamos los params
  const query = params.toString();
  if (query) {
    url += `?${query}`;
  }

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Error al obtener los personajes");
  }

  return await response.json();
}
