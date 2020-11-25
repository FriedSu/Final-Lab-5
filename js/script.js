const courseList = [
    {code: "ACIT 1620", name: "Web Fundamental Technologies", num: "1620"},
    {code: "MATH 1310", name: "Technical Math for IT", num: "1310"},
    {code: "ACIT 1515", name: "Scripting for IT", num: "1515"},
    ]

var userInput = prompt("Enter a 4-digit number");

while (userInput.length !== 4){
    userInput = prompt("Enter a 4 digit number");
    while (userInput == ''){
        userInput = prompt("Enter a 4-digit number");
    }
}

var courseLength = courseList.length;
    
booleanChecker = true

for (var i = 0; i < courseList.length; i++) {
    courseNum = courseList[i].num;
    console.log(courseNum)
    booleanChecker = false

    if (userInput == courseNum) {
        console.log('Yes I am taking the course: ' + courseList[i].code + ' ' + courseList[i].name);
        booleanChecker = false;
        break;
    } else {
        booleanChecker = true;
    }
}

if (booleanChecker === true) {
    courseList.push ({
        code: userInput,
        name: null,
        num: parseInt(userInput),
    })
    // console.log(courseList)
    console.log('Course added successfully');
}