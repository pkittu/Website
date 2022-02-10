


// DOM Elements
const studentForm = document.getElementById("regform");
const studentsContainer = document.querySelector(".students");
const name = regform["studentname"];
const roll = regform["rollno"];
const phone =regform["phone"];
const course = regform["course"];
const summary = regform["summary"];


/*  format of json string
{ 
  name: '',roll: number,phone: number,course:'',summary:''
}
*/

const students = JSON.parse(localStorage.getItem("students")) || [];

const addStudent = (name, roll, phone,course,summary) => {
  students.push({name,roll, phone,course,summary});

//student details storing in localstorage

  localStorage.setItem("students", JSON.stringify(students));

  return { name, roll, phone,course,summary};
};




const createStudentElement = ({ name,roll, phone,course,summary}) => {
  // Creating elements
  const studentDiv = document.createElement("div");
  const studentName = document.createElement("p");
  const studentRoll = document.createElement("p");
  const studentPhone = document.createElement("p");
  const studentCour = document.createElement("p");
  const studentSumm = document.createElement("p");
  

  // Filling the content
  studentName.innerText ="" + name;
  studentRoll.innerText = "" + roll;
  studentPhone.innerText = "" + phone;
  studentCour.innerText ="" + course;
  studentSumm.innerText ="" + summary;

  // Adding to the DOM
  studentDiv.append(studentName, studentRoll,studentPhone,studentCour,studentSumm);
 studentsContainer.appendChild(studentDiv);

 studentsContainer.style.display = students.length === 0 ? "none" : "flex";
};

studentsContainer.style.display = students.length === 0? "none" : "flex";

students.forEach(createStudentElement);

regform.onsubmit = e => {
  e.preventDefault();

  const newStudent = addStudent(
    name.value,roll.value,phone.value,course.value,summary.value
  );

  createStudentElement(newStudent);

  name.value = "";roll.value = "";phone.value = "";course.value="";summary.value=""
};