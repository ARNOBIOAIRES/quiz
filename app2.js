const form = document.querySelector('.quiz-form')

const correctAnwser = ['A', 'A', 'A', 'A',]

form.addEventListener('submit', event => {
    event.preventDefault()

    let score = 0

    const userAnswsers = [
        form.inputQuestion1.value,
        form.inputQuestion2.value,
        form.inputQuestion3.value,
        form.inputQuestion4.value,
    ]

    userAnswsers.forEach((userAnswer, index) => {
        if(userAnswer === correctAnwser[index]) {
            score += 25
        }   
     
    })
        console.log(`acertei ${score}`)

})
