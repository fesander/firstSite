function getRadioValue(theRadioGroupName)
{
    var elements = document.getElementsByName(theRadioGroupName);
    for (var i = 0, l = elements.length; i < l; i++)
    {
        if (elements[i].checked)
        {
            return elements[i].value;
        }
    }
}

function playTheGuessFindTheNumberMultyplayer() {
    var theNumber = parseInt(Math.random() * 100)   //Число от 1 до 100, загаданное компьютером
    var numberOfGamers                              //Количество игроков
    var Gamers = []                                 //Массив из имен всех игроков
    var winner                                      //Побелитель игры
    var userAnswer                                  //Ответ польдоветеля
    
    numberOfGamers = getRadioValue("numberOfPlayers")
    alert("Приветствую на игре, угадай число!\nЧисло игроков = " + numberOfGamers)   
    
    //Заполнение массива имен игроков
    for (var i = 0; i < numberOfGamers; i++) {
        Gamers[i] = prompt("Введи имя игрока " + parseInt(i+1))
    }

    do {
        for (var i = 0; i < numberOfGamers; i++) {
            userAnswer = prompt("Играет пользователь \'" + Gamers[i] + "\'\nКакое число от 0 до 100 загадал компьютер?\n Введите 'q', если сдаётесь")
            if (userAnswer == 'q') {
                winner = "nobody"
                break                               //Выход из цикла for
            }
            if (userAnswer > theNumber)
                alert("Моё чило меньше")
            else if (userAnswer < theNumber) 
                alert("Моё чило больше")
            else if (userAnswer == theNumber) {
                winner = Gamers[i]
                break                              //Выход из цикла for
            }
            else
                alert("Вы ввели что-то не то")
        }
    } while (winner == null)
    if (winner == "nobody")
        alert("В этой игре победил помпьютер")
    else
        alert ("Поздравляю!!!\nПобедил " + winner)

}