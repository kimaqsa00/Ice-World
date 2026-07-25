document.addEventListener("DOMContentLoaded", () => {

    // ==========================
    // Toast Message
    // ==========================
    function showToast(message) {

        const toast = document.getElementById("toast-message");

        if (!toast) {
            alert(message);
            return;
        }

        toast.innerHTML = message;
        toast.style.display = "block";

        clearTimeout(window.toastTimer);

        window.toastTimer = setTimeout(() => {
            toast.style.display = "none";
        }, 3000);

    }

    // ==========================
    // Newsletter
    // ==========================
    const subBtn = document.getElementById("sub-btn");

    if (subBtn) {

        subBtn.addEventListener("click", () => {

            const email = document.getElementById("sub-email");

            if (email.value.trim() === "") {
                showToast("Please enter your email.");
                return;
            }

            showToast("Your email has been sent successfully!");

            email.value = "";

        });

    }

    // ==========================
    // Contact Form
    // ==========================
    const contactForm = document.getElementById("contact-form");

    if (contactForm) {

        contactForm.addEventListener("submit", function (e) {

            e.preventDefault();

            showToast("Your message has been sent successfully!");

            contactForm.reset();

        });

    }

});