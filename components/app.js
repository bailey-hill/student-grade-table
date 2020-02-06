class App {
  constructor(gradeTable) {
    this.handleGetGradesError.bind(this);
    this.handleGetGradesSuccess.bind(this);
    this.gradeTable;
  }
  handleGetGradesError(err){
    console.error(err);
  }
  handleGetGradesSuccess(grades){
    this.gradeTable.updateGrades(grades);
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
    this.getGrades();
  }
}
