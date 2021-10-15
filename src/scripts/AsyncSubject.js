import { AsyncSubject } from 'rxjs';

const observer = {
    next: val => console.log('next', val),
    error: err => console.log('error', err),
    complete: () => console.log('complete')
};

const subject = new AsyncSubject();

subject.subscribe(observer);
subject.subscribe(observer);

subject.next('Hello');
subject.next('World');
subject.next('Goodbye');

subject.complete();