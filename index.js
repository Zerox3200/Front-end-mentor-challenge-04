let menu = document.querySelector(".menu");
let main_menu = document.querySelector(".main_menu");


menu.addEventListener("click", function () {
    if (main_menu.classList.contains("appere")) {
        main_menu.classList.remove("appere");
    } else {
        main_menu.classList.add("appere");
        let exit = document.querySelector(".main_menu img")
        exit.addEventListener("click", function () {
            main_menu.classList.remove("appere");
        })
    }
});
