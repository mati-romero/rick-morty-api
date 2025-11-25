const BASE_URL = "https://rickandmortyapi.com/api";

export async function getAllEpisodes() {
  const response = await fetch(`${BASE_URL}/episode`);
  if (!response.ok) throw new Error("Error al obtener los episodios");
  return await response.json();
}