let month = Number(prompt("Введіть число від 1 до 12"));

let monthName;
let season;

switch (month) {
    case 1:
        monthName = "Січень";
        season = "Зима";
        break;
    case 2:
        monthName = "Лютий";
        season = "Зима";
        break;
    case 3:
        monthName = "Березень";
        season = "Весна";
        break;
    case 4:
        monthName = "Квітень";
        season = "Весна";
        break;
    case 5:
        monthName = "Травень";
        season = "Весна";
        break;
    case 6:
        monthName = "Червень";
        season = "Літо";
        break;
    case 7:
        monthName = "Липень";
        season = "Літо";
        break;
    case 8:
        monthName = "Серпень";
        season = "Літо";
        break;
    case 9:
        monthName = "Вересень";
        season = "Осінь";
        break;
    case 10:
        monthName = "Жовтень";
        season = "Осінь";
        break;
    case 11:
        monthName = "Листопад";
        season = "Осінь";
        break;
    case 12:
        monthName = "Грудень";
        season = "Зима";
        break;
    default:
        alert("Неправильне число!");
}

if (monthName) {
    alert(monthName + " – " + season);
}
