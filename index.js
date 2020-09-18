let add = document.querySelector(".add");
let addListGroup = document.querySelector(".list-group");
let deleteButton = document.querySelector('.fa fa-trash');


add.addEventListener("submit", (ev) => {
  ev.preventDefault();
  let value = ev.currentTarget.querySelector("input").value;
  if (value.length) {
    let newList = document.createElement('li');
    let newSpan = document.createElement('span');
    let newIcon = document.createElement('i');
    newList.className = "list-group-item d-flex justify-content-between align-items-center";
    newSpan.innerText = value;
    newIcon.className = "fa fa-trash alt delete";
    newList.append(newSpan,newIcon);
  }
});

deleteButton.addEventListener("click", () => {
  console.log(deleteButton);
   deleteButton.parentElement.remove();
})
// add.addEventListener("submit", (ev) => {
//     ev.preventDefault();
//     let value = ev.currentTarget.querySelector("input").value;
//     if (value.length) {
//       let html = `<li class="list-group-item d-flex justify-content-between align-items-center">
//       <span>${value}</span>
//       <i class="fa fa-trash alt delete"></i>
//   </li>`;
//       addListGroup.innerHTML += html;
//     }
//   });
