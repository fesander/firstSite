function playTheGuessFindTheNumberSingleplayer() {
    var attempt = 0
    var theNumber = parseInt(Math.random() * 100)   //Число от 1 до 100, загаданное компьютером
    var userAnswer                                  //Ответ польдоветеля
    var regExpDeposit = /^([1-5])$/                 //Регулярное выразение, которое матчится только на числа 1,2,3,4,5

    alert("Приветствую на игре, угадай число!")   
   
    do {
        userAnswer = prompt("Какое число от 0 до 100 загадал компьютер?\n Введите 'q', если сдаётесь")
        attempt++;
        if (userAnswer == 'q') {
            alert("В этой игре победил помпьютер\nТы использовал " + attempt + " попыток, но так и не угадал")
            break                               //Выход из цикла for
        }
        if (userAnswer > theNumber)
            alert("Моё чило меньше")
        else if (userAnswer < theNumber) 
            alert("Моё чило больше")
        else if (userAnswer == theNumber) {
            alert ("Поздравляю!!!\nТы победил c " + attempt + " попытки")
            break                              //Выход из цикла for
        }
        else
            alert("Вы ввели что-то не то")
    } while (true)
}