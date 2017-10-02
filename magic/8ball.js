var answers = [
        'No',
        'Defintely not',
        'As I see it, no',
        'Most likely .. Not',
        'Signs points to no',
        'Ask again later',
        'Better not tell you',
        'My repy is no',
        'My sources say no',
        'concentrate and ask again',
];
document.getElementById('answerButton').onclick = function () {
var answer = answers[Math.floor(Math.random() * answers.length)];
    document.getElementById('answerContainer').innerHTML = answer;
};