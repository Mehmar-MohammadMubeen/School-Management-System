function calculateAverage(grades) {
    if (grades.length === 0) {
      return "No grades available";
    }
  
    let sum = grades.reduce((total, grade) => total + grade, 0);
    let average = sum / grades.length;
  
    return average.toFixed(2);
  }