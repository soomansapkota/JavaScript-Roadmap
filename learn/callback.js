
// LIST
const students = [

    {name:"Suman",subject:"JS"},
    {name:"John",subject:"ML"}
]

// Function call inside the function is callback

function enrollStudent(student, getStudents)
{

    setTimeout(function() {
        students.push(student)
        console.log("Student has been enrolled")
        getStudents();
    },3000)

}

function getStudents(){
    setTimeout(function(){

        let str="";
        students.forEach(function(student){
            str +=`<li> ${student.name}</li>`
        }
        );
         document.getElementById('students').innerHTML = str;
         console.log("Student have been fetched")
    },1000);
}

let newStudent = {name:"Summy",subject:"java"}
enrollStudent(newStudent,getStudents)
// getStudents()

//Callback function is used to hold the another function till one function runs
// Here function enrollSrudent runs first then only getStudents run..
// getStudents has timeout of 3000ms but it also has callback function and it will run first then only
// the enrollStudent will run even the getStudents has 1000ms timeout
// If we donot use callback function then the output won't be shown in getStudents