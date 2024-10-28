document.addEventListener("DOMContentLoaded", function() {
    const contactForm = document.getElementById("contactForm");
    const formFeedback = document.getElementById("formFeedback");

    contactForm.addEventListener("submit", async function(event) {
        event.preventDefault();

        // Récupérer les données du formulaire
        const formData = new FormData(contactForm);

        try {
            // Envoyer le formulaire avec fetch vers l'URL Formspree
            const response = await fetch("https://formspree.io/f/yourFormspreeID", {
                method: "POST",
                headers: {
                    "Accept": "application/json"
                },
                body: formData
            });

            // Vérifier si la réponse est OK
            if (response.ok) {
                formFeedback.textContent = "Merci pour votre message ! Nous vous répondrons dès que possible.";
                formFeedback.style.color = "green";
                contactForm.reset();
            } else {
                throw new Error("Une erreur est survenue lors de l'envoi du formulaire.");
            }
        } catch (error) {
            formFeedback.textContent = "Une erreur est survenue. Veuillez réessayer.";
            formFeedback.style.color = "red";
        }
    });
});
