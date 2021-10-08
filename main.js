const selectedTab = "life"; 
const tabs = {life: document.getElementById("life-tab"), summary: document.getElementById("summary-tab")};
const contents = {life: document.getElementById("life"), summary: document.getElementById("summary")};
tabs[selectedTab].classList.add("selected");
Object.keys(contents).forEach(key=>{
  if(key !== selectedTab) {
    contents[key].classList.add("none");
  }
})
Object.keys(tabs).forEach(key=>tabs[key].addEventListener("click", e=>{
  document.querySelector("li.selected").className="";
  tabs[key].classList.add("selected");

  document.querySelector(".content:not(.none)").classList.add("none");
  contents[key].classList.remove("none");
}));
const styleEle=document.head.appendChild(document.createElement("style"));
styleEle.innerHTML = `#life:after { height: calc(${document.getElementById("life").getBoundingClientRect().height}px - 50vh)}`;

