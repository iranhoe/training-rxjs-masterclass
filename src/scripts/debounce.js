import { fromEvent, EMPTY } from "rxjs";
import { ajax } from 'rxjs/ajax';
import { debounceTime, 
    pluck, 
    distinctUntilChanged, 
    switchMap,
    catchError,
} from "rxjs/operators";

export const breweryTypeahead = (ajaxHelper = ajax) => sourceObservable => {
    return sourceObservable.pipe(
        debounceTime(200),
        pluck('target', 'value'),
        distinctUntilChanged(),
        switchMap(searchTerm =>
            ajaxHelper.getJSON(
                `${BASE_URL}?by_name=${searchTerm}`
            ).pipe(catchError(() => EMPTY))
        )
    )
}

const BASE_URL = 'https://api.openbrewerydb.org/breweries';