class GradeForm {
  constructor(formElement){
    this.handleSubmit.bind(this);
    this.formElement = formElement;
  }
  onSubmit(createGrade){
    this.createGrade = createGrade;
  }
  handleSubmit(event){
    event.preventDefault();
    var formData = new FormData(event.target);
    formData.get("name", "course", "grade");
    this.createGrade("name", "course", "grade");
    event.target.reset();
    console.log("hi");
  }
}
