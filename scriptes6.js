class Reg {
    constructor(name, email, addhar, type) {
        this.name = name;
        this.email = email;
        this.addhar = addhar;
        this.type = type;
    }
}

class Display {
    add(prem) {  //add()-method
        let tableBody;
        tableBody = document.getElementById('tableBody')
        let uilist = `<tr>
        
    <td>${prem.name}</td>
    <td>${prem.email}</td>
    <td>${prem.addhar}</td>
    <td>${prem.type}</td>
    </tr>
    `
        tableBody.innerHTML += uilist;
    }

    clear() {
        let regForm = document.getElementById('registerForm');
        regForm.reset();
    }
    validate(prem) {
        if (prem.name.length < 2 || prem.email.length < 5 || prem.addhar.length < 12) {
            return false;

        }
        else {
            return true;
        }
    }
    show(type, displaymessage) {
        let message = document.getElementById('showmessage');
        message.innerHTML = `<div class="alert alert-${type}" role="alert"> ${displaymessage} </div>`
            setTimeout(function(){
        message.innerHTML=``;

    },3000);
    }
    

}

//main function

let regForm = document.getElementById('registerForm');
regForm.addEventListener('submit', regFormSumbit)

function regFormSumbit(e) {
    console.log("Form is getting sumbitted");
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let addhar = document.getElementById('addhar').value;
    let male = document.getElementById('male');
    let female = document.getElementById('female');

    let gender = male.checked ? male.value : female.checked ? female.value : ''; //

    e.preventDefault()
    let data = new Reg(name, email, addhar, gender);
    console.log(data);
    let display = new Display();//

    if (display.validate(data)) {
        display.add(data);
        display.clear();
        display.show("success", "Registration is Success")

    }
    else {
        display.show("danger", "Registration is Failed Please Fill out the Form properly...")
        display.clear();
    }
}

//search functionality

let searchForm=document.querySelector('form[role="search"]');
searchForm.addEventListener('submit',function(e){
    e.preventDefault();
    let searchInput=searchForm.querySelector('input[type="search"]').value.toLowerCase();
    let tableRows=document.querySelectorAll("#tableBody tr");

    tableRows.forEach(row=>{
        let rowText=row.innerText.toLowerCase();
        if(rowText.includes(searchInput)){
            row.style.display='';
        }else{
            row.style.display='none'
        }
    })
})