// objects 

let student = {
    name:"Saurabh",
    age:26,
    city:"Mumbai"
}



let students = [
    {
        name:"Ishwar",
        age:12,
        city:"Pune"
    },
    {
        name:"Laveen",
        age:22,
        city:"Mumbai"
    },
    {
        name:"Harshada",
        age:21,
        city:"Indore"
    }
]


students.push({name:"Vinaya",age:26})

console.log(students)

// students.forEach((stud,index,arr)=>{
//     console.log(stud)
// })

// let newStudents = [];

// for(let i= 0 ;i<students.length;i++)
// {
//     if(students[i].age < 20)
//     {
//         newStudents.push(students[i])
//     }
// }


let newStudents = students.filter((stud)=>{
    return stud.age < 20;
})


// let a = 23.6;

// console.log(Math.floor(a))


// console.log(student.name);
// console.log(student)

// student.country = "India";

// let prop = "pincode";

// student[prop] = 1234;

// student.age=67

// console.log(student)


// let student2 = {
//     name:"Nikhil",
//     age:27,
//     country:"India"
// }