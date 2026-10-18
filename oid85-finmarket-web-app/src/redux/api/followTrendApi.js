import {sendFollowTrendPostRequest} from './api'

export const getFollowTrendMonitorFromApi = async (followTrendVersion) => {
    return sendFollowTrendPostRequest('follow-trend/monitor/version', {followTrendVersion})
}

export const getFollowTrendTerminalFromApi = async (followTrendVersion) => {
    return sendFollowTrendPostRequest('follow-trend/terminal/version', {followTrendVersion})
}

export const getFollowTrendBacktestResultFromApi = async () => {
    return sendFollowTrendPostRequest('follow-trend/backtest/result', {})
}

export const editFollowTrendPortfolioTotalSumFromApi = async (totalSum) => {
    return sendFollowTrendPostRequest('follow-trend/portfolio/total-sum/edit', {totalSum})
}
