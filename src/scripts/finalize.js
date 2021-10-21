import { interval } from "rxjs";
import { take, finalize } from "rxjs/operators";

const counter = document.getElementById('counter');

const sub = interval(1000).pipe(
    take(3),
    finalize(() => {
        counter.innerHTML = 'Stopped!';
    })
).subscribe( val => {
        counter.innerHTML = val;
});

// setTimeout(() => {
//     sub.unsubscribe();
// }, 3000);