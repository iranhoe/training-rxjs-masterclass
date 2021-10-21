import { BehaviorSubject, fromEvent, Subject } from 'rxjs';
import { concatMap }  from 'rxjs/operators';

const radioButtons = document.getElementById('');

const saveAnswer = (answer, testId) => {
    return of({
        answer,
        testId
    }).pipe(delay(200));
};

const answerChange$ = fromEvent(radioButtons, 'click');

const store$ = new BehaviorSubject({
    testId: 'abc123',
    complete: false,
    moreData: {}
});

answerChange$.pipe(
    withLatestFrom(store$.pipe(
        pluck('testId')
    )),
    concatMap(([event, testId]) => {
        return saveAnswer(event.target.value, testId)
    })
)
.subscribe(console.log);