import { fetchImages } from "./api.js";
import {
  renderImages,
  clearImages,
  showLoadMore,
  hideLoadMore
} from "./ui.js";

const searchForm = document.querySelector("#search-form");
const searchBox = document.querySelector("#search-box");
const showMoreBtn = document.querySelector("#show-more-btn");

let keyword = "";
let page = 1;

async function searchImages() {
  try {
    keyword = searchBox.value.trim();
    if (!keyword) return;

    const images = await fetchImages(keyword, page);

    if (page === 1) {
      clearImages();
    }

    renderImages(images);

    if (images.length > 0) {
      showLoadMore();
    } else {
      hideLoadMore();
    }

  } catch (error) {
    console.error(error);
  }
}

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  page = 1;
  searchImages();
});

showMoreBtn.addEventListener("click", () => {
  page++;
  searchImages();
});
