document.addEventListener("DOMContentLoaded", function () {
    const items = document.querySelectorAll(".bucket-list li");

    items.forEach(item => {
        item.addEventListener("click", () => {
            item.classList.toggle("completed");
            const icon = item.querySelector("i");
            if (item.classList.contains("completed")) {
                icon.textContent = "✔";
                icon.classList.add("checkmark");
                icon.classList.remove("pending");
            } else {
                icon.textContent = "✖";
                icon.classList.add("pending");
                icon.classList.remove("checkmark");
            }
        });
    });
});
