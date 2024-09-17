"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
const observable = new rxjs_1.Observable((subscribe) => {
    subscribe.next("One");
    subscribe.next("two");
    subscribe.next("three");
    subscribe.complete();
});
observable.subscribe((data) => {
    console.log(data);
});
