// Initialize AOS (Animate On Scroll)
AOS.init({
  duration: 1000, // smooth animation
  once: true      // animation only once per section
});

// Theme toggle
const toggleButton = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;

// Set initial icon based on saved preference (optional enhancement)
if (localStorage.getItem("theme") === "dark") {
  htmlElement.classList.add("dark");
  toggleButton.textContent = "☀️";
} else {
  toggleButton.textContent = "🌙";
}

// Toggle logic
toggleButton.addEventListener("click", () => {
  htmlElement.classList.toggle("dark");

  const isDark = htmlElement.classList.contains("dark");
  toggleButton.textContent = isDark ? "☀️" : "🌙";

  // Optional: store preference
  localStorage.setItem("theme", isDark ? "dark" : "light");
});
