import {
    FETCH_FOLLOW_TREND_MONITOR,
    FETCH_FOLLOW_TREND_TERMINAL,
    FETCH_FOLLOW_TREND_BACKTEST_RESULT,
    FETCH_FOLLOW_TREND_PORTFOLIO_TOTAL_SUM,
    FETCH_FOLLOW_TREND_VERSION,
    SHOW_EDIT_FOLLOW_TREND_PORTFOLIO_TOTAL_SUM_MODAL,
    HIDE_EDIT_FOLLOW_TREND_PORTFOLIO_TOTAL_SUM_MODAL
} from '../types/followTrendTypes'

const initialState = {
    followTrendMonitorData: {},
    followTrendTerminalData: {},
    followTrendBacktestResultData: {},
    followTrendPortfolioTotalSum: 0,
    followTrendVersion: 'UltimateSmoother',
    editFollowTrendPortfolioTotalSumModalIsOpened: false
}

export const followTrendReducer = (state = initialState, action) => {
    switch (action.type) {

        case FETCH_FOLLOW_TREND_MONITOR:
            return {...state, followTrendMonitorData: {...action.payload}}
          
        case FETCH_FOLLOW_TREND_TERMINAL:
            return {...state, followTrendTerminalData: {...action.payload}}

        case FETCH_FOLLOW_TREND_BACKTEST_RESULT:
            return {...state, followTrendBacktestResultData: {...action.payload}}            

        case FETCH_FOLLOW_TREND_PORTFOLIO_TOTAL_SUM:
            return {...state, followTrendPortfolioTotalSum: action.payload}

        case FETCH_FOLLOW_TREND_VERSION:
            return {...state, followTrendVersion: action.payload}
            
        case SHOW_EDIT_FOLLOW_TREND_PORTFOLIO_TOTAL_SUM_MODAL:
            return {...state, editFollowTrendPortfolioTotalSumModalIsOpened: true}
        
        case HIDE_EDIT_FOLLOW_TREND_PORTFOLIO_TOTAL_SUM_MODAL:
            return {...state, editFollowTrendPortfolioTotalSumModalIsOpened: false}

        default: return state
    }
}