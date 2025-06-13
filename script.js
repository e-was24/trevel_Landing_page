const menuButton = document.querySelector(".menu");
const nav = document.querySelector(".nav");

menuButton.addEventListener("click", () => {
  nav.classList.toggle("active");
  menuButton.classList.toggle("on");
});

// ads

const images = ["img/mounth.jpg", "img/Comodo-island.jpg"];

let currentIndex = 0;
const slide = document.getElementById("slide");

function showNextImage() {
  currentIndex = (currentIndex + 1) % images.length; // Loop kembali ke awal
  slide.src = images[currentIndex];
}

setInterval(showNextImage, 3000); // Ganti gambar setiap 3 detik

// GSAP

if (window.matchMedia("(max-width: 768px)").matches) {
  gsap.from(".CTA", {
    delay: 0.3,
    x: -300,
  });
  gsap.from(".CTA p", {
    delay: 0.7,
    x: -250,
    stagger: 0.2,
  });
}

// produk
const dataCards = [
  {
    img: "img/mounth.jpg",
    title: "Jakarta",
    price: "Rp1.000.000",
    category: "java"
  },
  {
    img: "img/mounth.jpg",
    title: "Jawa Barat",
    price: "Rp900.000",
    category: "java"
  },
  {
    img: "img/mounth.jpg",
    title: "Jawa Tengah",
    price: "Rp-",
    category: "java"
  },
  {
    img: "img/mounth.jpg",
    title: "Jawa Timur",
    price: "Rp800.000",
    category: "java"
  },
  {
    img: "img/mounth.jpg",
    title: "Medan",
    price: "Rp700.000",
    category: "sumatra"
  },
  {
    img: "img/mounth.jpg",
    title: "Palembang",
    price: "Rp600.000",
    category: "sumatra"
  },
  {
    img: "img/mounth.jpg",
    title: "Padang",
    price: "Rp500.000",
    category: "sumatra"
  }
];

function renderCards(category) {
  const container = document.getElementById(`card-${category}`);
  const titleEl = document.getElementById(`title-${category}`);
  const originalTitle = titleEl.textContent;

  container.innerHTML = "";

  const filteredCards = dataCards.filter(card => card.category === category);

  filteredCards.forEach(card => {
    const cardDiv = document.createElement("div");
    cardDiv.classList.add("card");

    cardDiv.innerHTML = `
      <img src="${card.img}" alt="${card.title}" />
      <div class="title-price">
        <h3>${card.title}</h3>
      </div>
    `;
// <p class="price">${card.price}</p>
    // Hover effect update judul kategori
  cardDiv.addEventListener("mouseenter", () => {
  titleEl.innerHTML = `${originalTitle} <span class="price-inline">${card.price}</span>`;
});
cardDiv.addEventListener("mouseleave", () => {
  titleEl.textContent = originalTitle;
});


    container.appendChild(cardDiv);
  });
}

// Render untuk semua kategori
["java", "sumatra"].forEach(cat => renderCards(cat));

