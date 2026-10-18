import {call, put, select, takeEvery} from 'redux-saga/effects'
import {
    fetchFollowTrendMonitor,
    fetchFollowTrendTerminal,
    fetchFollowTrendBacktestResult
} from '../actions/followTrendActions'
import {
    SAGA_FOLLOW_TREND_MONITOR,
    SAGA_FOLLOW_TREND_TERMINAL,
    SAGA_FOLLOW_TREND_BACKTEST_RESULT,
    SAGA_EDIT_FOLLOW_TREND_PORTFOLIO_TOTAL_SUM
} from '../types/followTrendTypes'
import {
    getFollowTrendMonitorFromApi,
    getFollowTrendTerminalFromApi,
    getFollowTrendBacktestResultFromApi,
    editFollowTrendPortfolioTotalSumFromApi
} from '../api/followTrendApi'

export function* sagaWatcherFollowTrend() {
    yield takeEvery(SAGA_FOLLOW_TREND_MONITOR, sagaWorkerFollowTrendMonitor)
    yield takeEvery(SAGA_FOLLOW_TREND_TERMINAL, sagaWorkerFollowTrendTerminal)
    yield takeEvery(SAGA_FOLLOW_TREND_BACKTEST_RESULT, sagaWorkerFollowTrendBacktestResult)
    yield takeEvery(SAGA_EDIT_FOLLOW_TREND_PORTFOLIO_TOTAL_SUM, sagaWorkerEditFollowTrendPortfolioTotalSum)
}

const followTrendPortfolioTotalSum = (state) => state.followTrend.followTrendPortfolioTotalSum
const followTrendVersion = (state) => state.followTrend.followTrendVersion

function* sagaWorkerFollowTrendMonitor() {
    let version = yield select(followTrendVersion)
    let result = yield call(getFollowTrendMonitorFromApi, version)
    yield put(fetchFollowTrendMonitor(result))
}

function* sagaWorkerFollowTrendTerminal() {
    let version = yield select(followTrendVersion)
    let result = yield call(getFollowTrendTerminalFromApi, version)
    yield put(fetchFollowTrendTerminal(result))
}

function* sagaWorkerFollowTrendBacktestResult() {    
    let result = yield call(getFollowTrendBacktestResultFromApi)
    yield put(fetchFollowTrendBacktestResult(result))
}

function* sagaWorkerEditFollowTrendPortfolioTotalSum() {
    let totalSum = yield select(followTrendPortfolioTotalSum)
    let version = yield select(followTrendVersion)
    yield call(editFollowTrendPortfolioTotalSumFromApi, totalSum)
    let result = yield call(getFollowTrendMonitorFromApi, version)
    yield put(fetchFollowTrendMonitor(result)) 
}