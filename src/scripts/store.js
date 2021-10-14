
import { BehaviorSubject } from 'rxjs';
import { Subject } from 'rxjs';
import { scan, pluck, distinctUntilKeyChanged } from 'rxjs/operators';

export class ObservableStore {
    constructor(initialState) {
        this._store = new BehaviorSubject(
            initialState
        );
        this._stateUpdates = new Subject();

        // accumlate state
        this._stateUpdates.pipe(
            scan((acc, curr) => {
                return { ...acc, ...curr}
            }, initialState)
        ).subscribe(this._store);
    }

    updateState(stateUpdate) {
        this._stateUpdates.next(stateUpdate);
    }

    selectState(stateKey) {
        return this._store.pipe(
            distinctUntilKeyChanged(stateKey),
            pluck(stateKey)
        );
    }

    stateChanges() {
        return this._store.asObservable();
    }
}