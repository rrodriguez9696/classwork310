//var questions = 3;
// var questionsLeft = ' [' + questions + ' questions left]';

const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');

function buildQuiz(){}

function showResults(){}

// display quiz right away
buildQuiz();

// on submit, show results
submitButton.addEventListener('click', showResults);


const myQuestions = [
{                     
    question: "Who is the strongest?",
    answers: {
        a:"Superman",
        b:"Batman",
        c:"Thor"
},      
  correctAnswer:"c"  
},
{
    question: "What is the name of Thor's hammer?"
    answers: {
        a:"Mjölnir",    
        b:"Ragnarok",
        c:"adamantium-vibranium"
    },
    correctAnswer:"a"
}, 
{
    question:"what is Supermans one weackness?",
    answers: {
    a:"Batman",
    b:"Doomsday",
    c:"puppies",
    d:"kryptonite"
},
  correctAnswer:"d"  
}
];


//questions -= 1;
//questionsLeft = ' [' + questions + ' questions left]';
//var verb = prompt('Please type a verb that does not end in -ing ' + questionsLeft);
//questions -= 1;
//questionsLeft = ' [' + questions + ' questions left]';
//var noun = prompt('Please type a noun' + questionsLeft);
//alert('All done. Ready for the message?');
//var sentence = "<h2>There once was a " + adjective;
//sentence += ' programmer who wanted to use JavaScript to ' + verb;
//sentence += ' the ' + noun + '.</h2>';
//document.write(sentence);