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

const hardQuestions = [
    {
        id: 1,
        prompt: "Hard When did the Vietnam War end?",
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
    {
        id: 6,
        prompt: "What is the closest planet to the sun?",
        choices: { a: "Venus", b: "Mars", c: "Jupiter", d: "Mercury"},
        correct: "d",
    },
    {
        id: 7,
        prompt: "How many Sour Patch Kids in a serving?",
        choices: { a: "10", b: "16", c: "12", d: "8"},
        correct: "c",
    },
];

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

const state = {
    page: "welcome",
    difficulty: "",
    index: 0,
    answers: [],
    score: 0,
    selected: null,
    timeoutId: null,
};

const site = document.getElementById("site");

function welcomeView() {
    return `
        <section class="grid grid-cols-12 grid-rows-8 gap-6 mb-12 p-12
                        text-white">
            <div class="lg:col-start-2 col-span-12 row-span-1 lg:col-span-6 text-left p-2">
                <p class="text-4xl font-semibold font-mono text-gray-800 text-shadow-sm/2">Welcome to<br>Quiz O'Clock</p>
            </div>

            <div class="grid grid-cols-12 gap-6 pb-10 lg:col-start-2 lg:col-span-4 col-span-12 lg:row-span-6 row-span-3 bg-yellow-200 rounded-3xl p-8">

                <div class="rounded-2xl bg-white text-black text-lg font-[Arial] col-span-12 p-4">
                    <p class="font-semibold text-2xl">About Quiz O'Clock</p>
                    <p class="p-2 font-[Arial]">Hello there. This is Quiz O'Clock. The game of taking no risks. These questions will truly test whether you are a genius, or an utter moron.
                    <br><br>There are different levels of difficulty depending on how confident you are. If you aren't feeling up to the task yet, begin with easy mode and work your way up to expert.</p>
                </div>
            </div>

            <div class="grid grid-cols-12 grid-rows-5 gap-6 pb-10 lg:col-start-6 lg:col-span-6 col-span-12 row-span-6 bg-yellow-200 rounded-3xl p-6">
                <!-- Centered two-line overlapping pills -->
                <div class="col-start-5 col-span-4 flex flex-col items-center">
                    <!-- Top pill: slightly narrower, sits above -->
                    <span class="inline-block rounded-full bg-white text-black px-6 py-3 text-3xl font-semibold font-mono">
                    Choose
                    </span>
                    <span class="inline-block rounded-full bg-white text-black px-6 py-3 text-3xl font-semibold font-mono -mt-4">
                    Difficulty
                    </span>
                </div>

                <button name="difficulty" value="easy"
                        class="col-start-2 col-span-10 mt-4 px-6 py-3 rounded-full bg-gray-900 text-2xl font-semibold font-mono hover:bg-blue-900 hover:shadow-lg hover:scale-[1.03] transition">
                    Easy Mode
                </button>
                <button name="difficulty" value="normal"
                        class="col-start-2 col-span-10 mt-4 px-6 py-3 rounded-full bg-gray-900 text-2xl font-semibold font-mono hover:bg-blue-900 hover:shadow-lg hover:scale-[1.03] transition">
                    Normal Mode
                </button>
                <button name="difficulty" value="hard"
                        class="col-start-2 col-span-10 mt-4 px-6 py-3 rounded-full bg-gray-900 text-2xl font-semibold font-mono hover:bg-blue-900 hover:shadow-lg hover:scale-[1.03] transition">
                    Hard Mode
                </button>
                <button name="difficulty" value="expert"
                        class="col-start-2 col-span-10 mt-4 px-6 py-3 rounded-full bg-gray-900 text-2xl font-semibold font-mono hover:bg-blue-900 hover:shadow-lg hover:scale-[1.03] transition">
                    Expert Mode
                </button>
            </div>
        </section>
    `;
}

function quizView() {
    const q = state.difficulty[state.index];
    const { a, b, c, d } = q.choices;
    const sel = state.selected;

    const styleA = "bg-linear-30 from-orange-400 to-yellow-400";
    const styleB = "bg-linear-35 from-lime-500 to-teal-500";
    const styleC = "bg-linear-35 from-cyan-400 to-indigo-400";
    const styleD = "bg-linear-65 from-red-400 to-orange-400";

    const choiceBtn = (key, label, gradient) => {
        const isSelected = sel === key;

        const ring = isSelected ? "ring-4 ring-green-400 scale-[1.02]" : "";

        const aria = isSelected ? 'aria-pressed="true"' : 'aria-pressed="false"';

        return `
        <button ${aria}
                name="choice" value="${key}"
                class="w-full text-lg rounded-full
                        ${gradient} ${ring}
                        px-8 py-6 transition
                        hover:shadow-xl hover:scale-[1.03] focus:outline-none">
            ${label}
        </button>
        `;
    };

    const continueDisabled = sel == null;
    const continueBtn = `
        <button name="action" value="continue" ${continueDisabled ? "disabled" : ""}
                class="w-full text-xl rounded-full
                    bg-gradient-to-br from-rose-500 to-fuchsia-600
                    px-8 py-5 transition
                    ${continueDisabled ? "opacity-50 cursor-not-allowed" : "hover:shadow-xl hover:scale-[1.02]"}">
        Continue →
        </button>
    `;

    return `
        <section class="grid grid-cols-12 gap-6 p-12
                        text-white">
        <div class="col-start-4 col-span-6 text-center
                    bg-gradient-to-bl from-violet-500/50 to-fuchsia-500/50
                    p-6 rounded-full">
            <p class="text-3xl p-2">${q.prompt}</p>
        </div>

        <!-- No bg on wrappers; the button carries its own gradient and fills width -->
        <div class="col-start-3 col-span-4">${choiceBtn("a", a, styleA)}</div>
        <div class="col-span-4">${choiceBtn("b", b, styleB)}</div>
        <div class="col-start-3 col-span-4">${choiceBtn("c", c, styleC)}</div>
        <div class="col-span-4">${choiceBtn("d", d, styleD)}</div>

        <div class="col-start-5 col-span-4">${continueBtn}</div>
        </section>
    `;
}

function resultsView() {
    const total = state.difficulty.length;
    finalScore = state.score;

    const answerHistory = state.answers.map((a, i) => {
        const userText = a.choice ? a.choices[a.choice] : "No answer";
        const correctText = a.choices[a.correctChoice];
        const ok = a.correct;

        return `
            <li class="p-6 mt-4 mb-4 rounded-full ${ok ? 'bg-green-200' : 'bg-red-200'}">
                <p class="font-medium">Q${i + 1}. ${a.prompt}</p>
                <p class="text-sm mt-2">
                    Your answer: <span class="font-semibold">${userText}</span>
                    ${ok ? 'Correct!' : `Wrong! (Correct: ${correctText})`}
                </p>
            </li>
        `;
    }).join("");

    return `
        <section class="grid grid-cols-12 gap-6 mb-12 p-12
                        text-black">
            <div class="grid grid-cols-12 gap-6 pb-10 mt-6 lg:col-start-2 lg:col-span-10 col-span-12 bg-yellow-200 rounded-3xl p-6">
                <div class="col-start-1 col-span-6 lg:col-span-3 flex flex-col">
                    <span class="rounded-full bg-white px-6 py-3 text-3xl font-semibold font-mono text-center">
                    Results
                    </span>
                </div>
                <div class="col-start-1 col-span-12 bg-white rounded-4xl">
                    <div class="col-start-1 col-span-3 flex flex-col">
                        <span class="rounded-full pt-4 pl-12 text-3xl font-semibold font-mono text-left">
                            <h2>Your score was: ${finalScore}/${total}</h2>
                        </span>
                    </div>
                    <div class="pb-6 pt-2 lg:pl-12 lg:pr-12 pl-4 pr-4">
                        <ol>${answerHistory}</ol>
                    </div>
                </div>
                
            </div>
            
            
        </section>
    `
}

function selectChoice(letter) {
    state.selected = letter;
    render();
}

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
    };
    if (isCorrect) state.score ++;

    nextQuestion();
}

function nextQuestion() {
    state.selected = null;

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

function render() {
    if (state.page === "welcome") {
        site.innerHTML = welcomeView();
        return;
    }
    
    if (state.page === "quiz") {
        site.innerHTML = quizView(false);
        return;
    }

    if (state.page === "results") {
        site.innerHTML = resultsView();
        return;
    }
}

function startQuiz(chosenDifficulty) {
    state.page = "quiz";
    console.log(chosenDifficulty)
    state.index = 0;
    state.answers = [];
    state.score = 0;
    state.selected = null;

    if (chosenDifficulty === "easy") {
        state.difficulty = easyQuestions;
    } else if (chosenDifficulty === "normal") {
        state.difficulty = normalQuestions;
    } else if (chosenDifficulty === "hard") {
        state.difficulty = hardQuestions;
    } else if (chosenDifficulty === "expert") {
        state.difficulty = expertQuestions;
    }

    render();
    scheduleTimer();
}

site.addEventListener("click", (e) => {
    const btn = e.target.closest("button");
    if (!btn) return;

    if (btn.name === "difficulty") startQuiz(btn.value);
    if (btn.name === "action" && btn.value === "continue") continueAfterSelection();
    if (btn.name === "choice") selectChoice(btn.value);
});

function clearTimer() {
    if (state.timeoutId) {
        clearTimeout(state.timeoutId);
        state.timeoutId = null;
    }
}

function scheduleTimer() {
  clearTimer();
  const questionIndex = state.index;
  state.timeoutId = setTimeout(() => {

    if (state.page !== "quiz" || state.index !== questionIndex || state.selected) return;

    const q = state.difficulty[state.index];

    state.answers[state.index] = {
      id: q.id,
      prompt: q.prompt,
      choice: null,
      correct: false,
      correctChoice: q.correct,
      choices: q.choices,
      timedOut: true,
    };

    nextQuestion();
  }, 10_000);
}

render();