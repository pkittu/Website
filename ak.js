


// DOM Elements
const studentForm = document.getElementById("regform");
const studentsContainer = document.querySelector(".students");
const name = regform["studentname"];
const roll = regform["rollno"];
const phone =regform["phone"];
//const gender = regform["gender"];
const course = regform["course"];
const summary = regform["summary"];
//const email = regform["email"];


/* 
{
  name: '',
  age: number,
  roll: number
}
*/

const students = JSON.parse(localStorage.getItem("students")) || [];

const addStudent = (name, roll, phone,course,summary) => {
  students.push({name,roll, phone,course,summary});

  localStorage.setItem("students", JSON.stringify(students));

  return { name, roll, phone,course,summary};
};




const createStudentElement = ({ name,roll, phone,course,summary}) => {
  // Create elements
  const studentDiv = document.createElement("div");
  const studentName = document.createElement("p");
  const studentRoll = document.createElement("p");
  const studentPhone = document.createElement("p");
  //const studentGen = document.createElement("p");
  const studentCour = document.createElement("p");
  const studentSumm = document.createElement("p");
  
  //const studentEml = document.createElement("p");

  // Fill the content
  studentName.innerText ="" + name;
  studentRoll.innerText = "" + roll;
  studentPhone.innerText = "" + phone;
  //studentGen.innerText ="" + gender;
  studentCour.innerText ="" + course;
  studentSumm.innerText ="" + summary;
  //studentEml.innerText ="" + email;

  // Add to the DOM
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