// Inicializar EmailJS
(function () {
  emailjs.init("9YudBLJrlnXahvnqa");
})();

// Formulario EmailJS + WhatsApp
document
  .getElementById("contactForm")
  .addEventListener("submit", async function (event) {
    event.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const telefono = document.getElementById("telefono").value;
    const email = document.getElementById("email").value;
    const plan = document.getElementById("plan").value;
    const mensaje = document.getElementById("mensaje").value;

    const params = {
      nombre: nombre,
      telefono: telefono,
      email: email,
      plan: plan,
      mensaje: mensaje,
    };

    try {
      // Enviar por EmailJS
      await emailjs.send("service_hucq0ql", "template_o48o9e9", params);

      // Crear mensaje para WhatsApp
      const whatsappMessage = `*Nuevo contacto desde la web*%0A%0A` +
        `👤 *Nombre:* ${nombre}%0A` +
        `📞 *Teléfono:* ${telefono}%0A` +
        `📧 *Email:* ${email}%0A` +
        `📦 *Plan de interés:* ${plan || 'No especificado'}%0A` +
        `💬 *Mensaje:* ${mensaje}`;

      // Abrir WhatsApp con el mensaje
      const whatsappURL = `https://wa.me/18297496820?text=${whatsappMessage}`;
      window.open(whatsappURL, '_blank');

      alert("✅ Mensaje enviado correctamente. ¡Gracias! Se abrirá WhatsApp para completar tu solicitud.");
      document.getElementById("contactForm").reset();
    } catch (error) {
      console.error(error);
      alert("❌ Error al enviar el mensaje. Intenta de nuevo.");
    }
  });

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target)
      target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

     // Header scroll effect - VERSIÓN AZUL CLARO
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  if (window.scrollY > 100)
    header.style.background = "rgba(186, 230, 253, 0.98)"; // Azul claro
  else 
    header.style.background = "rgba(255, 255, 255, 0.95)"; // Blanco
});