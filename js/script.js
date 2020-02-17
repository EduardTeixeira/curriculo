function calculateAge(day, month, year) {

    var birthday = new Date(year, month - 1, day);

    console.log('birthday....')
    console.log(birthday)
    console.log('day.... ' + birthday.getDate())
    console.log('month.... ' + birthday.getMonth())
    console.log('year.... ' + birthday.getFullYear())

    var now = new Date;

    console.log('now....')
    console.log(now)
    console.log('day.... ' + now.getDate());
    console.log('month.... ' + now.getMonth());
    console.log('year.... ' + now.getFullYear());

    var years = now.getFullYear() - birthday.getFullYear();

    if (birthday.getMonth() <= now.getMonth()) {

        console.log("MES MENOS....")

        if (birthday.getDate() > now.getDate()) {

            console.log("DIA MENOS...")

            years--;

        }

    }

    console.log("years...")
    console.log(years)

    var spanYears = document.getElementById("years");

    spanYears.innerHTML = years;
}