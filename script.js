document.addEventListener('DOMContentLoaded', function () {
    const panels = document.querySelectorAll('.panel');

    panels.forEach(panel => {
        panel.addEventListener('click', function () {
            // Remove 'active' class from all panels
            panels.forEach(otherPanel => {
                otherPanel.classList.remove('active');
            });

            // Add 'active' class to the clicked panel
            this.classList.add('active');
        });
    });
});
