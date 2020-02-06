class PageHeader{
  constructor(headerElement){
    this.headerElement = headerElement;
  }
  updateAverage(newAverage){
    var badgeEl = $(".badge");
    badgeEl.append(newAverage);
    console.log(newAverage);
  }
}
