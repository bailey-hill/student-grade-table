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
    formData.get();
    console.log("hi");
  }
}
