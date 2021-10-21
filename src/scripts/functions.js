import { fromEvent, throwError, timer, range, of, Observable } from "rxjs"
import { takeUntil, finalize, zip, mergeMap, retryWhen, mergeMapTo, catchError } from "rxjs/operators";


export function customRetry({
    excludedStatusCodes = [],
    retryAttempts = 3,
    scalingDuration = 1000 } = {}
) {
    return function(source) {
        return source.pipe(
            retryWhen(attempt => {
                return attempt.pipe(
                    mergeMap((error, i) => {
                        const attemptNumber = i + 1;
                        if (
                            attemptNumber > retryAttempts ||
                            excludedStatusCodes.find(e => e === error.status)
                        ) {
                            console.log('Giving up!');
                            return throwError(error);
                        }
                        console.log(
                            `Attempt ${attemptNumber}: retrying in ${attemptNumber * scalingDuration}ms`
                        );
                        return timer(attemptNumber * scalingDuration);
                    })
                )}
            )
        )
    }
}

const click$ = fromEvent(document, 'click');

click$.pipe(
    mergeMapTo(throwError({
        status: 400,
        message: 'Server error'
    }).pipe(
        customRetry({
            retryAttempts: 4
        }),
        catchError(err => of (err.message))
    ))
).subscribe(console.log);