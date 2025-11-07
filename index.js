// Easy questions array
const easyQuestions = [
    {
        id: 1,
        prompt: "When did the Vietnam War end?",
        choices: { a: 1975, b: 1976, c: 1965, d: 1967},
        correct: "a",
    },
    {
        id: 2,
        prompt: "Who was the first person to land on the moon?",
        choices: { a: "Neil Armstrong", b: "Buzz Aldrin", c: "Pete Conrad", d: "Alan Bean"},
        correct: "a",
    },
    {
        id: 3,
        prompt: "How many Pirates of the Caribbean films are there",
        choices: { a: 4, b: 5, c: 6, d: 7},
        correct: "b",
    },
    {
        id: 4,
        prompt: "What is the closest planet to the sun?",
        choices: { a: "Venus", b: "Mars", c: "Jupiter", d: "Mercury"},
        correct: "d",
    },
    {
        id: 5,
        prompt: "How many Sour Patch Kids in a serving?",
        choices: { a: "10", b: "16", c: "12", d: "8"},
        correct: "c",
    },
];

// Normal questions array
const normalQuestions = [
    {
        id: 1,
        prompt: "In which county is England's largest forest?",
        choices: { a: "Derbyshire", b: "Northumberland", c: "Gloucestershire", d: "West Midlands"},
        correct: "b",
    },
    {
        id: 2,
        prompt: "Which tree's leaves are the symbol of the national trust?",
        choices: { a: "Beech", b: "Sycamore", c: "Oak", d: "Maple"},
        correct: "c",
    },
    {
        id: 3,
        prompt: "At which racecourse is the Grand National run?",
        choices: { a: "Aintree", b: "Cheltenham", c: "Epsom Downs", d: "Ascot"},
        correct: "a",
    },
    {
        id: 4,
        prompt: "What French word describes a dish served before the main course of a meal?",
        choices: { a: "Apéritif", b: "Hors d'oeuvre", c: "Potage", d: "Entrée"},
        correct: "d",
    },
    {
        id: 5,
        prompt: "Who created Git?",
        choices: { a: "Bill Gates", b: "Linus Torvalds", c: "Gabe Newell", d: "Tom Anderson"},
        correct: "b",
    },
];

// Hard questions array
const hardQuestions = [
    {
        id: 1,
        prompt: "Which studio provided the sets for The Shining?",
        choices: { a: "Touchstone Pictures", b: "Elstree Studios", c: "Summit Entertainment", d: "Buster Keaton Productions"},
        correct: "b",
    },
    {
        id: 2,
        prompt: 'Who composed the sound track of "Tron: Legacy"',
        choices: { a: "Deadmau5", b: "Julian Casablancas", c: "Gorillaz", d: "Daft Punk"},
        correct: "d",
    },
    {
        id: 3,
        prompt: "How many Americans receive food stamps?",
        choices: { a: "42 Million", b: "13 Million", c: "800 Thousand", d: "25 Million"},
        correct: "a",
    },
    {
        id: 4,
        prompt: "Which nickname is shared by both Liverpool and Nottingham Forest football teams?",
        choices: { a: "Seagulls", b: "Tigers", c: "Spurs", d: "The Reds"},
        correct: "d",
    },
    {
        id: 5,
        prompt: "When was the basic rate of income tax last raised in the UK?",
        choices: { a: 1987, b: 1975, c: 2008, d: 2001},
        correct: "b",
    },
];

// Expert questions array
const expertQuestions = [
    {
        id: 1,
        prompt: "Which tree do we get turpentine from?",
        choices: { a: "Magnolia", b: "Pine", c: "Birch", d: "Willow"},
        correct: "b",
    },
    {
        id: 2,
        prompt: 'What book begins: "It was a bright cold day in April, and the clocks were striking thirteen"?',
        choices: { a: "Animal Farm", b: "Fahrenheit 451", c: "1984", d: "The Handmaid's Tale"},
        correct: "c",
    },
    {
        id: 3,
        prompt: "Which garden tree with yellow flowers has poisonous seeds?",
        choices: { a: "Bay laurel", b: "Baobab", c: "Walnut", d: "Laburnum"},
        correct: "d",
    },
    {
        id: 4,
        prompt: "What casino card game is also known as 21?",
        choices: { a: "Blackjack", b: "Canasta", c: "Rummy", d: "Scopa"},
        correct: "a",
    },
    {
        id: 5,
        prompt: "What animal are Rock hyraxes most closely related to?",
        choices: { a: "Elephants", b: "Meerkats", c: "Wallabies", d: "Chinchillas"},
        correct: "a",
    },
];

// Tracks state the user is in
const state = {
    page: "welcome",    // Which page to display to the user
    difficulty: "",     // Which difficulty user selected
    index: 0,           // Current question number
    answers: [],        // Answer history array
    score: 0,           // Tracks number of correct answers
    selected: null,     // Current selected answer
    timeoutId: null,    // Tracks when question times out
};

const site = document.getElementById("site");   // Retrives <Main> from index.html

// Displays HTML for the welcome page
function welcomeView() {
    return `
        <!-- Welcome page HTML -->
        <section class="grid grid-cols-12 grid-rows-8 gap-6 mb-12 lg:p-12 p-4
                        text-white">

            <!-- Welcome title -->
            <div class="lg:col-start-2 col-span-12 row-span-1 lg:col-span-6 text-left p-4">
                <p class="text-2xl lg:text-4xl font-semibold font-mono text-gray-800 text-shadow-sm/2">Welcome to<br>Quiz O'Clock</p>
            </div>

            <!-- About section -->
            <div class="grid grid-cols-12 gap-6 pb-10 lg:col-start-2 lg:col-span-4 col-span-12 lg:row-span-6 lg:-mt-2 -mt-12 row-span-3 bg-yellow-200 rounded-3xl p-8">
                <div class="rounded-2xl bg-white text-black text-sm lg:text-lg font-[Arial] col-span-12 p-4">
                    <p class="font-semibold text-xl lg:text-2xl">About Quiz O'Clock</p>
                    <p class="p-2 font-[Arial]">Check the time... it's Quiz O'Clock!<br><br>This is a game of taking no risks. These questions will truly test whether you are a genius, or a total idiot.
                    <br><br>There are different levels of difficulty depending on how confident you are. If you aren't feeling up to the task yet, begin with easy mode, then work your way up to expert.
                    <br><br>Good luck and most importantly, have fun!</p>
                </div>
            </div>

            <div class="grid grid-cols-12 grid-rows-5 gap-6 pb-10 lg:col-start-6 lg:col-span-6 col-span-12 row-span-4 lg:-mt-2 lg:row-span-6 bg-yellow-200 rounded-3xl p-6">

                <!-- Choose difficulty logo -->
                <div class="col-start-5 col-span-4 flex flex-col items-center">
                    <span class="inline-block rounded-full bg-white text-black px-6 py-3 text-3xl font-semibold font-mono">
                    Choose
                    </span>
                    <span class="inline-block rounded-full bg-white text-black px-6 py-3 text-3xl font-semibold font-mono -mt-4">
                    Difficulty
                    </span>
                </div>
                
                <!-- Difficulty buttons -->
                <button name="difficulty" value="easy"
                        class="col-start-2 col-span-10 mt-4 px-6 py-3 rounded-full bg-gray-900 text-lg lg:text-2xl font-semibold font-mono hover:bg-blue-900 hover:shadow-lg hover:scale-[1.03] transition">
                    Easy Mode
                </button>

                <button name="difficulty" value="normal"
                        class="col-start-2 col-span-10 mt-4 px-6 py-3 rounded-full bg-gray-900 text-lg lg:text-2xl font-semibold font-mono hover:bg-blue-900 hover:shadow-lg hover:scale-[1.03] transition">
                    Normal Mode
                </button>

                <button name="difficulty" value="hard"
                        class="col-start-2 col-span-10 mt-4 px-6 py-3 rounded-full bg-gray-900 text-lg lg:text-2xl font-semibold font-mono hover:bg-blue-900 hover:shadow-lg hover:scale-[1.03] transition">
                    Hard Mode
                </button>

                <button name="difficulty" value="expert"
                        class="col-start-2 col-span-10 mt-4 px-6 py-3 rounded-full bg-gray-900 text-lg lg:text-2xl font-semibold font-mono hover:bg-blue-900 hover:shadow-lg hover:scale-[1.03] transition">
                    Expert Mode
                </button>

            </div>
        </section>
    `;
}

function quizView() {
    const q = state.difficulty[state.index];    // Current question to display
    const { a, b, c, d } = q.choices;
    const sel = state.selected;                 // Current selected question

    // Colour gradients for each answer button
    const styleA = "bg-linear-30 from-orange-400 to-yellow-400";
    const styleB = "bg-linear-35 from-lime-500 to-teal-500";
    const styleC = "bg-linear-35 from-cyan-400 to-indigo-400";
    const styleD = "bg-linear-65 from-red-400 to-orange-400";

    // Adds green ring around selected buttons
    // Shows selected button
    const choiceBtn = (key, label, gradient) => {
        const isSelected = sel === key;
        
        // Green ring
        const ring = isSelected ? "ring-4 ring-green-400 scale-[1.02]" : "";

        // Shows if button is pressed
        const aria = isSelected ? 'aria-pressed="true"' : 'aria-pressed="false"';

        return `
        <!-- Answer button HTML -->
        <button ${aria}
                name="choice" value="${key}"
                class="w-full text-sm lg:text-lg rounded-full
                        ${gradient} ${ring}
                        px-8 py-6 transition
                        hover:shadow-xl hover:scale-[1.03] focus:outline-none">
            ${label}
        </button>
        `;
    };

    const continueDisabled = sel == null;   // If no answer is selected, continue button is disabled
    const continueBtn = `
        <!-- Continue button HTML -->
        <button name="action" value="continue" ${continueDisabled ? "disabled" : ""}
                class="w-full text-md lg:text-xl rounded-full
                    bg-gradient-to-br from-rose-500 to-fuchsia-600
                    px-8 py-5 transition
                    ${continueDisabled ? "opacity-50 cursor-not-allowed" : "hover:shadow-xl hover:scale-[1.02]"}">
        Continue →
        </button>
    `;

        // If a choice is selected the animation bar is paused
        const barAnimClass = sel
            ? "[animation-play-state:paused]"
            : "animate-[drainSlide_10s_linear_forwards]";

    return `
        <!-- Question page HTML -->
        <section class="grid grid-cols-12 gap-6 lg:p-12 p-4
                        text-white">

            <!-- Animated bar showing remaining time to answer current question -->
            <div class="lg:col-start-4 lg:col-span-6 mb-6 col-start-2 col-span-10">
                <div class="relative h-4 rounded-full bg-white overflow-hidden">
                <div class="absolute inset-0 bg-orange-500 rounded-full ${barAnimClass}"></div>
                </div>
            </div>

            <!-- Question prompt inside purple widget -->
            <div class="lg:col-start-4 lg:col-span-6 col-start-2 col-span-10 text-center
                        bg-gradient-to-bl from-violet-500/50 to-fuchsia-500/50
                        p-6 mb-6 rounded-full">
                <p class="text-xl lg:text-3xl p-2">${q.prompt}</p>
            </div>

            <!-- Answer choice buttons each with custom gradient colours -->
            <div class="lg:col-start-3 lg:col-span-4 col-start-2 col-span-10">${choiceBtn("a", a, styleA)}</div>
            <div class="lg:col-span-4 col-start-2 col-span-10">${choiceBtn("b", b, styleB)}</div>
            <div class="lg:col-start-3 lg:col-span-4 col-start-2 col-span-10">${choiceBtn("c", c, styleC)}</div>
            <div class="lg:col-span-4 col-start-2 col-span-10">${choiceBtn("d", d, styleD)}</div>

            <div class="lg:col-start-5 lg:col-span-4 col-start-2 col-span-10 px-8 py-5">${continueBtn}</div>
        </section>
    `;
}

function resultsView() {
    const total = state.difficulty.length;  // The maximum number of possible points on the quiz
    finalScore = state.score;               // Users number of correct answers on the quiz

    // Maps correct and incorrect answers to correct coloured widget and displays correct answers
    const answerHistory = state.answers.map((a, i) => {
        const userText = a.choice ? a.choices[a.choice] : "No answer";  // Users chosen answer or none
        const correctText = a.choices[a.correctChoice];                 // Correct answer
        const ok = a.correct;

        return `
            <!-- Answer widget HTML, green if correct, red if incorrect -->
            <li class="p-6 mt-4 mb-4 rounded-full ${ok ? 'bg-green-200' : 'bg-red-200'}">
                <p class="font-medium text-sm lg:text-md">Q${i + 1}. ${a.prompt}</p>
                <p class="text-xs lg:text-sm mt-2">
                    Your answer: <span class="font-semibold">${userText}</span>
                    ${ok ? 'Correct!' : `Wrong! (Correct: ${correctText})`}
                </p>
            </li>
        `;
    }).join("");

    return `
        <!-- Results page HTML showing users final score and answer history -->
        <section class="grid grid-cols-12 gap-6 mb-12 lg:p-12 p-4
                        text-black">
            <div class="grid grid-cols-12 gap-6 pb-10 mt-6 lg:col-start-2 lg:col-span-10 col-span-12 bg-yellow-200 rounded-3xl p-6">

                <!-- Results title logo -->
                <div class="col-start-1 col-span-7 lg:col-span-3 flex flex-col">
                    <span class="rounded-full bg-white px-6 py-3 text-lg lg:text-3xl font-semibold font-mono text-center">
                    Results
                    </span>
                </div>

                <div class="col-start-1 col-span-12 bg-white rounded-4xl">

                    <!-- Users final score out of total score -->
                    <div class="col-start-1 col-span-3 flex flex-col">
                        <span class="rounded-full pt-4 pl-4 lg:pl-12 text-lg lg:text-3xl font-semibold font-mono text-left">
                            <h2>Your score was: ${finalScore}/${total}</h2>
                        </span>
                    </div>

                    <!-- Displays users answer history with a vertical list of widgets -->
                    <div class="pb-6 pt-2 lg:pl-12 lg:pr-12 pl-4 pr-4">
                        <ol>${answerHistory}</ol>
                    </div>
                </div>  
            </div>       
        </section>
    `
}

// Updates state to selected answer
function selectChoice(letter) {
    state.selected = letter;
    render();
}

// Saves selected answer before calling nextQuestion()
function continueAfterSelection() {
  const q = state.difficulty[state.index];
  const letter = state.selected;
  if (!letter) return;

  clearTimer();

  const isCorrect = letter === q.correct;
  state.answers[state.index] = {
    id: q.id,
    prompt: q.prompt,
    choice: letter,
    correct: isCorrect,
    correctChoice: q.correct,
    choices: q.choices,
    timedOut: false,
  };
  if (isCorrect) state.score += 1;

  nextQuestion();
}

// Continues to the nextQuestion or results page
function nextQuestion() {
    state.selected = null;

    // If a next question exists, render the next question
    // If not, render the results page
    if (state.index < state.difficulty.length - 1) {
        state.index ++;
        render();
        scheduleTimer();
    } else {
        clearTimer()
        state.page="results";
        render();
    }
}

// Renders the correct page depending on the state
function render() {
    // Renders the welcome page
    if (state.page === "welcome") {
        site.innerHTML = welcomeView();
        return;
    }
    
    // Renders the questions page
    if (state.page === "quiz") {
        site.innerHTML = quizView(false);
        return;
    }

    // Renders the results page
    if (state.page === "results") {
        site.innerHTML = resultsView();
        return;
    }
}

// Begins quiz with chosen difficulty
function startQuiz(chosenDifficulty) {
    state.page = "quiz";            // Update state.page to quiz
    state.index = 0;                // Start with the first question
    state.answers = [];             // Empty answer history
    state.score = 0;                // Starting score of 0
    state.selected = null;          // No answers selected

    // Questions for the selected difficulty are retrieved
    if (chosenDifficulty === "easy") {
        state.difficulty = easyQuestions;
    } else if (chosenDifficulty === "normal") {
        state.difficulty = normalQuestions;
    } else if (chosenDifficulty === "hard") {
        state.difficulty = hardQuestions;
    } else if (chosenDifficulty === "expert") {
        state.difficulty = expertQuestions;
    }

    render();           // Render the questions page
    scheduleTimer();    // Begin 10 second timer
}

// Wires buttons to functions
site.addEventListener("click", (e) => {
    const btn = e.target.closest("button");
    if (!btn) return;   // If a button was not pressed, return

    // Starts quiz with the selected difficulty
    if (btn.name === "difficulty") startQuiz(btn.value);

    // Continues to next question when the continue button is pressed
    if (btn.name === "action" && btn.value === "continue") continueAfterSelection();

    // Stores the current selected answer clicked by the user
    if (btn.name === "choice") selectChoice(btn.value);
});

// Resets the 10 second timer
function clearTimer() {
    if (state.timeoutId) {
        clearTimeout(state.timeoutId);
        state.timeoutId = null;
    }
}

// Sets the 10 second timer
function scheduleTimer() {
  clearTimer();
  const questionIndex = state.index;

  state.timeoutId = setTimeout(() => {
    if (state.page !== "quiz" || state.index !== questionIndex) return;

    const q = state.difficulty[state.index];
    const letter = state.selected;
    const isCorrect = letter === q.correct;

    state.answers[state.index] = {
      id: q.id,
      prompt: q.prompt,
      choice: letter,
      correct: !!letter && isCorrect,
      correctChoice: q.correct,
      choices: q.choices,
      timedOut: true,
    };

    if (letter && isCorrect) state.score += 1;

    nextQuestion();
  }, 10_000);
}

render();