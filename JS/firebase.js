<script type="module">
    import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
    import {
      getFirestore,
      addDoc,
      collection,
    } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

    const firebaseConfig = {
      apiKey: "AIzaSyAFqrOI1iOaQcdUuSjoygy8Mlxd8X5nu_4",
      authDomain: "multired-web-301a2.firebaseapp.com",
      projectId: "multired-web-301a2",
      storageBucket: "multired-web-301a2.firebasestorage.app",
      messagingSenderId: "468710555928",
      appId: "1:468710555928:web:1a2da6a0b85edbd6489e6d",
    };

    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);

    window.handleSubmit = async function (event) {
      event.preventDefault();

      await addDoc(collection(db, "contactos"), {
        nombre: nombre.value,
        telefono: telefono.value,
        email: email.value,
        plan: plan.value,
        mensaje: mensaje.value,
        fecha: new Date(),
      });

      alert("Mensaje enviado correctamente ✅");
      event.target.reset();
    };
  </script>

  <script>
    function handleSubmit(event) {
      event.preventDefault();

      const params = {
        nombre: document.getElementById("nombre").value,
        telefono: document.getElementById("telefono").value,
        email: document.getElementById("email").value,
        plan: document.getElementById("plan").value,
        mensaje: document.getElementById("mensaje").value,
      };

      emailjs
        .send("service_hucq0ql", "template_o48o9e9", params)
        .then(() => {
          alert("✅ Mensaje enviado correctamente. ¡Gracias!");
          event.target.reset();
        })
        .catch((error) => {
          alert("❌ Error al enviar el mensaje. Intenta de nuevo.");
          console.error(error);
        });
    }
  </script>

  <script src="https://cdn.jsdelivr.net/npm/emailjs-com@3/dist/email.min.js"></script>

  <script>
    (function () {
      emailjs.init("9YudBLJrlnXahvnqa");
    })();
  </script>

  <script>
    document
      .getElementById("contactForm")
      .addEventListener("submit", function (event) {
        event.preventDefault();

        // Recopila los datos
        const params = {
          nombre: document.getElementById("nombre").value,
          telefono: document.getElementById("telefono").value,
          email: document.getElementById("email").value,
          plan: document.getElementById("plan").value,
          mensaje: document.getElementById("mensaje").value,
        };

        // Envía por EmailJS
        emailjs
          .send("service_hucq0ql", "template_o48o9e9", params)
          .then(() => {
            alert("✅ Mensaje enviado correctamente. ¡Gracias!");
            document.getElementById("contactForm").reset();
          })
          .catch((error) => {
            console.error(error);
            alert("❌ Error al enviar el mensaje. Intenta de nuevo.");
          });
      });
  </script>