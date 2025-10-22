// Utility functions for the portfolio

export const formatTechStack = (techArray) => {
  return techArray.join(" • ");
};

export const getProjectCategoryColor = (category) => {
  const colors = {
    "Full-Stack": "badge-primary",
    "AI/ML": "badge-secondary",
    "Mobile": "badge-accent",
    "Web": "badge-info"
  };
  return colors[category] || "badge-neutral";
};

export const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};