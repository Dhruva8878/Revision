

class Employee{
 
    #datas;
    
    constructor(){
       this.#datas=[];
    }
    
    get datas(){
        return this.#datas;
    }

    getEmployee(){
     fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-employees?page=${page}&orderBy=asc`)
     .then(res =>  {
        console.log("Success");
     })
     .catch(res =>[
        console.log("error")
     ])
         
    }


    getEmployeesdata(page){
        
    return fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-employees?page=${page}&orderBy=asc`)
              .then(res => res.json())
              .then(res => {
                this.#datas=res;
              })
              .catch(err => {})
    }


    
    

}


    const emps=new Employee;
     

    emps.getEmployee();
    
    emps.getEmployeesdata(1).then(() => {
        renderTodoList(emps.datas.data);
     
    } );

   
  document.getElementById("btn1").addEventListener("click", ()=>{

    document.getElementById("ptag").innerText="Page 1"

    emps.getEmployeesdata(1).then(() => {
        renderTodoList(emps.datas.data);
     
    } );

  }) 

  document.getElementById("btn2").addEventListener("click", ()=>{

    document.getElementById("ptag").innerText="Page 2"

    emps.getEmployeesdata(2).then(() => {
        renderTodoList(emps.datas.data);
     
    } );

  })

  document.getElementById("btn3").addEventListener("click", ()=>{

    document.getElementById("ptag").innerText="Page 3"
    emps.getEmployeesdata(3).then(() => {
        renderTodoList(emps.datas.data);
     
    } );

  })

  document.getElementById("btn4").addEventListener("click", ()=>{

    document.getElementById("ptag").innerText="Page 4"
    emps.getEmployeesdata(4).then(() => {
        renderTodoList(emps.datas.data);
     
    } );

  })

  document.getElementById("btn5").addEventListener("click", ()=>{

    document.getElementById("ptag").innerText="Page 5"

    emps.getEmployeesdata(5).then(() => {
        renderTodoList(emps.datas.data);
     
    } );

  })

  document.getElementById("btn6").addEventListener("click", ()=>{

    document.getElementById("ptag").innerText="Page 6"
    emps.getEmployeesdata(6).then(() => {
        renderTodoList(emps.datas.data);
     
    } );

  })
  document.getElementById("btn7").addEventListener("click", ()=>{

    document.getElementById("ptag").innerText="Page 7"

    emps.getEmployeesdata(7).then(() => {
        renderTodoList(emps.datas.data);
     
    } );

  })


function renderTodoList(items){

    const target=document.getElementById("empl");

    const itemele= items.map( item  =>createEmployeeCart(item)); 
    
     target.innerHTML=null;

     target.append( ...itemele);

}   

function createEmployeeCart(emp){
    console.log(emp)

    let main=document.getElementById("empl");
    
    const div=document.createElement("div");
    
    const id=document.createElement("p");
    id.innerText=emp.id;
     
    const name=document.createElement("p");
    name.innerText=emp.name;

    const img=document.createElement("img");
    img.src=emp.image;

    const dep=document.createElement("p");
    dep.innerText=emp.department;

    const gen=document.createElement("p");
    gen.innerText=emp.gender;

    const sal=document.createElement("p");
    sal.innerText=emp.salary;


    div.append(id,img,name,dep,gen,sal);

     
    return div;
}