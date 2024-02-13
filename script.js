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
    panels.forEach((panel) => {
        panel.addEventListener('click', () => {
			const text1 = panel.querySelector(".img-text");
			panels.forEach((p) => {
				p.classList.remove('active')
				text1.style.display = "none";
			});
            panel.classList.add('active');
			text1.style.display = "flex";
        });
    });
});
