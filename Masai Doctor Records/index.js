let myForm = document.querySelector('form');
let Name = document.getElementById('name');
let ID = document.getElementById('docID');
let department = document.getElementById('dept');
let expYear = document.getElementById('exp');
let email = document.getElementById('email');
let mobile = document.getElementById('mbl');
let filter = document.getElementById('filter')
let tbody = document.querySelector('tbody');





let AllData = [];
myForm.addEventListener('submit',function(e){
    e.preventDefault();
    let Data = {};
    Data.input1 = Name.value;
    Data.input2 = ID.value;
    Data.input3 = department.value;

    Data.input4 = expYear.value;
    

    Data.input5 = email.value;
    Data.input6 = mobile.value;
    if(expYear.value >= 5){
        Data.input7 = "Senior";
    }
    else if(expYear.value >= 2 && expYear.value <= 5){
        Data.input7 = "Junior"
    }
    else if(expYear.value <=1){
        Data.input7 = "Fresher";
    }

    console.log(Data);
    AllData.push(Data);

    tbody.innerHTML = null;
    AllData.map((ele) =>{
        let row = document.createElement('tr');
        let td1 = document.createElement('td');
        let td2 = document.createElement('td');
        let td3 = document.createElement('td');
        let td4 = document.createElement('td');
        let td5 = document.createElement('td');
        let td6 = document.createElement('td');
        let td7 = document.createElement('td');
        let td8 = document.createElement('button');
        td1.innerText = ele.input1;
        td2.innerText = ele.input2;
        td3.innerText = ele.input3;
        td4.innerText = ele.input4;
        td5.innerText = ele.input5;
        td6.innerText = ele.input6;
        td7.innerText = ele.input7;
        td8.innerText = "Delete";
        td8.setAttribute('id','btn')
        td8.addEventListener('click',function(){
            row.innerHTML = null;
        })
        row.append(td1,td2,td3,td4,td5,td6,td7,td8);
        tbody.append(row);

    })
})


