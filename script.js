// Manejo del formulario (simulado)
const form = document.getElementById("formularioPMV");
const respuesta = document.getElementById("respuesta");

if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const nombre = document.getElementById("nombre").value.trim();
    const correo = document.getElementById("correo").value.trim();

    respuesta.style.background = "rgba(72, 187, 120, 0.15)";
    respuesta.style.color = "#22543d";
    respuesta.style.border = "2px solid #48bb78";
    respuesta.innerHTML = `
      <strong>¡Excelente, ${nombre || "amigo"}!</strong><br>
      Hemos recibido tu solicitud. Te contactaremos pronto a ${correo}.
    `;
    respuesta.classList.add("show");
    form.reset();

    setTimeout(() => respuesta.classList.remove("show"), 7000);
  });
}

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach((a) => {
  a.addEventListener("click", (e) => {
    e.preventDefault();
    const id = a.getAttribute("href").slice(1);
    const target = document.getElementById(id);
    if (!target) return;
    const navH = document.querySelector("nav")?.offsetHeight || 0;
    const top = target.offsetTop - navH;
    window.scrollTo({ top, behavior: "smooth" });
  });
});

// Animación al hacer scroll
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((en) => {
      if (en.isIntersecting) {
        en.target.style.opacity = "1";
        en.target.style.transform = "translateY(0)";
      }
    });
  },
  { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
);

document.querySelectorAll(".card, .feature-card").forEach((el) => {
  el.style.opacity = "0";
  el.style.transform = "translateY(30px)";
  el.style.transition = "opacity .6s ease, transform .6s ease";
  observer.observe(el);
});
