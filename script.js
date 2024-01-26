document.addEventListener('DOMContentLoaded', function () {
    const panels = document.querySelectorAll('.panel');
	const panel-2 = document.getElementById("panel-2");
    panels.forEach(panel => {
        panel.addEventListener('click', function () {
            // Remove 'active' class from all panels
            panels.forEach(otherPanel => {
                otherPanel.classList.remove('active');
            });

            // Add 'active' class to the clicked panel
            this.classList.add('active');
			panel-2.classList.add('active');
        });
    });
});
