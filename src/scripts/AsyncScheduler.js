import { asyncScheduler, of } from 'rxjs';
import { observeOn, tap } from 'rxjs/operators';
import { observer } from './observer';

// work, delay?, state?
// const sub = asyncScheduler.schedule(
//     console.log,
//     2000,
//     "Hello World"
// );
// sub.unsubscribe();
of(4,5,6).pipe(
    tap(val => console.log('from tap', val)),
    observeOn(asyncScheduler, 3000)
).subscribe(observer);

// of(1,2,3).subscribe(observer);
// console.log('sync');
