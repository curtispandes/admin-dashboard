// January = 1
// February = 2
// March = 3
// April = 4
// May = 5
// June = 6
// July = 7
// August = 8
// September = 9
// October = 10
// November = 11
// December = 12
var monthNum = 2;
var isLeapYear = false;
// Your job is to print the number of days in monthNum
// Just print it, using console.log
// You only need one if/else structure (maybe with multiple else ifs)
// one more thing, I need you to put typescriptHello into github
// 1.  Create a project in GH
// 2. Use the commands in github to connect
// 3. Push the filest from local to github (3 steps)
if (monthNum === 2) {
    if (isLeapYear) {
        console.log("Number of days in February (Leap Year): 29");
    }
    else {
        console.log("Number of days in February: 28");
    }
}
else if (monthNum === 4 || monthNum === 6 || monthNum === 9 || monthNum === 11) {
    console.log("Number of days in the selected month: 30");
}
else {
    console.log("Number of days in the selected month: 31");
}
