import { observer } from "./observer";
import { ReplaySubject } from 'rxjs';

const subject = new ReplaySubject(2);

subject.next('Hello');
subject.next('World');
subject.next('Goodbye');
subject.subscribe(observer);
