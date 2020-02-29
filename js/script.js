function calculateAge(day, month, year) {

    var birthday = new Date(year, month - 1, day);

    var now = new Date;

    var years = now.getFullYear() - birthday.getFullYear();

    if (now.getMonth() < birthday.getMonth()) {

        years--;

    } else if (now.getMonth() == birthday.getMonth()) {

        if (now.getDate() < birthday.getDate()) {

            years--;

        }

    }

    document.getElementById("years").innerHTML = years;
}

function callIndex() {
    window.location = 'https://eduardteixeira.github.io/curriculo/html/index.html'
}