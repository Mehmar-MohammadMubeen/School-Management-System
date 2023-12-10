document.addEventListener("DOMContentLoaded", function () {
    let emptyStorage = [];
    let data = JSON.parse(localStorage.getItem("teachers")) || emptyStorage;
    renderAllTeachers(data); 
    let addTeacherButton = document.getElementById("addTeacherButton");
    addTeacherButton.addEventListener("click", function () {
      let newName = prompt("Enter the name of the new teacher:");
      let newExpertise = prompt("Enter the expertise of the new teacher:");
      let newDescription = prompt(
        "Enter additional details for the new teacher:"
      );
      let newTeacher = {
        name: newName,
        expertise: newExpertise,
        description: newDescription,
      }; 
      data.push(newTeacher); 
      localStorage.setItem("teachers", JSON.stringify(data));
      renderAllTeachers(data);
    });
    function renderAllTeachers(teachers) {
        let teacherContainer = document.getElementById("teacher-container");
        teacherContainer.innerHTML = "";
        for (let i = 0; i < teachers.length; i += 3) {
          let row = document.createElement("div");
          row.classList.add("row", "gx-6", "justify-content-center");
          for (let j = i; j < i + 3 && j < teachers.length; j++) {
            let teacher = teachers[j];
            renderTeacherCard(teacher, row);
          }
          teacherContainer.appendChild(row);
        }
      }
});