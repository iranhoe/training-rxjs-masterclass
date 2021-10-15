import { observer } from './observer';
import { fromEvent, mergeMapTo } from 'rxjs';
import { shareReplay } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';

const ajax$ = ajax(
    'https://api.github.com/users/octocat'
);
const click$ = fromEvent(document, 'click');
const clickRequest$ = click$.pipe(
    mergeMapTo(ajax$),
    shareReplay(1, 2000)
);

clickRequest$.subscribe(observer);


setTimeout(() => {
    console.log('subcribing!');
    clickRequest$.subscribe(observer);
}, 5000)