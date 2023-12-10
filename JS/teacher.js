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
});