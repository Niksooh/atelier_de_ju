
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("orderForm");

    form.addEventListener("submit", (event) => {
      event.preventDefault();

      const formData = {
        firstName: document.getElementById("firstName").value,
        lastName: document.getElementById("lastName").value,
        email: document.getElementById("email").value,
        number: document.getElementById("number").value,
        message: document.getElementById("message").value,
      };

      console.log("Form Data Submitted:", formData);

      form.submit();
    });
  });
