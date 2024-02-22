const RECONCILIATION = 'reconciliation';
const OPTIMIZM = 'optimizm';
const PROBLEMS = 'problems';
const SKILLS = 'skills';
const DISCIPLINE = 'discipline';
const CONFIDENCE = 'confidence';


function func() {

    let allQuestionsFields = document.getElementsByClassName('question-field')

    let allRadioElements = document.getElementsByClassName('answer-input')

    let checkedAnswers = []

    let allAnswers = []

    for (index = 0; index < allRadioElements.length; index++) {
        if (allRadioElements[index].checked == true) {
            checkedAnswers.push(allRadioElements[index])
        }
    }

    if (allQuestionsFields.length != checkedAnswers.length) {
        let errorsBlock = document.getElementById('errors-block')

        let errorDiv = document.createElement('div')
        errorDiv.className = 'error'
        errorDiv.textContent = 'Ответьте на все вопросы'
        if (document.querySelector('.error')) {
            errorsBlock.removeChild(document.querySelector('.error'))
        }
        errorsBlock.append(errorDiv)
    }
    else {
        for (questionIndex = 0; questionIndex < allQuestionsFields.length; questionIndex++) {

            let questionField = allQuestionsFields[questionIndex]

            let questionAnswer
            let questionTheme

            let questionTitle = questionField.querySelector('.question-title').innerHTML

            let questionAnswers = questionField.querySelectorAll('.answer-input')
            for (index = 0; index < questionAnswers.length; index++) {
                if (questionAnswers[index].checked == true) {
                    questionAnswer = questionAnswers[index].value
                    questionTheme = questionAnswers[index].name
                }
            }

            let answer = {
                questionTitle,
                questionTheme,
                questionAnswer
            }

            allAnswers.push(answer)

        }

        console.log(allAnswers)
    }
}

