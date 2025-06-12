const body = document.querySelector("body"),
	lastMoodName = document.querySelector("#last-mood-name"),
	SecontionDashboard = document.querySelector(".dashboard"),
	MoodIMG = document.querySelector("#last-mood-img"),
	LogMoodBTN = document.querySelector("#log-mood"),
	colorPallet = [
		"amber-300",
		"green-300",
		"blue-300",
		"indigo-200",
		"red-300",
	],
	NamePallet = ["Very Happy", "Happy", "Neutral", "Sad", "Very Sad"],
	NamePallet2 = ["very-happy", "happy", "neutral", "sad", "very-sad"];

let Modal = "",
	MoodList = [],
	listMood = document.querySelector("#list-mood");

LogMoodBTN.addEventListener("click", (e) => {
	e.preventDefault();
	ShowModal();
});

function AddMood(idx) {
	MoodList.push(idx);
	UpdateList();
}

function UpdateList() {
	listMood.remove();
	let tempv = document.createElement("div");
	tempv.className = "list-mood";
	tempv.id = "list-mood";
	listMood = tempv;
	SecontionDashboard.appendChild(tempv);

	for (let i = 0; i < MoodList.length; i++) {
		let a = MoodList[MoodList.length - i - 1];

		let MainDiv = document.createElement("div");
		MainDiv.classList.add("mood-card");
		MainDiv.classList.add(colorPallet[a]);

		let p = document.createElement("p");
		p.innerText = NamePallet[a];
		p.style.fontWeight = "600";
		p.style.fontSize = "24px";

		MainDiv.appendChild(p);
		listMood.appendChild(MainDiv);
	}
	lastMoodName.innerText = NamePallet[MoodList[MoodList.length - 1]];
	MoodIMG.src = `assets/${NamePallet2[MoodList[MoodList.length - 1]]}.svg`;
}

function ShowModal() {
	Modal = CreatModal();
	body.appendChild(Modal);
}

function RemoveModal() {
	Modal.remove();
}

function CreatModal() {
	let SuperMainDiv = document.createElement("div");
	SuperMainDiv.className = "modal";

	let Form = document.createElement("div");
	Form.className = "log-form";

	let btn = document.createElement("button");
	btn.classList.add("btn");
	btn.classList.add("text");
	btn.type = "button";
	btn.style.alignSelf = "flex-end";

	let imgBTN = document.createElement("img");
	imgBTN.src = "assets/close.svg";
	imgBTN.alt = "close";
	btn.appendChild(imgBTN);

	let h2 = document.createElement("h2");
	h2.className = "text-preset-2";
	h2.textContent = "Log your mood";

	let h3 = document.createElement("h3");
	h3.className = "text-preset-3";
	h3.textContent = "How was your mood today ?";

	Form.appendChild(btn);
	Form.appendChild(h2);
	Form.appendChild(h3);

	for (let i = 0; i < NamePallet2.length; i++) {
		let label = document.createElement("label");

		let input = document.createElement("input");
		input.type = "radio";
		input.name = "mood";
		input.value = NamePallet2[i];

		let h5 = document.createElement("h5");
		h5.className = "text-preset-5";
		h5.textContent = NamePallet[i];

		label.appendChild(input);
		label.appendChild(h5);
		Form.appendChild(label);
	}

	let btn2 = document.createElement("button");
	btn2.classList.add("btn");
	btn2.classList.add("block");
	btn2.classList.add("blue-600");
	btn2.classList.add("neutral-o-text");
	btn2.type = "submit";

	let h4 = document.createElement("h4");
	h4.textContent = "Log Mood";
	h4.className = "text-preset-4";

	btn2.appendChild(h4);
	Form.appendChild(btn2);

	SuperMainDiv.appendChild(Form);

	btn.addEventListener("click", () => {
		RemoveModal();
	});

	btn2.addEventListener("click", () => {
		let temp = 0;
		let temp2 = 0;
		let element = Form.querySelectorAll("input");
		for (let i = 0; i < element.length + 1; i++) {
			temp = i;
			temp2++;
			if (temp2 < element.length + 1) {
				if (element[i].checked == true) break;
			}
		}
		if (temp2 < element.length + 1) AddMood(temp);
		RemoveModal();
	});

	return SuperMainDiv;
}
