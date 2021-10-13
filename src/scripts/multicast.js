import { multicast, refCount, Subject, interval } from "rxjs";
import { tap } from "rxjs/operators";

const observer = {
    next: val => console.log('next', val),
    error: val => console.log('error', val),
    complete: () => console.log('complete', val)
};

const interval$ = interval(2000).pipe(
    tap(value => console.log('new interval', value))
);

const multicastedInterval$ = interval$.pipe(
    multicast(() => new Subject()),
    refCount()
);

const subOne = multicastedInterval$.subscribe(observer);
const subTwo = multicastedInterval$.subscribe(observer);

setTimeout(() => {
    subOne.unsubscribe();
    subTwo.unsubscribe();
}, 3000)