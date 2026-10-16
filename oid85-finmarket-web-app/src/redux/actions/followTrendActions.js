import {
    SAGA_FOLLOW_TREND_MONITOR,
    SAGA_FOLLOW_TREND_TERMINAL,
    SAGA_FOLLOW_TREND_BACKTEST_RESULT,
    SAGA_EDIT_FOLLOW_TREND_PORTFOLIO_TOTAL_SUM,
    FETCH_FOLLOW_TREND_MONITOR,
    FETCH_FOLLOW_TREND_TERMINAL,
    FETCH_FOLLOW_TREND_BACKTEST_RESULT,
    FETCH_FOLLOW_TREND_PORTFOLIO_TOTAL_SUM,
    FETCH_FOLLOW_TREND_VERSION,
    SHOW_EDIT_FOLLOW_TREND_PORTFOLIO_TOTAL_SUM_MODAL,
    HIDE_EDIT_FOLLOW_TREND_PORTFOLIO_TOTAL_SUM_MODAL
} from '../types/followTrendTypes'

export const sagaFollowTrendMonitor = () => {
    return {
        type: SAGA_FOLLOW_TREND_MONITOR
    }
}

export const sagaFollowTrendTerminal = () => {
    return {
        type: SAGA_FOLLOW_TREND_TERMINAL
    }
}

export const sagaFollowTrendBacktestResult = () => {
    return {
        type: SAGA_FOLLOW_TREND_BACKTEST_RESULT
    }
}

export const sagaEditFollowTrendPortfolioTotalSum = () => {
    return {
        type: SAGA_EDIT_FOLLOW_TREND_PORTFOLIO_TOTAL_SUM
    }
}

export const fetchFollowTrendMonitor = (data) => {
    return {
        type: FETCH_FOLLOW_TREND_MONITOR,
        payload: data
    }
}

export const fetchFollowTrendTerminal = (data) => {
    return {
        type: FETCH_FOLLOW_TREND_TERMINAL,
        payload: data
    }
}

export const fetchFollowTrendBacktestResult = (data) => {
    return {
        type: FETCH_FOLLOW_TREND_BACKTEST_RESULT,
        payload: data
    }
}

export const fetchFollowTrendPortfolioTotalSum = (data) => {
    return {
        type: FETCH_FOLLOW_TREND_PORTFOLIO_TOTAL_SUM,
        payload: data
    }
}

export const fetchFollowTrendVersion = (data) => {
    return {
        type: FETCH_FOLLOW_TREND_VERSION,
        payload: data
    }
}

export const showEditFollowTrendPortfolioTotalSumModal = () => {
    return {
        type: SHOW_EDIT_FOLLOW_TREND_PORTFOLIO_TOTAL_SUM_MODAL
    }
}

export const hideEditFollowTrendPortfolioTotalSumModal = () => {
    return {
        type: HIDE_EDIT_FOLLOW_TREND_PORTFOLIO_TOTAL_SUM_MODAL
    }
}
