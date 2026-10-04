import {
    SAGA_PORTFOLIO_POSITION_LIST,
    SAGA_BOND_LIFE_PORTFOLIO_POSITION_LIST,
    SAGA_SHARE_LIFE_PORTFOLIO_POSITION_LIST,
    SAGA_THREE_ETF_LIFE_PORTFOLIO_POSITION_LIST,
    SAGA_SEVEN_ETF_LIFE_PORTFOLIO_POSITION_LIST,
    SAGA_PORTFOLIO_BACKTEST,
    SAGA_EDIT_PORTFOLIO_POSITION,

    FETCH_PORTFOLIO_POSITION_LIST,
    FETCH_BOND_LIFE_PORTFOLIO_POSITION_LIST,
    FETCH_SHARE_LIFE_PORTFOLIO_POSITION_LIST,
    FETCH_THREE_ETF_LIFE_PORTFOLIO_POSITION_LIST,
    FETCH_SEVEN_ETF_LIFE_PORTFOLIO_POSITION_LIST,
    FETCH_PORTFOLIO_BACKTEST,
    FETCH_PORTFOLIO_NAME,
    FETCH_CURRENT_PORTFOLIO_POSITION,

    SHOW_EDIT_PORTFOLIO_POSITION_MODAL,
    HIDE_EDIT_PORTFOLIO_POSITION_MODAL
} from '../types/portfolioTypes'

export const sagaPortfolioPositionList              = () => { return { type: SAGA_PORTFOLIO_POSITION_LIST }}
export const sagaBondLifePortfolioPositionList      = () => { return { type: SAGA_BOND_LIFE_PORTFOLIO_POSITION_LIST }}
export const sagaShareLifePortfolioPositionList     = () => { return { type: SAGA_SHARE_LIFE_PORTFOLIO_POSITION_LIST }}
export const sagaThreeEtfLifePortfolioPositionList  = () => { return { type: SAGA_THREE_ETF_LIFE_PORTFOLIO_POSITION_LIST }}
export const sagaSevenEtfLifePortfolioPositionList  = () => { return { type: SAGA_SEVEN_ETF_LIFE_PORTFOLIO_POSITION_LIST }}
export const sagaPortfolioBacktest                  = () => { return { type: SAGA_PORTFOLIO_BACKTEST }}
export const sagaEditPortfolioPosition              = () => { return { type: SAGA_EDIT_PORTFOLIO_POSITION }}

export const fetchPortfolioPositionList             = (data) => { return { type: FETCH_PORTFOLIO_POSITION_LIST, payload: data }}
export const fetchBondLifePortfolioPositionList     = (data) => { return { type: FETCH_BOND_LIFE_PORTFOLIO_POSITION_LIST, payload: data }}
export const fetchShareLifePortfolioPositionList    = (data) => { return { type: FETCH_SHARE_LIFE_PORTFOLIO_POSITION_LIST, payload: data }}
export const fetchThreeEtfLifePortfolioPositionList = (data) => { return { type: FETCH_THREE_ETF_LIFE_PORTFOLIO_POSITION_LIST, payload: data }}
export const fetchSevenEtfLifePortfolioPositionList = (data) => { return { type: FETCH_SEVEN_ETF_LIFE_PORTFOLIO_POSITION_LIST, payload: data }}
export const fetchPortfolioBacktest                 = (data) => { return { type: FETCH_PORTFOLIO_BACKTEST, payload: data }}
export const fetchPortfolioName                     = (data) => { return { type: FETCH_PORTFOLIO_NAME, payload: data }}
export const fetchCurrentPortfolioPosition          = (data) => { return { type: FETCH_CURRENT_PORTFOLIO_POSITION, payload: data }}

export const showEditPortfolioPositionModal         = () => { return { type: SHOW_EDIT_PORTFOLIO_POSITION_MODAL }}
export const hideEditPortfolioPositionModal         = () => { return { type: HIDE_EDIT_PORTFOLIO_POSITION_MODAL }}
