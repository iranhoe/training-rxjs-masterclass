import { BehaviorSubject } from "rxjs";
import { observer } from "./observer";

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