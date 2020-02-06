var tableEl = document.querySelector(".table");
var gradeTable = new GradeTable(tableEl);

var headerEl = $("header");
var pageHeader = new PageHeader(headerEl);

var app = new App(gradeTable);

app.start();
