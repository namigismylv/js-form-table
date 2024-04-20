const form = document.getElementById("form");
const nameInp = document.getElementById("name");
const surnameInp = document.getElementById("surname");
const ageInp = document.getElementById("age");
const nationalitySelectBox = document.getElementById("nationality");
const positionSelectBox = document.getElementById("position");
const experienceInp = document.getElementById("experience");
const tbody = document.getElementById("body");
const table=document.getElementById("table1")
const users = [];
let id=0

form.addEventListener("submit", (e) => {
    e.preventDefault();

        let newUser = {
            id:id,
            name: nameInp.value,
            surname: surnameInp.value,
            age: ageInp.value,
            nationality: nationalitySelectBox.value,
            position: positionSelectBox.value,
            experience: experienceInp.value,
        };
    id++
    users.push(newUser);
    renderTableRow(users);
    form.reset()
    


});


const renderTableRow = (user) => {
    tbody.innerHTML = ""

    for (let i = 0; i < user.length; i++) {
        tbody.innerHTML += `
            <tr>
            <th scope="row">${i+1}</th>
            <td>${user[i].name}</td>
            <td>${user[i].surname}</td>
            <td>${user[i].age}</td>
            <td>${user[i].nationality}</td>
            <td>${user[i].position}</td>
            <td>${user[i].experience}</td>
            <td>
            <button onclick="editHandler(${users[i].id})" class="btn btn-warning btn-sm">Edit</button>
            </td>
            <td>
            <button onclick="deleteHandler(${users[i].id})" class="btn btn-danger btn-sm">Delete</button>
            </td>
            </tr>
        `;

    }



};

const deleteHandler = (id) => {
    let confirm_delete=confirm("Are you sure you want to delete it??")
    if(confirm_delete){

        let target = users.find(x => x.id == id)
        let indexOfTarget = users.indexOf(target)
        users.splice(indexOfTarget, 1)
        renderTableRow(users)

    }
}

const editHandler = (id)=>{
    let target=users.find(x=>x.id==id)
    let newUserName = prompt("New name")
    let newUserSurname=prompt("New surname")
    target.name=newUserName
    target.surname=newUserSurname
    renderTableRow(users)
    console.log(users);
}