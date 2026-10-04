import {sendAnalyticPostRequest} from './api'

export const getPortfolioPositionListFromApi = async (orderField) => {
    return sendAnalyticPostRequest('portfolio/position/list', {orderField})
}

export const getBondLifePortfolioPositionListFromApi = async (orderField) => {
    return sendAnalyticPostRequest('bond-life-portfolio/position/list', {orderField})
}

export const getShareLifePortfolioPositionListFromApi = async (orderField) => {
    return sendAnalyticPostRequest('share-life-portfolio/position/list', {orderField})
}

export const getThreeEtfLifePortfolioPositionListFromApi = async (orderField) => {
    return sendAnalyticPostRequest('three-etf-life-portfolio/position/list', {orderField})
}

export const getSevenEtfLifePortfolioPositionListFromApi = async (orderField) => {
    return sendAnalyticPostRequest('seven-etf-life-portfolio/position/list', {orderField})
}

export const getPortfolioBacktestFromApi = async (portfolioName) => {
    return sendAnalyticPostRequest('portfolio/backtest', {portfolioName})
}

export const editPortfolioPositionFromApi = async (ticker, manualCoefficient, lifeSize) => {
    return sendAnalyticPostRequest('portfolio/position/edit', { ticker, manualCoefficient, lifeSize })
}
