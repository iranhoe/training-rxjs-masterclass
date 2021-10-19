import { from, of, throwError, interval } from 'rxjs';
import { map, concatWith, take, delay, catchError, toArray, mergeMap } from 'rxjs/operators'

describe('subscribe & assert testing in RxJS', () => {
    it('should compare each emitted value', () => {
        const source$ = of(1,2,3);
        const final$ =source$.pipe(
            map(val => val * 10),
            toArray()
        );

        const expected = [10, 20, 30];

        final$.subscribe(val => {
            expect(val).toEqual(expected);
        })
    })

    it('should let you test async operations with done callback', done => {
        const source$ = of('Ready', 'Set', 'Go').pipe(
            mergeMap((message, index) => of(message).pipe(
                delay(index * 1000))
            )
        );

        const expected = ['Ready', 'Set', 'Go'];
        let index = 0;

        source$.subscribe(val => {
            expect(val).toEqual(expected[index]);
            index++;
        }, null, done)
    });

    it('should let you test errors and error messages', () => {
        const source$ = of({ first: 'Brian', last: 'Smith' }, null).pipe(
            map(o => `${o.first} ${o.last}`),
            catchError(() => {
                throw 'Invalid response!';
            })
        );

        const expected = ['Brian Smith', "Invalid response!"];
        let actual = [];
        let index = 0;

        source$.subscribe({
            next: value => {
                // expect(value).toEqual(expected[index]);
                actual.push(value);
                index++;
            },
            error: error => {
                actual.push(error);
                expect(actual).toEqual(expected);
            }
        })
    })
});