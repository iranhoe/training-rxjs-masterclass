import { fromEvent, interval, map, throttleTime, Subject,takeUntil } from "rxjs";

const onDestroy$ = new Subject();

fromEvent(document, 'click').pipe(
    map(event => ({
        x: event.clientX,
        y: event.clientY
    })),
    takeUntil(onDestroy$)
).subscribe(v => {
    console.log(v);
});

fromEvent(document, 'scroll').pipe(
    throttleTime(30),
    takeUntil(onDestroy$)
).subscribe(v => {
    console.log(v);
});

interval(1000).pipe(
    takeUntil(onDestroy$)
).subscribe(v => {
    console.log(v);
});

setTimeout(() => {
    onDestroy$.next();
    onDestroy$.complete();
}, 2000);
