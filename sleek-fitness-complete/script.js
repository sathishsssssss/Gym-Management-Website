const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

if (menuBtn) {
    menuBtn.addEventListener("click", () => {
        nav.classList.toggle("open");
    });
}




document.querySelectorAll(".year").forEach((element) => {
    element.textContent = new Date().getFullYear();
});




document.querySelectorAll(".plan-btn").forEach((button) => {

    button.addEventListener("click", () => {

        const selectedPlan = button.dataset.plan;

        localStorage.setItem(
            "selectedPlan",
            selectedPlan
        );

        window.location.href = "contact.html";
    });

});




const membership =
    document.getElementById("membership");

if (membership) {

    const plan =
        localStorage.getItem("selectedPlan");

    if (plan) {
        membership.value = plan;
    }
}




const contactForm =
    document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener(
        "submit",
        (event) => {

            event.preventDefault();

            alert(
                "Thank you! Your request has been submitted. This is a demo website."
            );

            contactForm.reset();

        }
    );
}




const loginForm =
    document.getElementById("loginForm");

if (loginForm) {

    loginForm.addEventListener(
        "submit",
        (event) => {

            event.preventDefault();

            const email =
                document.getElementById("adminEmail").value;

            const password =
                document.getElementById("adminPassword").value;

            const message =
                document.getElementById("loginMsg");


            if (
                email === "admin@sleekfitness.in" &&
                password === "admin123"
            ) {

                localStorage.setItem(
                    "adminLogged",
                    "1"
                );

                window.location.href =
                    "admin.html";

            } else {

                message.textContent =
                    "Invalid demo login details.";

                message.style.color =
                    "#ff6248";
            }

        }
    );
}




if (
    location.pathname.endsWith("admin.html") &&
    localStorage.getItem("adminLogged") !== "1"
) {

    window.location.href = "login.html";
}




const logout =
    document.getElementById("logout");

if (logout) {

    logout.addEventListener(
        "click",
        () => {

            localStorage.removeItem(
                "adminLogged"
            );

            window.location.href =
                "login.html";

        }
    );
}