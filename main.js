var dom = document.querySelector("p");
var tableEl = document.querySelector(".table");
var gradeTable = new GradeTable(tableEl, dom);
var headerEl = $("header");
var pageHeader = new PageHeader(headerEl);
var formEl = $("form");
var gradeForm = new GradeForm(formEl);
var app = new App(gradeTable, pageHeader, gradeForm);
app.start();
