// Inicializar EmailJS
(function () {
  emailjs.init("9YudBLJrlnXahvnqa");
})();

// ========== MENÚ MÓVIL ==========
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.getElementById('nav-links');

mobileMenu.addEventListener('click', () => {
  mobileMenu.classList.toggle('active');
  navLinks.classList.toggle('active');
});

// Cerrar menú al hacer click en un enlace
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
    navLinks.classList.remove('active');
  });
});

// ========== FORMULARIO DE CONTACTO ==========
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

// ========== FAQ ACCORDION ==========
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
  const question = item.querySelector('.faq-question');
  
  question.addEventListener('click', () => {
    // Cerrar otros items
    faqItems.forEach(otherItem => {
      if (otherItem !== item) {
        otherItem.classList.remove('active');
      }
    });
    
    // Toggle el item actual
    item.classList.toggle('active');
  });
});

// ========== CALCULADORA DE PLANES ==========
document.getElementById('calcular-plan').addEventListener('click', () => {
  const personas = parseInt(document.getElementById('calc-personas').value);
  const actividad = document.getElementById('calc-actividad').value;
  const dispositivos = parseInt(document.getElementById('calc-dispositivos').value);

  let puntos = 0;

  // Sumar puntos según respuestas
  puntos += personas;
  puntos += dispositivos;

  if (actividad === 'basico') puntos += 1;
  if (actividad === 'medio') puntos += 3;
  if (actividad === 'alto') puntos += 5;
  if (actividad === 'muy-alto') puntos += 7;

  // Determinar plan recomendado
  let planRecomendado = '';
  let velocidad = '';
  let precio = '';
  let descripcion = '';
  let caracteristicas = '';

  if (puntos <= 4) {
    planRecomendado = 'Plan Básico';
    velocidad = '5 Mbps';
    precio = 'RD$ 900/mes';
    descripcion = 'Ideal para navegación básica y redes sociales';
    caracteristicas = '<li>Navegación web</li><li>Redes sociales</li><li>Correo electrónico</li>';
  } else if (puntos <= 7) {
    planRecomendado = 'Plan Estándar';
    velocidad = '10 Mbps';
    precio = 'RD$ 1,000/mes';
    descripcion = 'Perfecto para streaming en calidad estándar';
    caracteristicas = '<li>Streaming SD</li><li>Videollamadas</li><li>Navegación rápida</li>';
  } else if (puntos <= 10) {
    planRecomendado = 'Plan Popular';
    velocidad = '20 Mbps';
    precio = 'RD$ 1,200/mes';
    descripcion = 'Excelente para familias y gaming casual';
    caracteristicas = '<li>Streaming HD</li><li>Gaming online</li><li>Múltiples dispositivos</li>';
  } else if (puntos <= 13) {
    planRecomendado = 'Plan Avanzado';
    velocidad = '30 Mbps';
    precio = 'RD$ 1,400/mes';
    descripcion = 'Para usuarios exigentes y gamers';
    caracteristicas = '<li>Streaming Full HD</li><li>Gaming sin lag</li><li>Descargas rápidas</li>';
  } else if (puntos <= 16) {
    planRecomendado = 'Plan Premium';
    velocidad = '50 Mbps';
    precio = 'RD$ 1,600/mes';
    descripcion = 'Lo mejor para hogares conectados';
    caracteristicas = '<li>Streaming 4K</li><li>Gaming profesional</li><li>Smart Home</li>';
  } else {
    planRecomendado = 'Plan Ultra';
    velocidad = '100 Mbps';
    precio = 'RD$ 1,800/mes';
    descripcion = 'Máxima velocidad para empresas y power users';
    caracteristicas = '<li>Máxima velocidad</li><li>Múltiples streaming 4K</li><li>Empresas y oficinas</li>';
  }

  // Mostrar resultado
  const resultadoDiv = document.getElementById('resultado-plan-info');
  resultadoDiv.innerHTML = `
    <h4 style="color: #0c4a6e; margin-bottom: 1rem; font-size: 1.8rem;">${planRecomendado}</h4>
    <div class="plan-speed">${velocidad}</div>
    <div class="plan-price">${precio}</div>
    <p style="margin: 1.5rem 0; font-weight: 600;">${descripcion}</p>
    <ul>${caracteristicas}</ul>
    <a href="https://wa.me/18297496820?text=Hola,%20estoy%20interesado%20en%20el%20${planRecomendado}%20de%20${velocidad}" 
       class="plan-button" 
       target="_blank" 
       style="margin-top: 1.5rem; display: inline-block;">
      Contratar Ahora
    </a>
  `;
});

// ========== FORMULARIO DE TESTIMONIOS ==========
document.getElementById('testimonioForm').addEventListener('submit', async function(event) {
  event.preventDefault();

  const nombre = document.getElementById('test-nombre').value;
  const plan = document.getElementById('test-plan').value;
  const calificacion = document.getElementById('test-calificacion').value;
  const comentario = document.getElementById('test-comentario').value;

  const testimonioData = {
    nombre: nombre,
    plan: plan,
    calificacion: calificacion,
    comentario: comentario,
    fecha: new Date().toLocaleDateString()
  };

  // Crear mensaje para WhatsApp
  const estrellas = '⭐'.repeat(parseInt(calificacion));
  const whatsappMessage = `*Nuevo Testimonio de Cliente*%0A%0A` +
    `👤 *Nombre:* ${nombre}%0A` +
    `📦 *Plan:* ${plan}%0A` +
    `⭐ *Calificación:* ${estrellas}%0A` +
    `💬 *Comentario:*%0A${comentario}`;

  // Enviar también por EmailJS
  try {
    await emailjs.send("service_hucq0ql", "template_o48o9e9", {
      nombre: nombre,
      telefono: 'Testimonio Web',
      email: 'testimonio@multired.com',
      plan: plan,
      mensaje: `TESTIMONIO (${calificacion} estrellas): ${comentario}`
    });

    // Abrir WhatsApp
    const whatsappURL = `https://wa.me/18297496820?text=${whatsappMessage}`;
    window.open(whatsappURL, '_blank');

    alert("✅ ¡Gracias por tu testimonio! Lo revisaremos pronto.");
    document.getElementById('testimonioForm').reset();
  } catch (error) {
    console.error(error);
    alert("❌ Error al enviar el testimonio. Intenta de nuevo.");
  }
});

// ========== SMOOTH SCROLL ==========
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target)
      target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

// ========== HEADER SCROLL EFFECT ==========
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  if (window.scrollY > 100)
    header.style.background = "rgba(255, 255, 255, 0.98)";
  else 
    header.style.background = "rgba(255, 255, 255, 0.95)";
});

// ========== ANIMACIONES AL HACER SCROLL ==========
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Observar elementos que queremos animar
document.querySelectorAll('.plan-card, .oferta-card, .valor-card, .cobertura-card, .testimonio-card, .faq-item').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(30px)';
  el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
  observer.observe(el);
});