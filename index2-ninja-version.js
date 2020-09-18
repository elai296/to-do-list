const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');


const generateTemplate = todo => { //create separate function so it's more readable

    const html = `
        <li class="list-group-item d-flex justify-content-between align-items-center">
            <span>${todo}</span>
            <i class="fa fa-trash alt delete"></i>
        </li>
    `;
    list.innerHTML += html;
};

addForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const todo = addForm.add.value.trim(); //trim to get rid of the white space
    console.log(todo);
    if(todo.length){ //make sure the user put something in
        generateTemplate(todo); //call on the function
        addForm.reset(); //it also reset the form
    }
});