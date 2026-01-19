const searchResult = document.querySelector("#search-result");
const showMoreBtn = document.querySelector("#show-more-btn");

export function clearImages() {
  searchResult.innerHTML = "";
}

export function renderImages(images) {
  images.forEach((result) => {
    const image = document.createElement("img");
    image.src = result.urls.small;
    image.loading = "lazy";

    const imageLink = document.createElement("a");
    imageLink.href = result.links.html;
    imageLink.target = "_blank";
    imageLink.appendChild(image);

    searchResult.appendChild(imageLink);
  });
}

export function showLoadMore() {
  showMoreBtn.style.display = "block";
}

export function hideLoadMore() {
  showMoreBtn.style.display = "none";
}
