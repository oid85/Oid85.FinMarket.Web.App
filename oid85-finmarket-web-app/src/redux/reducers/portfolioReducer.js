import {
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

const initialState = {
    portfolioPositionListData: {},
    bondLifePortfolioPositionListData: {},
    shareLifePortfolioPositionListData: {},
    threeEtfLifePortfolioPositionListData: {},
    sevenEtfLifePortfolioPositionListData: {},
    portfolioBacktestData: {},
    portfolioName: '',
    currentPortfolioPosition: {},
    editPortfolioPositionModalIsOpened: false
}

export const portfolioReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_PORTFOLIO_POSITION_LIST:                return {...state, portfolioPositionListData: {...action.payload}}
        case FETCH_BOND_LIFE_PORTFOLIO_POSITION_LIST:      return {...state, bondLifePortfolioPositionListData: {...action.payload}}
        case FETCH_SHARE_LIFE_PORTFOLIO_POSITION_LIST:     return {...state, shareLifePortfolioPositionListData: {...action.payload}}
        case FETCH_THREE_ETF_LIFE_PORTFOLIO_POSITION_LIST: return {...state, threeEtfLifePortfolioPositionListData: {...action.payload}}
        case FETCH_SEVEN_ETF_LIFE_PORTFOLIO_POSITION_LIST: return {...state, sevenEtfLifePortfolioPositionListData: {...action.payload}}
        case FETCH_PORTFOLIO_BACKTEST:                     return {...state, portfolioBacktestData: {...action.payload}}
        case FETCH_PORTFOLIO_NAME:                         return {...state, portfolioName: action.payload}
        case FETCH_CURRENT_PORTFOLIO_POSITION:             return {...state, currentPortfolioPosition: {...action.payload}}

        case SHOW_EDIT_PORTFOLIO_POSITION_MODAL:           return {...state, editPortfolioPositionModalIsOpened: true}    
        case HIDE_EDIT_PORTFOLIO_POSITION_MODAL:           return {...state, editPortfolioPositionModalIsOpened: false}

        default: return state
    }
}