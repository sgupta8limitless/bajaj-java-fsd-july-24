let firstname:string = "Saurabh"
let num:number = 23
let state:boolean = true
let idontknow:any = 23

let names:string[] = ["Thor","Ironman","Hulk"]

let person:[string,number,string] = ["Saurabh",23,"Mumbai"]

for(let i=0;i<person.length;i++)
{
    console.log(person[i])
}


interface Student{
    name:string,
    age:number,
    city?:string
}


let student1:Student = {
   name:"Saurabh",
   age:23,
  
} 


// function doSomething(name:string,city:string="Mumbai",age?:number):void
// {
//     console.log(name,city,age)
//     // return name.length
// }

// doSomething("ishwar","Pune",24)

interface User
{
    displaydetails():void
}


class UserImpl implements User {

      private name:string
      private age:number

      constructor(name:string,age:number){
        this.name=name 
        this.age=age
      }
      
      public displaydetails():void 
      {
            console.log(this.name,this.age)
      }

}


let user:User = new UserImpl("Laveen",27);

// user.name = "Saurabh"
// user.age = 23

user.displaydetails()




class Animal 
{

    public name:string 

    constructor(name:string)
    {
        this.name = name
    }
}

class Lion extends Animal
{
    constructor(name:string)
    {
        super(name);
    }

    printName():void 
    {
        console.log(this.name);
    }
}


let lion = new Lion("Shera");
lion.printName()


