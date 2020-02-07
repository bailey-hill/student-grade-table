class App {
  constructor(gradeTable, pageHeader, gradeForm) {
    this.handleGetGradesError = this.handleGetGradesError.bind(this);
    this.handleGetGradesSuccess = this.handleGetGradesSuccess.bind(this);
    this.createGrade = this.createGrade.bind(this);
    this.handleCreateGradeError = this.handleCreateGradeError.bind(this);
    this.handleCreateGradeSuccess = this.handleCreateGradeSuccess.bind(this);
    this.gradeTable = gradeTable;
    this.pageHeader = pageHeader;
    this.gradeForm = gradeForm;
  }
  handleGetGradesError(err){
    console.error(err);
  }
  handleGetGradesSuccess(grades){
    this.gradeTable.updateGrades(grades);
    var sum = 0;

    var count = grades.length;
    for (var i = 0; i < count; i++) {
      sum = sum + grades[i].grade;
  }
  console.log(grades);
    var average = sum / count;
  this.pageHeader.updateAverage(average);
  console.log(average);
}
  getGrades(){
    $.get({
      url: "http://sgt.lfzprototypes.com/api/grades",
      headers: { "X-Access-Token": "zN4n1ZW3" },
      success: this.handleGetGradesSuccess,
      error: this.handleGetGradesError,
    })
  }
  start(){
    this.getGrades(this.createGrade);
    this.gradeForm.onSubmit(this.createGrade);
  }
  createGrade(name, course, grade){
    console.log(name, course, grade);
    $.ajax({
      type: "POST",
      url: "http://sgt.lfzprototypes.com/api/grades",
      headers: { "X-Access-Token": "zN4n1ZW3" },
      data: {name, course, grade},
      success: this.handleCreateGradeSuccess,
      error: this.handleCreateGradeError
    });
  }
  handleCreateGradeSuccess() {
        this.getGrades();
      }
  handleCreateGradeError(err) {
    console.error(err);
  }
}
