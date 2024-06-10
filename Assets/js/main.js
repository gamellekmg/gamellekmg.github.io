document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".select-service").forEach(function (button) {
        button.addEventListener("click", function () {
            const form = this.closest("form");
            const service = form.querySelector("#hairstyle").value;
            const size = form.querySelector("#size").value;
            const length = form.querySelector("#length").value;
            const specialist = form.querySelector("#specialist").value;
            const price = 100; // fixed price

            const selectedService = {
                service: service,
                size: size,
                length: length,
                specialist: specialist,
                price: price,
            };

            localStorage.setItem("selectedService", JSON.stringify(selectedService));

            window.location.href = "Appointment.html";
        });
    });
});
