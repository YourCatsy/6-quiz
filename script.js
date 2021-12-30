'use strict';

const questions = [
    {
        question: 'Сколько будет 2+2?',
        type: 'prompt',
        answer: 4
    },
    {
        question: 'Солнце встает на востоке?',
        type: 'confirm',
        answer: true
    },
    {
        question: 'Сколько будет 5 / 0?',
        type: 'prompt',
        answer: 'NaN'
    },
    {
        question: 'Какого цвета небо?',
        type: 'prompt',
        answer: 'Голубое'
    },
    {
        question: 'Главный вопрос жизни, вселенной и всего такого',
        type: 'prompt',
        answer: 42
    }
];

const scores = startQuiz(questions);

alert(scores);

function startQuiz(questions) {
    let points = 0;
    let enteredAnswer;
    for (let i = 0; i < questions.length; i++) {
        let question = questions[i].question;

        if (questions[i].type == 'confirm') {
            enteredAnswer = confirm(question);
        }
        if (questions[i].type == 'prompt') {
            enteredAnswer = prompt(question);
        }

        let correctAnswer = questions[i].answer;

        if (correctAnswer == enteredAnswer) {
            points += 10;
        }
    }
    
    return points;
}