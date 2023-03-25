import { ofType } from 'redux-observable'
import { switchMap, map, retry, catchError, of, tap } from 'rxjs'
import { ajax } from 'rxjs/ajax'
import * as actionType from '../actions/actionType'
import * as action from '../actions/actionCreator'

export const loadServicesEpic = action$ => action$.pipe(
  ofType(actionType.LOAD_SERVICES),
  switchMap(o => ajax.getJSON(import.meta.env.VITE_LOAD_SERVICES_URL).pipe(
    retry(3),
    map(o => action.loadServicesSuccess(o)),
    catchError(o => of(action.loadServicesFailed()))
  ))
);

export const loadCurrentServiceEpic = action$ => action$.pipe(
  ofType(actionType.LOAD_CURRENT_SERVICE),
  map(o => o.payload.id),
  tap(o => console.log(o)),
  switchMap(o => ajax.getJSON(`${import.meta.env.VITE_LOAD_SERVICES_URL}/${o}`).pipe(
    retry(3),
    map(o => action.loadCurrentServiceSuccess(o)),
    catchError(o => of(action.loadCurrentServiceFailed()))
  ))
)