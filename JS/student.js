import { calculateAverage, getNoteFromAverage } from "./studentData.js";
document.addEventListener("DOMContentLoaded", function () {
    let emptyStorage = [];
    let data = JSON.parse(localStorage.getItem("students")) || emptyStorage;
  
    function renderAllStudents(students) {
      let studentContainer = document.getElementById("student-container");
      studentContainer.innerHTML = "";
  
      for (let i = 0; i < students.length; i += 3) {
        let row = document.createElement("div");
        row.classList.add("row", "gx-4", "justify-content-center");
  
        for (let j = 0; j < 3 && i + j < students.length; j++) {
          let student = students[i + j];
          renderStudentCard(student, row);
        }
  
        studentContainer.appendChild(row);
      }
    }
    function renderStudentCard(student, parentElement) {
      let card = document.createElement("div");
      card.classList.add("col-md-4", "mb-4");
  
      let average = calculateAverage(student.grades);
      let note = getNoteFromAverage(average);
      card.innerHTML = `
              <div class="card text-center mb-3" style="width: 100%; height: 100%;">
                  <div class="card-header d-flex justify-content-between align-items-center">
                      <h5 class="card-title text-decoration-left">${
                        student.name
                      }</h5>
                      <div>
                          <button class="btn btn-link edit-button">
                              <i class="far fa-edit aa" style="color: blue"></i>
                          </button>
                          <button class="btn btn-link delete-button">
                              <i class="fas fa-minus-circle aa" style="color: blue"></i>
                          </button>
                      </div>
                  </div>
                  <div class="card-body">
                      <h6 class="card-subtitle mb-2 text-body-secondary">${
                        student.course
                      }</h6>
                      <p class="card-text">${student.details}</p>
                      <p class="card-text">Grades: ${student.grades.join(
                        ", "
                      )}</p>
                      <p class="card-text">Average: ${average}</p>
                      <p class="card-text">Note: ${note}</p>
                  </div>
              </div>
          `;
      parentElement.appendChild(card);
      let editButton = card.querySelector(".edit-button");
      let deleteButton = card.querySelector(".delete-button");
      editButton.addEventListener("click", function () {
        let newName = prompt("Enter the updated name:");
        let newCourse = prompt("Enter the updated course:");
        let newDetails = prompt("Enter the updated details:");
        let newGrades = prompt("Enter the updated grades (comma-separated):");
        let updatedGradesArray = newGrades.split(",").map(Number);
        student.name = newName || student.name;
        student.course = newCourse || student.course;
        student.details = newDetails || student.details;
        student.grades = updatedGradesArray || student.grades;
        localStorage.setItem("students", JSON.stringify(data));
        renderAllStudents(data);
      });
  
      deleteButton.addEventListener("click", function () {
        if (confirm("Are you sure you want to delete this student?")) {
          let index = data.indexOf(student);
          if (index !== -1) {
            data.splice(index, 1);
            localStorage.setItem("students", JSON.stringify(data));
            renderAllStudents(data);
          }
        }
      });
    }
    renderAllStudents(data);
    let addStudentButton = document.getElementById("addStudentButton");
    addStudentButton.addEventListener("click", function () {
      let newName = prompt("Enter the name of the new student:");
      let newCourse = prompt("Enter the course for the new student:");
      let newDetails = prompt("Enter additional details for the new student:");
      let newGrades = prompt(
        "Enter grades for the new student (comma-separated):"
      );
      let newGradesArray = newGrades.split(",").map(Number);
  
      let newStudent = {
        name: newName,
        course: newCourse,
        details: newDetails,
        grades: newGradesArray,
      };
  
      data.push(newStudent);
  
      localStorage.setItem("students", JSON.stringify(data));
      renderAllStudents(data);
    });
  });