// Liste des produits avec informations pour chaque modale
const products = [
  {
    id: "modal1",
    image: "chemin-vers-image1.jpg",
    title: "Bougie Parfumée",
    description:
      "Une bougie parfumée pour apaiser l'esprit et créer une ambiance chaleureuse dans votre maison.",
  },
  {
    id: "modal2",
    image: "chemin-vers-image2.jpg",
    title: "Fondant Parfumé",
    description:
      "Un fondant aux huiles essentielles, idéal pour un moment de détente et de relaxation.",
  },
  {
    id: "modal3",
    image: "chemin-vers-image3.jpg",
    title: "Bougie aux Agrumes",
    description:
      "Une bougie revigorante avec un mélange d'huiles essentielles d'agrumes pour une ambiance énergisante.",
  },
];

// Fonction pour créer et insérer les modales dans le DOM
function createModals() {
  const body = document.body;

  products.forEach((product) => {
    const modal = document.createElement("div");
    modal.classList.add("modal");
    modal.id = product.id;
    modal.innerHTML = `
            <div class="modal-content">
                <span class="close" onclick="closeModal('${product.id}')">&times;</span>
                <img src="${product.image}" alt="${product.title}" />
                <h3>${product.title}</h3>
                <p>${product.description}</p>
            </div>
        `;
    modal.style.display = "none"; // Masquer la modale par défaut
    body.appendChild(modal);
  });
}

// Fonction pour ouvrir la modale
function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.style.display = "flex";
  }
}

// Fonction pour fermer la modale
function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.style.display = "none";
  }
}

// Crée les modales et ajoute les événements de clic lors du chargement de la page
document.addEventListener("DOMContentLoaded", () => {
  createModals();

  // Ajoute l'événement de clic aux cartes produit
  document.querySelectorAll(".product-card").forEach((card, index) => {
    card.addEventListener("click", () => {
      openModal(products[index].id);
    });
  });
});
