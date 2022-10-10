

class Employee{
 
    #datas;
    
    constructor(){
       this.#datas=[];
    }
    
    get datas(){
        return this.#datas;
    }

    getEmployee(){
     fetch("https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-employees")
     .then(res =>  {
        console.log("Success");
     })
     .catch(res =>[
        console.log("error")
     ])
         
    }


    getEmployeesdata(){
    return fetch("https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-employees")
              .then(res => res.json())
              .then(res => {
                this.#datas=res;
              })
              .catch(err => {})
    }


    
    

}


    const emps=new Employee;
     

    emps.getEmployee();
    
    emps.getEmployeesdata().then(() => {
        renderTodoList(emps.datas.data);
     
    } );


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
    main.append(div);
  

}