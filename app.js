const DEMO_PROJECTS = [
  {
    title: "Supply Chain Management (Backend)",
    description: "Spring Boot REST API with JPA + MySQL. Handles suppliers, products, orders, shipments.",
    tech: "Java, Spring Boot, Spring Data JPA, MySQL",
    repo: "https://github.com/shriramingole/SupplyChainManagementSystem"
  },
  {
    title: "E-Commerce-Shopping-Cart",
    description: "Spring Boot backend + simple responsive HTML/CSS/JS frontend for shopping-cart registration.",
    tech: "Java, Spring Boot, MySQL, HTML/CSS/JS",
    repo: "https://github.com/shriramingole/ngo-volunteer-portal"
  },
  {
    title: "Portfolio Site (This)",
    description: "Personal portfolio showcasing projects and skills. Static frontend + optional Spring Boot backend.",
    tech: "HTML, CSS, JavaScript, Spring Boot (optional)",
    repo: "https://github.com/shriramingole/portfolio"
  }
];

function renderProjects(list){
  const el = document.getElementById('project-list');
  el.innerHTML = DEMO_PROJECTS.map(p => `
    <article class="project-card">
      <h3>${escapeHtml(p.title)}</h3>
      <p>${escapeHtml(p.description)}</p>
      <p><strong>Tech:</strong> ${escapeHtml(p.tech)}</p>
      <p class="project-links">
        ${p.repo ? `<a href="${p.repo}" target="_blank">Repo</a>` : ''}
      </p>
    </article>
  `).join('');
}

function escapeHtml(s){ if(!s) return ''; return s.replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;'); }

document.addEventListener('DOMContentLoaded', () => {
  renderProjects(DEMO_PROJECTS);
});
