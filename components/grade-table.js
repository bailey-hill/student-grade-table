class GradeTable {
  constructor(tableElement){
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
    }
  }
  onDeleteClick(deleteGrade){
    this.deleteGrade = deleteGrade;
  }
  renderGradeRow(data, deleteGrade){
    var data = gades[i].grade;
    for (var i = 0; i < grades.length; i++){
    var gradeRow = document.createElement("tr");
    var gradeEl = document.createElement("td");
    var newTableBody = document.querySelector(".tableBody");
    gradeRow.append(gradeEl);
    newTableBody.appendChild(gradeRow);
    gradeEl.appendChild(data);


    var td4 = document.createElement("td");
    td4.append(grades[i].name);
    tr.append(td4);

    var td5 = document.createElement("td");
    td5.append(grades[i].course);
    tr.append(td5);
    }
    deleteGrade(){



    }
  }
}
