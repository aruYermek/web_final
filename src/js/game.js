//game
let correct = 0;
let total = 0;

const scoreSection = document.querySelector(".score");
const correctSpan = scoreSection.querySelector(".correct");
const totalSpan = scoreSection.querySelector(".total");
const playAgainBtn = document.querySelector("#play-again-btn");
playAgainBtn.style.display = "none";


let draggableElements;
let droppableElements;



initiateGame();

function initiateGame() {
    draggableElements = document.querySelectorAll(".jewelry-draggable");
    droppableElements = document.querySelectorAll(".droppable");

    draggableElements.forEach(elem => {
        elem.addEventListener("dragstart", dragStart);
    });

    droppableElements.forEach(elem => {
        elem.addEventListener("dragover", dragOver);
        elem.addEventListener("drop", drop);
    });
}

function dragStart(event) {
    event.dataTransfer.setData("text", event.target.id);
}

function dragOver(event) {
    event.preventDefault();
}

function drop(event) {
    event.preventDefault();
    const draggableElementId = event.dataTransfer.getData("text");
    const droppableElementFlower = event.target.getAttribute("data-flower");
    const isCorrectMatching = draggableElementId === droppableElementFlower;
    total++;

    if (isCorrectMatching) {
        const draggableImage = document.getElementById(draggableElementId);
        event.target.style.backgroundImage = `url(${draggableImage.src})`;
        event.target.style.backgroundSize = "cover";
        event.target.style.backgroundRepeat = "no-repeat";
        event.target.style.backgroundPosition = "center";
        correct++;
    }

    correctSpan.textContent = correct;
    totalSpan.textContent = total;

    if (correct === droppableElements.length) {
        playAgainBtn.style.display = "block";
    }
}

playAgainBtn.addEventListener("click", () => {
    correct = 0;
    total = 0;
    correctSpan.textContent = correct;
    totalSpan.textContent = total;
    playAgainBtn.style.display = "none";
    droppableElements.forEach(elem => {
        elem.style.backgroundImage = "";
    });
});

//quiz

const questions = [
    {
        question: "What is the main focus of the Jewelry World website?",
        options: [
            "Selling electronics",
            "Showcasing handcrafted jewelry",
            "Providing travel services",
            "Offering fitness equipment"
        ],
        correctAnswer: 1 
    },
    {
        question: "What is the belief expressed by Jewelry World about their jewelry?",
        options: [
            "It reflects standardized norms",
            "It's crafted without individuality",
            "It signifies uniqueness",
            "It lacks creativity"
        ],
        correctAnswer: 2 
    },
    {
        question: "What does the 'Collection' section of the website offer?",
        options: [
            "Only classic jewelry pieces",
            "Custom-designed clothing",
            "Fine jewelry with various designs",
            "Handmade pottery"
        ],
        correctAnswer: 2 
    },
    {
        question: "What is the price of the jewelry set named 'Mystique Elegancia'?",
        options: [
            "45,000 tg",
            "90,000 tg",
            "9,000 tg",
            "45,900 tg"
        ],
        correctAnswer: 3 
    },
    {
        question: "How can customers contact Jewelry World for inquiries?",
        options: [
            "Only through social media",
            "Via phone or email",
            "Through a physical address",
            "No contact information available"
        ],
        correctAnswer: 1 
    },
    {
        question: "What social media platform is mentioned on the website for Jewelry World?",
        options: [
            "Instagram",
            "Twitter",
            "Facebook",
            "LinkedIn"
        ],
        correctAnswer: 0
    },
    {
        question: "What is the slogan used on the Jewelry World website?",
        options: [
            "Where Beauty Meets Fashion",
            "Elegance in Every Detail",
            "Crafting Jewelry Since 1995",
            "Affordable Luxury at Its Best"
        ],
        correctAnswer: 1 
    },
    {
        question: "How is the 'New collection' described on the website?",
        options: [
            "Jewelry suitable for specific occasions",
            "A blend of elegance and artistry",
            "Electronics with advanced features",
            "No specific description provided"
        ],
        correctAnswer: 1 
    },
    {
        question: "Which type of jewelry is specifically designed to be worn on the finger?",
        options: [
            "Brooch",
            "Pendant",
            "Earring",
            "Ring"
        ],
        correctAnswer: 3
    },
    {
        question: "How much decoration is in the New Collection?",
        options: [
            "5",
            "10",
            "6",
            "8"
        ],
        correctAnswer: 3
    }
];

const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');


function displayQuestions() {
    let questionHTML = '';
    questions.forEach((question, index) => {
        questionHTML += `
            <h6>${index + 1}. ${question.question}</h6>
        `;
        question.options.forEach((option, optionIndex) => {
            questionHTML += `
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="question${index}" value="${optionIndex}" id="option${index}-${optionIndex}">
                    <label class="form-check-label" for="option${index}-${optionIndex}">${option}</label>
                </div>
            `;
        });
    });
    quizContainer.innerHTML = questionHTML;
}

function showResults() {
    let score = 0;
    questions.forEach((question, index) => {
        const selectedOption = document.querySelector(`input[name=question${index}]:checked`);
        if (selectedOption) {
            const selectedAnswer = parseInt(selectedOption.value);
            if (selectedAnswer === question.correctAnswer) {
                score++;
            }
        }
    });

    resultsContainer.innerHTML = `You scored ${score} out of ${questions.length}`;
}

displayQuestions();
submitButton.addEventListener('click', showResults);



