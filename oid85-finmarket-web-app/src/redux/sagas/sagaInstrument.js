import {call, put, select, takeEvery} from 'redux-saga/effects'
import {fetchInstrumentList, fetchSectorList} from '../actions/instrumentActions'
import {
    SAGA_INSTRUMENT_LIST,
    SAGA_SECTOR_LIST
} from '../types/instrumentTypes'
import {
    getInstrumentListFromApi,
    getSectorListFromApi
} from '../api/instrumentApi'

const currentInstrument = (state) => state.instrument.currentInstrument

export function* sagaWatcherInstrument() {
    yield takeEvery(SAGA_INSTRUMENT_LIST, sagaWorkerInstrumentList)
    yield takeEvery(SAGA_SECTOR_LIST, sagaWorkerSectorList)
}

function* sagaWorkerInstrumentList() {
    let result = yield call(getInstrumentListFromApi)    
    yield put(fetchInstrumentList(result))
}

function* sagaWorkerSectorList() {
    let result = yield call(getSectorListFromApi)    
    yield put(fetchSectorList(result))
}
