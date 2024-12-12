const main = document.querySelector("main");

const data = [
    {
        image: "./img/reading.jpg",
        text: "I am reading"
    },
    {
        image: "./img/running.jpg",
        text: "I am running"
    },
    {
        image: "./img/talking.jpg",
        text: "I am talking"
    },
    {
        image: "./img/jumping.png",
        text: "I am jumping"
    },
    {
        image: "./img/walking.png",
        text: "I am walking"
    },
    {
        image: "./img/eating.jpg",
        text: "I am eating"
    }
];

data.forEach(createbox);

// Create speech box with button that contains image and text
function createbox(item) {
    const box = document.createElement("div");

    const { image, text } = item; // destructuring

    box.classList.add("box");

    // Create a button that will contain both image and text
    const button = document.createElement("button");
    button.classList.add("button");

    // Create image inside the button
    const img = document.createElement("img");
    img.src = image;
    img.alt = text;

    // Create text inside the button
    const p = document.createElement("p");
    p.classList.add("info");
    p.textContent = text;

    // Append the image and text to the button
    button.appendChild(img);
    button.appendChild(p);

    // Set up button click event for speech
    button.addEventListener("click", () => {
        setTextMessages(text);
        speakText();
    });

    // Append the button to the box
    box.appendChild(button);

    // Append the box to the main element
    main.appendChild(box);
}

const messege = new SpeechSynthesisUtterance();

function setTextMessages(text) {
    messege.text = text;
}

function speakText() {
    speechSynthesis.speak(messege);
}
