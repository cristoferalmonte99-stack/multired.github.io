   (function () {
        emailjs.init("9YudBLJrlnXahvnqa");
      })();
 
 // Formulario EmailJS
      document
        .getElementById("contactForm")
        .addEventListener("submit", async function (event) {
          event.preventDefault();

          const params = {
            nombre: document.getElementById("nombre").value,
            telefono: document.getElementById("telefono").value,
            email: document.getElementById("email").value,
            plan: document.getElementById("plan").value,
            mensaje: document.getElementById("mensaje").value,
          };

          try {
            await emailjs.send("service_hucq0ql", "template_o48o9e9", params);
            // Si quieres Firebase, descomenta la siguiente línea:
            // await addDoc(collection(db, "contactos"), { ...params, fecha: new Date() });

            alert("✅ Mensaje enviado correctamente. ¡Gracias!");
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

      // Header scroll effect
      window.addEventListener("scroll", () => {
        const header = document.querySelector("header");
        if (window.scrollY > 100)
          header.style.background = "rgba(10,14,39,0.98)";
        else header.style.background = "rgba(10,14,39,0.95)";
      });