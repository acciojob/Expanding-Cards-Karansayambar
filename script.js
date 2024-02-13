// document.addEventListener("DOMContentLoaded", () => {
//   const panels = document.querySelectorAll(".panel");

//   panels.forEach((panel) => {
//     const text = panel.querySelector(".img-text");

//     panel.addEventListener("click", () => {
//       const className = "active";

//       if (!panel.classList.contains(className)) {
//         panel.classList.add(className);
//         text.style.display = "block";
//       } else {
//         panel.classList.remove(className);
//         text.style.display = "none";
//       }
//     });
//   });
// });   not work
document.addEventListener("DOMContentLoaded", () => {
    const panels = document.querySelectorAll('.panel');

    panels.forEach((panel, index) => {
        panel.addEventListener('click', () => {
            panels.forEach(p => p.classList.remove('active'));
            panel.classList.add('active');
        });
    });
});
