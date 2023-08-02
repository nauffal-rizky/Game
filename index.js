const chara = document.querySelector("#player");
const obstacle = document.querySelector("#obstacle");

window.addEventListener("click", () => {
	if (chara.classList != "jump") {
		chara.classList.add("jump");
	}
	setTimeout(() => {
		chara.classList.remove("jump");
	}, 500);
});

const checkDead = setInterval(() => {
	const charaBottom = parseInt(
		window.getComputedStyle(chara).getPropertyValue("bottom")
	);
	const obstacleRight = parseInt(
		window.getComputedStyle(chara).getPropertyValue("right")
	);

	// console.log(obstacleRight);
	// if (obstacleRight < 0) {
	// 	obstacle.style.animation = "none";
	// 	obstacle.style.display = "none";
	// 	alert(`YOU LOSE!!!`);
	// }
}, 10);
