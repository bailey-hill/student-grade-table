class GradeForm {
  constructor(formElement){
    this.handleSubmit = this.handleSubmit.bind(this);
    this.formElement = formElement;
    this.formElement.submit(this.handleSubmit);
}
  onSubmit(createGrade){
    this.createGrade = createGrade;
  }
  handleSubmit(event){
    event.preventDefault();
    var formData = new FormData(event.target);
    console.log("hi");
    var name = formData.get("name");
    var course = formData.get("course");
    var grade = formData.get("grade");
    this.createGrade(name, course, grade);
    event.target.reset();
  }
}
