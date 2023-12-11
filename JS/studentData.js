function calculateAverage(grades) {
    if (grades.length === 0) {
      return "No grades available";
    }
  
    let sum = grades.reduce((total, grade) => total + grade, 0);
    let average = sum / grades.length;
  
    return average.toFixed(2);
  }
  
function getNoteFromAverage(averageGrade) {
    if (averageGrade >= 90) {
      return "Excellent student!";
    } else if (averageGrade >= 80) {
      return "Good student with consistent performance.";
    } else if (averageGrade >= 70) {
      return "Satisfactory performance.";
    } else {
      return "Needs improvement.";
    }
  }