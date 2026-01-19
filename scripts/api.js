const ACCESS_KEY = "yJln88VUwk_M58Kk1vjw-lUWwt6qSLfxNegWHRyTbSY";

export async function fetchImages(keyword, page) {
  const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${ACCESS_KEY}&per_page=12`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Erro ao buscar imagens");
  }

  const data = await response.json();
  return data.results;
}
