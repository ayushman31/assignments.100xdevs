class TODO{
    constructor(list){
        this.list = [];
    }

    add(activity){
        return this.list.push(activity);
       
    }

    remove(indexOfActivity){
         return this.list.splice(indexOfActivity,indexOfActivity); 
    }

    update(index, updateActivity){
        this.list[index] = updateActivity;
        return this.list;
    }

    getAll(){
        return this.list;
    }

    get(indexOfActivity){
        return this.list[indexOfActivity];
    }

    clear(){
        this.list.length = 0;
    }
}

let todo = new TODO();
todo.add("sleeping");
todo.add("walking");
todo.add("talking");
todo.remove(1);
console.log(todo.getAll());
todo.update(1,"watching")
console.log(todo.getAll());
todo.add("walking");
todo.add("listening");
console.log(todo.getAll());
console.log(todo.get(2));
todo.clear();
console.log(todo.getAll());