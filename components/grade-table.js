class GradeTable {
  constructor(tableElement){
    this.tableElement;
  }
  updateGrades(grades){
    var tableBody = document.querySelector(".tableBody");
    $(".tableBody tbody").empty();

    for (var i = 0; 0 < grades.length; i++){
    document.createElement("tr");
    }
  }
}
