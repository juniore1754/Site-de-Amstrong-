// Message de bienvenue
document.addEventListener("DOMContentLoaded", () => {
  alert("Bienvenue sur Tech CI 🚀");
});

// Données des annonces / projets tech
const projects = [
  {
    title: "Projet Arduino",
    description: "Système de contrôle avec capteurs et automatisation."
  },
  {
    title: "Drone autonome",
    description: "Drone GPS capable de transporter des charges."
  },
  {
    title: "Énergie solaire",
    description: "Solutions solaires intelligentes pour l'Afrique."
  }
];

// Affichage dynamique
const projectSection = document.getElementById("projects");

if (projectSection) {
  projects.forEach(project => {
    const div = document.createElement("div");
    div.innerHTML = `
      <h3>${project.title}</h3>
      <p>${project.description}</p>
    `;
    projectSection.appendChild(div);
  });
}
