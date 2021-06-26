function lifeInWeeks(age) {
    
    var remainingYears = expectedYear - age;
    var months = remainingYears * 12;
    var weeks = remainingYears * 52;
    var days = remainingYears * 365;
    var fap = prompt("How many times do you fap a day? ")
    
    alert("if you are " + age + " years old " + "You have " + days + " days, " + weeks + " weeks, and " + months + " months left to live.");
    alert("If you mastrubate" + " " + fap + "x " + "a day you will fap" + " " + (days * fap ) + " Times ");
}
var age = prompt("What is your age?")
var expectedYear = prompt("How many years do you want to live?")
lifeInWeeks(age);

