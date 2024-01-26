document.addEventListener('DOMContentLoaded', function () {
    const panels = document.querySelectorAll('.panel');

    function handlePanelClick() {
        // Remove 'active' class from all panels
        panels.forEach(otherPanel => {
            otherPanel.classList.remove('active');
        });

        // Add 'active' class to the clicked panel
        this.classList.add('active');
    }

    panels.forEach(panel => {
        panel.addEventListener('load', handlePanelClick);
        panel.addEventListener('click', handlePanelClick);
    });
});
