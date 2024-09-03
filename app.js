(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function () {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    })
    

    document.querySelector("#Btn").addEventListener("click", () => {
        let btn=document.getElementById("imageContainer")
        if (btn.style.display === "block") {
            btn.style.display = "none"
            document.querySelector("#Btn").innerHTML="View CV"
            let IMG = document.querySelector(".image")
            IMG.style.display="flex"
        }
        else {
            btn.style.display = "block"
            document.querySelector("#Btn").innerHTML="Hide CV"
            let image=document.querySelector(".image")
            image.style.display="none"
        }
    })
})();

