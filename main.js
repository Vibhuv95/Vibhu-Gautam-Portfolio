var typed = new Typed(".text", {
    strings: ["Data Analyst", "Power BI Developer", "SQL Enthusiast", "Data Science Student"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

emailjs.init("kpi7E0rxWKlNUjkxe");

const form = document.getElementById("contact-form");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    const button = form.querySelector(".send");

    button.innerHTML = "Sending...";
    button.disabled = true;

    emailjs.sendForm(
        "service_xcacxie",
        "template_yiqodfk",
        this
    )

        .then(() => {

            alert("✅ Message Sent Successfully!");

            form.reset();

            button.innerHTML = "Send Message";
            button.disabled = false;

        })

        .catch((error) => {

            console.log("EmailJS Error:", error);

            alert(JSON.stringify(error));

            button.innerHTML = "Send Message";
            button.disabled = false;

        });

});