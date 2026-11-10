let day = Number(prompt("Введіть число від 1 до 7"));

let days = [
    "Понеділок",
    "Вівторок",
    "Середа",
    "Четвер",
    "П'ятниця",
    "Субота",
    "Неділя"
];

if (day >= 1 && day <= 7) {
    document.write(days[day - 1]);
} else {
    document.write("Неправильне число!");
}
