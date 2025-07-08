const quizData = [
  { question: "What is the output of: print(type([]))?", options: ["<class 'list'>", "<class 'tuple'>", "<class 'dict'>", "<class 'set'>"], answer: "<class 'list'>" },
  { question: "Which keyword is used to define a function in Python?", options: ["function", "def", "define", "fun"], answer: "def" },
  { question: "Which of the following is immutable in Python?", options: ["List", "Dictionary", "Set", "Tuple"], answer: "Tuple" },
  { question: "What does PEP stand for?", options: ["Python Enterprise Project", "Python Enhancement Proposal", "Program Execution Process", "Python Example Program"], answer: "Python Enhancement Proposal" },
  { question: "What is the correct file extension for Python files?", options: [".py", ".pt", ".pyt", ".python"], answer: ".py" },
  { question: "Which built-in function returns the length of a list?", options: ["count()", "size()", "len()", "length()"], answer: "len()" },
  { question: "What is the result of: 3 * '7'?", options: ["21", "777", "'777'", "Error"], answer: "777" },
  { question: "Which of these is a Python tuple?", options: ["[1, 2, 3]", "{1, 2, 3}", "(1, 2, 3)", "None of these"], answer: "(1, 2, 3)" },
  { question: "What is used to handle exceptions in Python?", options: ["try/except", "catch/except", "try/catch", "do/catch"], answer: "try/except" },
  { question: "Which keyword is used to create a class?", options: ["define", "struct", "class", "object"], answer: "class" },
  { question: "How do you start a comment in Python?", options: ["//", "#", "--", "/*"], answer: "#" },
  { question: "Which function converts a string to an integer?", options: ["str()", "int()", "float()", "chr()"], answer: "int()" },
  { question: "What is the output of: print(bool(0))?", options: ["True", "False", "0", "None"], answer: "False" },
  { question: "What is the output of: 10 // 3?", options: ["3.33", "3", "3.0", "4"], answer: "3" },
  { question: "Which of these is a Python dictionary?", options: ["(1,2)", "[1,2]", "{1: 'a', 2: 'b'}", "{1,2}"], answer: "{1: 'a', 2: 'b'}" },
  { question: "What does the 'break' keyword do?", options: ["Skips current iteration", "Stops loop", "Continues loop", "Exits program"], answer: "Stops loop" },
  { question: "Which operator is used for exponentiation?", options: ["^", "**", "exp()", "^^"], answer: "**" },
  { question: "Which function returns user input?", options: ["read()", "get()", "input()", "enter()"], answer: "input()" },
  { question: "What does 'None' mean in Python?", options: ["0", "Empty string", "No value", "False"], answer: "No value" },
  { question: "Which of these is a valid variable name?", options: ["2value", "value$", "_value", "value-name"], answer: "_value" }
];

let current = 0;
let score = 0;

function loadQuestion() {
  const q = quizData[current];
  document.getElementById("question").textContent = `Q${current + 1}. ${q.question}`;
  const optionsList = document.getElementById("options");
  optionsList.innerHTML = "";

  q.options.forEach(option => {
    const li = document.createElement("li");
    li.innerHTML = `<label><input type="radio" name="option" value="${option}"> ${option}</label>`;
    optionsList.appendChild(li);
  });
}

function nextQuestion() {
  const selected = document.querySelector('input[name="option"]:checked');
  if (!selected) {
    alert("Please select an answer.");
    return;
  }

  if (selected.value === quizData[current].answer) {
    score++;
  }

  current++;
  if (current < quizData.length) {
    loadQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  const quizBox = document.getElementById("quiz-box");
  const resultBox = document.getElementById("result");
  quizBox.style.display = "none";
  resultBox.style.display = "block";

  let feedback = "";
  if (score === 20) {
    feedback = "🎉 Perfect score! You're a Python Pro!";
  } else if (score >= 16) {
    feedback = "👏 Great job! You're well-prepared.";
  } else if (score >= 10) {
    feedback = "👍 Good effort! Keep practicing.";
  } else {
    feedback = "📚 Don't worry! Review the basics and try again.";
  }

  resultBox.innerHTML = `
    <h2>Your Score: ${score} / ${quizData.length}</h2>
    <p>${feedback}</p>
    <button onclick="retakeQuiz()">Retake Quiz</button>
  `;
}

function retakeQuiz() {
  current = 0;
  score = 0;
  document.getElementById("quiz-box").style.display = "block";
  document.getElementById("result").style.display = "none";
  loadQuestion();
}

window.onload = loadQuestion;
