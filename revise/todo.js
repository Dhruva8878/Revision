class Todo{

    #items;

    constructor(){
        this.#items=[];
    }

    get items(){
        return this.#items;
    }

    addTodo(value){

        const item={
            title: value,
            status : false
        };

        fetch("https://json-server-mocker-masai.herokuapp.com/tasks",{
           method : "POST",
           headers : {
            "Content-Type" :  "application/json"
           },
           body :JSON.stringify(item)
        })
        .then(res =>{
           console.log("success");
        })
        .catch(res =>{

        })
        // this.#items.push(item);
        // return this.#items.length;


    }

    toggleStatus(id){
    //   this.#items=this.#items.map( (item) => 
    //     item.id === id ? { ...item , status : !item.status} :item 
    //   )
    }


    getTodos(){
        return fetch("https://json-server-mocker-masai.herokuapp.com/tasks")
        .then((res) => res.json())
        .then((res) => {
           this.#items=res;
        })
        .catch((err) => {});
    }
}


 const todo=new Todo();

 todo.getTodos().then(() => {
    console.log(todo.items);

    renderTodoList(todo.items);
 } );
   

 function renderTodoList(items){

    const target=document.getElementById("todo");

    const itemele= items.map( item  =>createTodoCart(item)); 
    
     target.innerHTML=null;

     target.append( ...itemele);
 }

 function createTodoCart(item){
   const div=document.createElement("div");
   const title=document.createElement("p");
   const button=document.createElement("button");

    title.textContent=item.title;
    button.textContent=item.status;

    div.append(title,button);

    return div;


 }

 window.addEventListener("load" , () =>{
   const addbtn=document.getElementById("add-Todo");

   addbtn.addEventListener("click", () =>{

     const input=document.getElementById("todos").value;

     todo.addTodo(input);
   })
 })