document.addEventListener("DOMContentLoaded", function () {
    const panels = document.querySelectorAll('.panel');

    panels.forEach(panel => {
        panel.addEventListener('click', function () {
            panels.forEach(otherPanel => {
                otherPanel.classList.remove('active');
            });
            this.classList.add('active');
        });
    });
});
