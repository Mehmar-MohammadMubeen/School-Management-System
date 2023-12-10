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
      function renderTeacherCard(teacher, parentElement) {
        let card = document.createElement("div");
        card.classList.add("col-md-4", "mb-4");
    
        card.innerHTML = `
        <div class="card text-center mb-3" style="width: 100%; height: 100%;">
        <div class="card-header d-flex justify-content-between align-items-center">
            <h5 class="card-title text-decoration-left">${teacher.name}</h5>
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
            <h6 class="card-subtitle mb-2 text-body-secondary">${teacher.expertise}</h6>
            <p class="card-text">${teacher.description}</p>
          </div>
          <div class="card-footer">
            <a href="./students.html" class="card-link" style="text-decoration: none; color: blue; margin-right: 5px;">Students</a>
            <a href="./Class.html" class="card-link" style="text-decoration: none; color: blue;">Classes</a>
          </div>
          </div>
          
        `;
      }
});