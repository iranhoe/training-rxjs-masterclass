import { asyncScheduler, asapScheduler, of, range } from 'rxjs';
import { observeOn, tap } from 'rxjs/operators';
import { observer } from './observer';

// asyncScheduler.schedule(() => {
//     console.log('5 asyncScheduler');
// });
// asapScheduler.schedule(() => {
//     console.log('2 asapScheduler');
// });
// queueMicrotask(() => console.log(
//     '3 from microtask'
// ));
// Promise.resolve('4 from promise').then(console.log);

const counter = document.getElementById('counter');

range(1,100000, asyncScheduler).subscribe(val => {
    counter.innerHTML = val
});
console.log('1  synchronous console.log');
