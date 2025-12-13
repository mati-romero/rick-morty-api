const BASE_URL = "https://rickandmortyapi.com/api";

export async function getAllLocations() {
  const response = await fetch(`${BASE_URL}/location`);
  if (!response.ok) throw new Error("Error al obtener las locaciones");
  return await response.json();
}

export async function getLocationById(id) {
  const response = await fetch(`${BASE_URL}/location/${id}`);
  if (!response.ok) throw new Error("Locacion no encontrado");
  return await response.json();
}

export async function getLeakedLocations(filters) {
  let url = `${BASE_URL}/location`;

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