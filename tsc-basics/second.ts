import { Observable } from "rxjs";

const observable = new Observable((subscribe)=>{

    // api calling 
    // let arr = json 

    subscribe.next("onw")
    subscribe.next("two")
    subscribe.next("three")
    subscribe.complete()
})


observable.subscribe((data)=>{
    console.log(data)
})