class GradeTable {
  constructor(tableElement){
    this.tableElement;
  }
  updateGrades(grades){
    var tableBody = document.querySelector(".tableBody");
    $(".tableBody tbody").empty();

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
}
