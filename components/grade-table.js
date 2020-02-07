class GradeTable {
  constructor(tableElement, noGradesElement){
    this.tableElement = tableElement;
    this.noGradesElement = noGradesElement;
    this.deleteGrade = null;
  }
  updateGrades(grades){
    var tableBody = document.querySelector(".tableBody");
    $(".tableBody").empty();

    for (var i = 0; i < grades.length; i++){
      var row = this.renderGradeRow(grades[i], this.deleteGrade)
      tableBody.append(row);
    }
    //  var tr = document.createElement("tr");
    //  document.querySelector(".tableBody").appendChild(tr);

    //   var td = document.createElement("td");
    //   td.append(grades[i].name);
    //   tr.append(td);

    //   var td2 = document.createElement("td");
    //   td2.append(grades[i].course);
    //   tr.append(td2);

    //   var td3 = document.createElement("td");
    //   td3.append(grades[i].grade);
    //   tr.append(td3);
    // } for (var i = 0; i < grades.length; i++) {
    //   this.renderGradeRow;
    //   this.deleteGrade;
    //   grades[i].grade;
    // } if (!grades){
    //   var noGrades = document.querySelector(".noGrades");
    //   noGrades.classList.remove("d-none");
    // } else {
    //   var noGrades = document.querySelector(".noGrades");
    //   noGrades.classList.add("d-none")
    // }
  }
  onDeleteClick(deleteGrade){
    this.deleteGrade = deleteGrade;
  }
  renderGradeRow(data, deleteGrade){
    var gradeRow = document.createElement("tr");
    var gradeEl = document.createElement("td");
    var newTableBody = document.querySelector(".tableBody");
    var button = document.createElement("button");
    var tdButton = document.createElement("td");

    var td4 = document.createElement("td");
    td4.append(data.name);
    gradeRow.append(td4);

    var td5 = document.createElement("td");
    td5.append(data.course);
    gradeRow.append(td5);

    gradeRow.append(gradeEl);
    newTableBody.appendChild(gradeRow);
    gradeEl.textContent = data.grade;

    button.classList.add("btn");
    button.classList.add("btn-danger");
    var deleteText = document.createTextNode("DELETE");
    button.appendChild(deleteText);
    tdButton.append(button);
    gradeRow.append(tdButton);
    button.addEventListener("click", function() {
      deleteGrade(data.id)
    });

    return gradeRow;
  }
}
