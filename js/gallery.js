
const images = [
    "https://www.instagram.com/p/CBDhNaijfsX/media?size=l",
    "https://www.instagram.com/p/CBC6buMjiNK/media?size=l",
    "https://www.instagram.com/p/CBBeCCujJ5y/media?size=l",
    "https://www.instagram.com/p/CBA_jXcDApF/media?size=l",
    "https://www.instagram.com/p/CA-fCC0DltY/media?size=l",
    "https://www.instagram.com/p/CA9xwXzjBDt/media?size=l",
    "https://www.instagram.com/p/CA8YuyjDr-7/media?size=l"
]

const firstImage = `
<div class="carousel-item active">
  <img class="d-block w-100" src="https://www.instagram.com/p/CBLf4uzjGX5/media?size=l" alt="first">
</div>`

function renderGalleryItem(link) {
    return `
<div class="carousel-item">
  <img class="d-block w-100" src="${link}" alt="${link}">
</div>`
}

function renderGallery() {
    const items = images.map(i => renderGalleryItem(i)).join('');
    console.log(items);

    return `
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
          <div class="carousel-inner">
            ${firstImage}
            ${items}
          </div>
          <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>`
}

function onLoad(){
    document.getElementById("gallery").innerHTML = renderGallery();
}

window.onload = onLoad;
