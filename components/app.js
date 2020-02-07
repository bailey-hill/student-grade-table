class App {
  constructor(gradeTable, pageHeader, gradeForm) {
    this.handleGetGradesError = this.handleGetGradesError.bind(this);
    this.handleGetGradesSuccess = this.handleGetGradesSuccess.bind(this);
    this.createGrade = this.createGrade.bind(this);
    this.handleCreateGradeError = this.handleCreateGradeError.bind(this);
    this.handleCreateGradeSuccess = this.handleCreateGradeSuccess.bind(this);
    this.deleteGrade = this.deleteGrade.bind(this);
    this.handleDeleteGradeError = this.handleDeleteGradeError.bind(this);
    this.handleDeleteGradeSuccess = this.handleDeleteGradeSuccess.bind(this);
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
    var updatedAverage = average.toFixed(2);
    console.log(updatedAverage);
    this.pageHeader.updateAverage(updatedAverage);
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
    this.gradeTable.onDeleteClick(this.deleteGrade);
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
  deleteGrade(id){
    console.log(id);
    $.ajax({
      type: "DELETE",
      url: `http://sgt.lfzprototypes.com/api/grades/${id}`,
      headers: { "X-Access-Token": "zN4n1ZW3" },
      success: this.handleDeleteGradeSuccess,
      error: this.handleDeleteGradeError
    });
  }
  handleDeleteGradeError(err){
    console.error(err);
  }
  handleDeleteGradeSuccess(){
    this.getGrades();
  }
}
