function calculateAge(day, month, year) {

    var birthday = new Date(year, month, day);

    console.log("birthday")
    console.log(birthday)

    var date = new Date;

    console.log(date)
    console.log("DIA :::: " + date.getDate())
    console.log("MES :::: " + date.getMonth() + 1)
    console.log("ANO :::: " + date.getFullYear())

    var diffDate = date - birthday;

    diffDate = new Date(diffDate)

    console.log('diff')
    console.log(diffDate)
}