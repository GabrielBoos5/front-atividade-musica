let musicItems = [...document.querySelectorAll(".music-item")] ;
let currentSelectedMusic = null;
const likeButtonElement = document.querySelector(".music-buttons .button-like");
const dislikeButtonElement = document.querySelector(".music-buttons .button-dislike");



function onLikeButtonClicked () {
	console.log("likeclicked")
	likeButtonElement.classList.add("active")
	dislikeButtonElement.classList.remove("active")
	if (currentSelectedMusic !== null) {
		currentSelectedMusic.dataset.vote = "up"
	}
}

function onDislikeButtonClicked () {
	console.log("dislikeclicked")
	dislikeButtonElement.classList.add("active")
	likeButtonElement.classList.remove("active")
	if (currentSelectedMusic !== null) {
		currentSelectedMusic.dataset.vote = "down"
	}
}

function onItemClick () {
	currentSelectedMusic = this;
	const titleElement = document.querySelector(".current-music-title");
	const infoElement = document.querySelector(".current-music-info");
	const selectedTitleElement = this.querySelector(".music-title");
	const selectedInfoElement = this.querySelector(".music-info");
	const selectedImageElement = this.querySelector(".music-img img");
	console.log(this.dataset.vote);


	if (titleElement && infoElement && selectedTitleElement && selectedInfoElement) {
		titleElement.innerHTML = selectedTitleElement.innerHTML;
		infoElement.innerHTML = selectedInfoElement.innerHTML;		
		document.body.style.setProperty("--background",`url('${selectedImageElement.src}')`);		
		if (this.dataset.vote==="up") {
			likeButtonElement.classList.add("active")
			dislikeButtonElement.classList.remove("active")
		} else if (this.dataset.vote==="down") {
			dislikeButtonElement.classList.add("active")
			likeButtonElement.classList.remove("active")
		} else {
			likeButtonElement.classList.remove("active")
			dislikeButtonElement.classList.remove("active")
		}
	}
	
}

function addClickEventOnItem (item) {
    item.addEventListener("click", onItemClick);
}

likeButtonElement.addEventListener("click", onLikeButtonClicked);
dislikeButtonElement.addEventListener("click", onDislikeButtonClicked);


musicItems.forEach(addClickEventOnItem);


