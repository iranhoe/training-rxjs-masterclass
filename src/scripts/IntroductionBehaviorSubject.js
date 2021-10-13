import { BehaviorSubject } from "rxjs";

const observer = {
    next: val => console.log('next', val),
    error: val => console.log('error', val),
    complete: () => console.log('complete', val)
};

const subject = new BehaviorSubject("Hello");

const subscription = subject.subscribe(
    observer
);

subject.next("hello");

const secondSubscription = subject.subscribe(
    observer
);

subject.next("World");

setTimeout(() => {
    console.log(subject.getValue());
}, 3000);