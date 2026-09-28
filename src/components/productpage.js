document.querySelectorAll(".item-sizes span").forEach(function (span) {
    span.addEventListener("click", function (event) {
        document.querySelectorAll(".item-sizes span").forEach(function (s) {
            s.classList.remove("selected");
        });

        event.target.classList.add("selected");
    });
});

