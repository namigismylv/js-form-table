const form = document.getElementById("form");
const nameInp = document.getElementById("name");
const surnameInp = document.getElementById("surname");
const ageInp = document.getElementById("age");
const nationalitySelectBox = document.getElementById("nationality");
const positionSelectBox = document.getElementById("position");
const experienceInp = document.getElementById("experience");
const table = document.querySelector("#list table tbody");
const list=document.getElementById("list")
const users = [];

form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (nameInp.value.trim() === '' || surnameInp.value.trim() === '' || ageInp.value.trim() === '' || experienceInp.value.trim() === '') {
        alert("Xahiş edirik, bütün sahələri doldurun.");
    } else {
        var newUser = {
            name: nameInp.value,
            surname: surnameInp.value,
            age: ageInp.value,
            nationality: nationalitySelectBox.value,
            position: positionSelectBox.value,
            experience: experienceInp.value,
        };
    }
    users.push(newUser);
    renderTableRow(newUser);
    list.style.display="block";
    

});


const renderTableRow = (user) => {
    const newRow = document.createElement("tr");
    newRow.innerHTML = `
        <th scope="row">${users.length}</th>
        <td>${user.name}</td>
        <td>${user.surname}</td>
        <td>${user.age}</td>
        <td>${user.nationality}</td>
        <td>${user.position}</td>
        <td>${user.experience}</td>
        <td>
            <button class="btn btn-warning btn-sm">Edit</button>
        </td>
        <td>
        <button class="btn btn-danger btn-sm">Delete</button>

        </td>
    `;
    table.appendChild(newRow);
    

};

const deleteHandler  =(id)=>{
    let target=users.find(x=>x.id==id)
    let indexOfTarget=users.indexOf(target)
    users.splice(indexOfTarget,1)
    renderTableRow(users)
}
