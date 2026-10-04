import {call, put, select, takeEvery} from 'redux-saga/effects'
import {
    fetchPortfolioPositionList,
    fetchBondLifePortfolioPositionList,
    fetchShareLifePortfolioPositionList,
    fetchThreeEtfLifePortfolioPositionList,
    fetchSevenEtfLifePortfolioPositionList,
    fetchPortfolioBacktest
} from '../actions/portfolioActions'
import {
    SAGA_PORTFOLIO_POSITION_LIST,
    SAGA_BOND_LIFE_PORTFOLIO_POSITION_LIST,
    SAGA_SHARE_LIFE_PORTFOLIO_POSITION_LIST,
    SAGA_THREE_ETF_LIFE_PORTFOLIO_POSITION_LIST,
    SAGA_SEVEN_ETF_LIFE_PORTFOLIO_POSITION_LIST,
    SAGA_PORTFOLIO_BACKTEST,
    SAGA_EDIT_PORTFOLIO_POSITION
} from '../types/portfolioTypes'
import {
    getPortfolioPositionListFromApi,
    getBondLifePortfolioPositionListFromApi,
    getShareLifePortfolioPositionListFromApi,
    getThreeEtfLifePortfolioPositionListFromApi,
    getSevenEtfLifePortfolioPositionListFromApi,
    getPortfolioBacktestFromApi,
    editPortfolioPositionFromApi
} from '../api/portfolioApi'

const currentPortfolioPosition = (state) => state.portfolio.currentPortfolioPosition
const currentPortfolioName = (state) => state.portfolio.portfolioName
const currentOrderField = (state) => state.order.orderField

export function* sagaWatcherPortfolio() {
    yield takeEvery(SAGA_PORTFOLIO_POSITION_LIST, sagaWorkerPortfolioPositionList)
    yield takeEvery(SAGA_BOND_LIFE_PORTFOLIO_POSITION_LIST, sagaWorkerBondLifePortfolioPositionList)
    yield takeEvery(SAGA_SHARE_LIFE_PORTFOLIO_POSITION_LIST, sagaWorkerShareLifePortfolioPositionList)
    yield takeEvery(SAGA_THREE_ETF_LIFE_PORTFOLIO_POSITION_LIST, sagaWorkerThreeEtfLifePortfolioPositionList)
    yield takeEvery(SAGA_SEVEN_ETF_LIFE_PORTFOLIO_POSITION_LIST, sagaWorkerSevenEtfLifePortfolioPositionList)
    yield takeEvery(SAGA_PORTFOLIO_BACKTEST, sagaWorkerPortfolioBacktest)
    yield takeEvery(SAGA_EDIT_PORTFOLIO_POSITION, sagaWorkerEditPortfolioPosition)
}

function* sagaWorkerPortfolioPositionList() {
    let orderField = yield select(currentOrderField)
    let result = yield call(getPortfolioPositionListFromApi, orderField)    
    yield put(fetchPortfolioPositionList(result))
}

function* sagaWorkerBondLifePortfolioPositionList() {
    let orderField = yield select(currentOrderField)
    let result = yield call(getBondLifePortfolioPositionListFromApi, orderField)    
    yield put(fetchBondLifePortfolioPositionList(result))
}

function* sagaWorkerShareLifePortfolioPositionList() {
    let orderField = yield select(currentOrderField)
    let result = yield call(getShareLifePortfolioPositionListFromApi, orderField)    
    yield put(fetchShareLifePortfolioPositionList(result))
}

function* sagaWorkerThreeEtfLifePortfolioPositionList() {
    let orderField = yield select(currentOrderField)
    let result = yield call(getThreeEtfLifePortfolioPositionListFromApi, orderField)    
    yield put(fetchThreeEtfLifePortfolioPositionList(result))
}

function* sagaWorkerSevenEtfLifePortfolioPositionList() {
    let orderField = yield select(currentOrderField)
    let result = yield call(getSevenEtfLifePortfolioPositionListFromApi, orderField)    
    yield put(fetchSevenEtfLifePortfolioPositionList(result))
}

function* sagaWorkerPortfolioBacktest() {
    let portfolioName = yield select(currentPortfolioName)
    let result = yield call(getPortfolioBacktestFromApi, portfolioName)    
    yield put(fetchPortfolioBacktest(result))
}

function* sagaWorkerEditPortfolioPosition() {
    let portfolioPosition = yield select(currentPortfolioPosition)
    yield call(editPortfolioPositionFromApi, portfolioPosition.ticker, portfolioPosition.manualCoefficient, portfolioPosition.lifeSize)  
    let result = yield call(getPortfolioPositionListFromApi)    
    yield put(fetchPortfolioPositionList(result))  
}
