class PageHeader{
  constructor(headerElement){
    this.headerElement = headerElement;
  }
  updateAverage(newAverage){
    var badgeEl = document.querySelector(".badge");
    badgeEl.textContent = newAverage;
    console.log(newAverage);
  }
}
