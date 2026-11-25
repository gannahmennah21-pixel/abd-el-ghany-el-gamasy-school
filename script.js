const photosCount = 24;              
const photoPrefix = "images/photo";  
const photoExt = ".jpg";             
const galleryGrid = document.getElementById("galleryGrid");

for (let i = 1; i <= photosCount; i++) {
  const src = photoPrefix + i + photoExt;

  const item = document.createElement("div");
  item.className = "gallery-item";
  item.innerHTML = '<img src="' + src + '" alt="صورة رقم ' + i + '" loading="lazy">';

  item.addEventListener("click", function () {
    openLightbox(src);
  });

  galleryGrid.appendChild(item);
}


const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const closeBtn = document.getElementById("closeBtn");

function openLightbox(src) {
  lightboxImg.src = src;
  lightbox.classList.add("show");
}

function closeLightbox() {
  lightbox.classList.remove("show");
}

closeBtn.addEventListener("click", closeLightbox);

lightbox.addEventListener("click", function (e) {
  if (e.target === lightbox) closeLightbox();
});

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") closeLightbox();
});


const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", function () {
  navLinks.classList.toggle("open");
});

navLinks.querySelectorAll("a").forEach(function (link) {
  link.addEventListener("click", function () {
    navLinks.classList.remove("open");
  });
});