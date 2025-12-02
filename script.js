const questions = [
    { q: "HTML stands for?", options: ["Hyper Text Markup Language", "Home Tool Markup"], answer: 0 },
    { q: "CSS is used for?", options: ["Styling", "Database"], answer: 0 },
    { q: "JS is?", options: ["Programming Language", "Food"], answer: 0 }
];

let index = 0, score = 0;

function loadQuestion() {
    let q = questions[index];
    document.getElementById("question").textContent = q.q;

    let optionsHTML = "";
    q.options.forEach((op, i) => {
        optionsHTML += `<button onclick="check(${i})">${op}</button><br>`;
    });
    document.getElementById("options").innerHTML = optionsHTML;
}
loadQuestion();

function check(i) {
    if (i === questions[index].answer) score++;
}

function nextQuestion() {
    index++;
    if (index < questions.length) loadQuestion();
    else {
        document.getElementById("score").textContent = `Score: ${score}/${questions.length}`;
        document.getElementById("options").innerHTML = "";
        document.getElementById("question").textContent = "Quiz Over!";
    }
}