class GradeTable {
  constructor(tableElement, noGradesElement){
    this.tableElement;
  }
  updateGrades(grades){
    var tableBody = document.querySelector(".tableBody");
    $(".tableBody").empty();

    for (var i = 0; i < grades.length; i++){
     var tr = document.createElement("tr");
     document.querySelector(".tableBody").appendChild(tr);

      var td = document.createElement("td");
      td.append(grades[i].name);
      tr.append(td);

      var td2 = document.createElement("td");
      td2.append(grades[i].course);
      tr.append(td2);

      var td3 = document.createElement("td");
      td3.append(grades[i].grade);
      tr.append(td3);
    } for (var i = 0; i < grades.length; i++) {
      this.renderGradeRow;
      this.deleteGrade;
      grades[i].grade;
    }
  }
  onDeleteClick(deleteGrade){
    this.deleteGrade = deleteGrade;
  }
  renderGradeRow(data, deleteGrade){
    // var data = gades[i].grade;
    for (var i = 0; i < grades.length; i++){
    var gradeRow = document.createElement("tr");
    var gradeEl = document.createElement("td");
    var newTableBody = document.querySelector(".tableBody");
    var button = document.createElement("button");
    var tdButton = document.createElement("td");

    gradeRow.append(gradeEl);
    newTableBody.appendChild(gradeRow);
    gradeEl.appendChild(data[i].grade);


    var td4 = document.createElement("td");
    td4.append(data[i].name);
    gradeRow.append(td4);

    var td5 = document.createElement("td");
    td5.append(data[i].course);
    gradeRow.append(td5);

    button.classList.add("btn");
    button.classList.add("btn-danger");
    var deleteText = document.createTextNode("DELETE");
    button.appendChild(deleteText);
    gradeRow.append(tdButton);
    tdButton.append(button);

    }
    button.addEventListener("click", this.deleteGrade);

    deleteGrade(data.id);
    return gradeRow;
  }
}
