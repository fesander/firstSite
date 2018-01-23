
var attempt = 1
var rightAnswersNumber
var faultAnswersNumber

function playRiddles() {
    var numberOfRiddles = 3
    var userAnswers = []
    var rightAnswers = [
        "человек",
        "заноза",
        "часы"
    ]
   
    if (document.getElementById("responceButton").value == 'Ответы') {
        for (var i = 1; i <= 3; i++) {
            document.getElementById('userAnswer' + i).style.color = 'blue'
            document.getElementById('userAnswer' + i).disabled = 'true'
            document.getElementById('userAnswer' + i).value = rightAnswers[i - 1]
        }
        document.getElementById("responceButton").onclick = ''
    } else {
        rightAnswersNumber = 0
        faultAnswersNumber = 0
        for (var i = 1; i <= 3; i++) {
            userAnswers[i - 1] = document.getElementById("userAnswer" + i).value
            if (userAnswers[i - 1].toLocaleLowerCase() == rightAnswers[i - 1]) {
                rightAnswersNumber++
                document.getElementById('userAnswer' + i).style.color = 'green'
            } else {
                faultAnswersNumber++
                document.getElementById('userAnswer' + i).style.color = 'red'
            }
        }
        if (faultAnswersNumber !=0) {
            attempt++
            if (attempt > 3) {
                document.getElementById("responceButton").value = 'Ответы'
                alert("Ты проиграл, так как израсходовал все 3 попытки\nПравильных ответов " + rightAnswersNumber + " из " + numberOfRiddles)
            } else {
                document.getElementById("responceButton").value = 'Попытка №' + attempt
            }
        } else {
            alert("Поздаравляю, ты победил!!! с " + attempt + " попытки")            
            document.getElementById("responceButton").value = 'Молодец'
            for (var i = 1; i <= 3; i++) {
                document.getElementById('userAnswer' + i).disabled = 'true'
                document.getElementById('userAnswer' + i).value = rightAnswers[i - 1]
            }
        }
    }
}