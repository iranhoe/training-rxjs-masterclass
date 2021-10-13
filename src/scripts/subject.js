import { Subject, interval } from "rxjs";
import { tap } from "rxjs/operators";

const observer = {
    next: val => console.log('next', val),
    error: val => console.log('error', val),
    complete: () => console.log('complete', val)
};

const subject = new Subject();

const subscriptionTwo = subject.subscribe(observer);

const interval$ = interval(2000).pipe(
    tap(value => console.log('new interval', value))
)

// interval$.subscribe(subject);
