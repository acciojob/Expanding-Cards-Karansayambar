const panel = document.querySelector(".panel");
const text = document.quertSelector(".img-text");
panel.addEventListener("click", () => {
	const className ="active"
	if(panel.classList != className){
		panel.classList.add(className);
		text.style.display = "block";
	}else{
		panel.classList.remove(className);
		text.style.display = "none";
	}
})