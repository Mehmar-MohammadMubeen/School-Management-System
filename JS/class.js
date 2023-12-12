document.addEventListener("DOMContentLoaded", function () {
  let emptyStorage = [];
  let data = JSON.parse(localStorage.getItem("classes")) || emptyStorage;
  renderAllClasses(data);
  let addClassButton = document.getElementById("addClassButton");
  addClassButton.addEventListener("click", function () {
    let newName = prompt("Enter the name of the new class:");
    let newSubject = prompt("Enter the subject of the new class:");
    let newDescription = prompt("Enter additional details for the new class:");
    let newClass = {
      name: newName,
      subject: newSubject,
      description: newDescription,
    };
    data.push(newClass);
    localStorage.setItem("classes", JSON.stringify(data));
    renderAllClasses(data);
  });
  function renderAllClasses(classes) {
    let classContainer = document.getElementById("class-container");
    classContainer.innerHTML = "";
    for (let i = 0; i < classes.length; i += 3) {
      let row = document.createElement("div");
      row.classList.add("row", "gx-6", "justify-content-center");
      for (let j = i; j < i + 3 && j < classes.length; j++) {
        let classItem = classes[j];
        renderClassCard(classItem, row);
      }
      classContainer.appendChild(row);
    }
  }
  function renderClassCard(classItem, parentElement) {
    let card = document.createElement("div");
    card.classList.add("col-md-4", "mb-42");

    card.innerHTML = `
      <div class="card text-center mb-3" style="width: 100%; height: 100%;">
      <div class="card-header d-flex justify-content-between align-items-center">
          <h5 class="card-title text-decoration-left">${classItem.name}</h5>
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
          <h6 class="card-subtitle mb-2 text-body-secondary">${classItem.subject}</h6>
          <p class="card-text">${classItem.description}</p>
        </div>
        <div class="card-footer">
          <a href="./students.html" class="card-link" style="text-decoration: none; color: blue; margin-right: 5px;">Students</a>
          <a href="./Class.html" class="card-link" style="text-decoration: none; color: blue;">Classes</a>
        </div>
        </div>
        
      `;
    parentElement.appendChild(card);
    let editButton = card.querySelector(".edit-button");
    let deleteButton = card.querySelector(".delete-button");

    editButton.addEventListener("click", function () {
      let newName = prompt("Enter the updated name:");
      let newSubject = prompt("Enter the updated subject:");
      let newDescription = prompt("Enter the updated description:");
      classItem.name = newName || classItem.name;
      classItem.subject = newSubject || classItem.subject;
      classItem.description = newDescription || classItem.description;
      localStorage.setItem("classes", JSON.stringify(data));
      renderAllClasses(data);
    });

    deleteButton.addEventListener("click", function () {
      if (confirm("Are you sure you want to delete this class?")) {
        let index = data.indexOf(classItem);
        if (index !== -1) {
          data.splice(index, 1);
          localStorage.setItem("classes", JSON.stringify(data));
          renderAllClasses(data);
        }
      }
    });
  }
});
