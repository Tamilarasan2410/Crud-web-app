var selectedRow= null;
function onFormSubmit(){
var formData= readFormData();
    if(selectedRow==null)
        insertNewRecord(formData); 
    else
        updateRecord(formData);
    resetForm();
}
function readFormData(){
    var formData={};
    formData["fullname"]=document.getElementById(fullname).value;
    formData["employeecode"]=document.getElementById(employeecode).value;
    formData["salary"]=document.getElementById(salary).value;
    formData["City"]=document.getElementById(City).value;
    return formData();
}
function insertNewRecord(data){
    var table= document.getElementById("Employelist").getElementsByTagName(`tbody`)[0];
    var newRow=table.insertRow(table.length);
    cell1=newRow.insertCell(0);
    cell1.innerHTML=data.fullname;
    cell2=newRow.insertCell(1);
    cell2.innerHTML=data.employeecode;
    cell3=newRow.insertCell(2);
    cell3.innerHTML=data.salary;
    cell4=newRow.insertCell(3);
    cell4.innerHTML=data.City;
    cell5=newRow.insertCell(4);
    cell5.innerHTML= `<a onclick="onEdit(this)">Edit</a>`
    cell6=newRow.insertCell(4);
    cell6.innerHTML= `<a onclick="onDelete(this)">Delete</a>`
}
function resetForm(){
    document.getElementById('fullname').value="";
    document.getElementById('employeecode').value="";
    document.getElementById('salary').value="";
    document.getElementById('City').value="";
    selectedRow=null;
}
function onEdit(td){
    selectedRow=td.parentElement.parentElement;
    document.getElementById("fullname").value= selectedRow.cells[0].innerHTML;
    document.getElementById("employeecode").value= selectedRow.cells[1].innerHTML;
    document.getElementById("salary").value= selectedRow.cells[2].innerHTML;
    document.getElementById("City").value= selectedRow.cells[3].innerHTML;
}
function updateRecord(formData){
    selectedRow.cells[0].innerHTML=formData.fullname;
    selectedRow.cells[1].innerHTML=formData.employeecode;
    selectedRow.cells[2].innerHTML=formData.salary;
    selectedRow.cells[3].innerHTML=formData.City;
}
function onDelete(td){
    if(confirm('Are you sure want to delete this record?')){
        row=td.parentElement.parentElement;
        document.getElementById("Employelist").deleteRow(row.rowIndex);
    }
}