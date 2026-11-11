import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { 
    sagaFundamentalRatingList
} from '../../redux/actions/fundamentalParameterActions'
import { 
    fetchFilterType
} from '../../redux/actions/filterActions'
import Loader from '../Loader/Loader'
import {Ticker} from '../Ticker/Ticker'
import 'bootstrap/dist/css/bootstrap.css'
import './styles.css'
import { CONSTANTS } from '../../constants'

const GetFallingFromMaxColor = (fallingFromMax) => {
    if (!fallingFromMax) { return CONSTANTS.COLOR_WHITE }
    if (fallingFromMax < -10) { return CONSTANTS.COLOR_LIGHTRED }
    if (fallingFromMax < -5) { return CONSTANTS.COLOR_LIGHTYELLOW }
    if (fallingFromMax < 0) { return CONSTANTS.COLOR_LIGHTGREEN }
    return CONSTANTS.COLOR_WHITE
}

const GetFallingFromMaxValue = (fallingFromMaxValue) => {
    if (!fallingFromMaxValue) { return '' }
    return `${fallingFromMaxValue} %`
}

export const FundamentalRatingList = () => {
    
    const dispatch = useDispatch()
    const loading = useSelector(state => state.app.loading)
    const fundamentalRatingListData = useSelector(state => state.fundamentalParameter.fundamentalRatingListData)

    useEffect(() => {
        dispatch(sagaFundamentalRatingList())
    }, [])

    return (
        <React.Fragment>
        {
            !fundamentalRatingListData.result || loading
            ? <Loader/>
            :
            <div className='fundamental-rating-container'>
                <div
                    // hidden 
                    className='horizontal-container'>
                    <div className='filter-button-container'>
                        <button className='btn btn-outline-dark filter-button'
                            onClick={() => {
                                dispatch(fetchFilterType(''))
                                dispatch(sagaFundamentalRatingList())
                            }}><div className='filter-button-text'>Все</div></button>
                    </div>                      
                    <div className='filter-button-container'>
                        <button className='btn btn-outline-dark filter-button'
                            onClick={() => {
                                dispatch(fetchFilterType('HighDividend'))
                                dispatch(sagaFundamentalRatingList())
                            }}><div className='filter-button-text'>Высокие дивиденды</div></button>
                    </div>    
                    <div className='filter-button-container'>
                        <button className='btn btn-outline-dark filter-button'
                            onClick={() => {
                                dispatch(fetchFilterType('LowDebt'))
                                dispatch(sagaFundamentalRatingList())
                            }}><div className='filter-button-text'>Низкий долг</div></button>
                    </div>      
                    <div className='filter-button-container'>
                        <button className='btn btn-outline-dark filter-button'
                            onClick={() => {
                                dispatch(fetchFilterType('GrowingNetProfit'))
                                dispatch(sagaFundamentalRatingList())
                            }}><div className='filter-button-text'>Растущая ЧП</div></button>
                    </div>                                                   
                </div>    
                <div 
                    // hidden
                >{fundamentalRatingListData.result.tickerList}</div>                     
                <div className='horizontal-container'>
                    <div className='fundamental-rating-number-header-cell fundamental-rating-border-style'>№</div>
                    <div className='fundamental-rating-border-style' style={{width: 52}}></div>
                    <div className='fundamental-rating-ticker-header-cell fundamental-rating-border-style'>Тикер</div>
                    <div className='fundamental-rating-name-header-cell fundamental-rating-border-style'>Наименование</div>
                    <div className='fundamental-rating-sector-header-cell fundamental-rating-border-style'>Сектор</div>
                    <div className='fundamental-rating-score-header-cell fundamental-rating-border-style'>Рейт.</div>
                    <div className='fundamental-rating-market-cap-header-cell fundamental-rating-border-style'>Market Cap</div>
                    <div className='fundamental-rating-pe-header-cell fundamental-rating-border-style'>P / E</div>
                    <div className='fundamental-rating-pbv-header-cell fundamental-rating-border-style'>P / BV</div>
                    <div className='fundamental-rating-ev-ebitda-header-cell fundamental-rating-border-style'>EV / EBITDA</div>
                    <div className='fundamental-rating-netdebt-ebitda-header-cell fundamental-rating-border-style'>ND / EBITDA</div>
                    <div className='fundamental-rating-netdebt-header-cell fundamental-rating-border-style'>Чистый долг</div>
                    <div className='fundamental-rating-debt-ratio-header-cell fundamental-rating-border-style'>Debt Ratio</div>
                    <div className='fundamental-rating-debt-equity-header-cell fundamental-rating-border-style'>Debt Equity</div>
                    <div className='fundamental-rating-dividend-yield-header-cell fundamental-rating-border-style'>ДД, %</div>
                    <div className='fundamental-rating-dividend-aristocrat-header-cell fundamental-rating-border-style'>Стабильность дивидендов</div>
                    <div className='fundamental-rating-netprofit-header-cell fundamental-rating-border-style'>Чистая прибыль</div>
                    <div className='fundamental-rating-fcf-header-cell fundamental-rating-border-style'>FCF</div>
                    <div className='fundamental-rating-eps-header-cell fundamental-rating-border-style'>EPS</div>   
                    <div className='fundamental-rating-roa-header-cell fundamental-rating-border-style'>ROA, %</div>   
                    <div className='fundamental-rating-roe-header-cell fundamental-rating-border-style'>ROE, %</div>   
                    <div className='fundamental-rating-ebitda-revenue-header-cell fundamental-rating-border-style'>EBITDA Margin, %</div>
                    <div className='fundamental-rating-falling-from-max-header-cell fundamental-rating-border-style'>Пад. от год. max, %</div>
                </div>
                {
                    fundamentalRatingListData.result.items.map((fundamentalRatingItem) =>(
                        <div className='horizontal-container'>
                            <div className='fundamental-rating-number-cell fundamental-rating-border-style'>{fundamentalRatingItem.number}</div>
                            <div className='fundamental-rating-border-style'><Ticker value={fundamentalRatingItem.ticker} width={50} height={50} /></div>
                            <div className='fundamental-rating-ticker-cell fundamental-rating-border-style'>{fundamentalRatingItem.ticker}</div>
                            <div className='fundamental-rating-name-cell fundamental-rating-border-style'>{fundamentalRatingItem.name}</div>
                            <div className='fundamental-rating-sector-cell fundamental-rating-border-style'>{fundamentalRatingItem.sector}</div>
                            <div 
                                title='Рейтинг по фундаментальным данным'
                                className='fundamental-rating-score-cell fundamental-rating-border-style'
                                style={{backgroundColor: fundamentalRatingItem.score.score.colorFill}}
                                >{fundamentalRatingItem.score.score.value}
                            </div>
                            <div 
                                title={fundamentalRatingItem.score.marketCap.text}
                                className='fundamental-rating-market-cap-cell fundamental-rating-border-style' 
                                style={{backgroundColor: fundamentalRatingItem.score.marketCap.colorFill}}
                                >{fundamentalRatingItem.score.marketCap.description}
                            </div>                            
                            <div 
                                title={fundamentalRatingItem.score.pe.text}
                                className='fundamental-rating-pe-cell fundamental-rating-border-style' 
                                style={{backgroundColor: fundamentalRatingItem.score.pe.colorFill}}
                                >{fundamentalRatingItem.score.pe.description}
                            </div>
                            <div 
                                title={fundamentalRatingItem.score.pbv.text}
                                className='fundamental-rating-pbv-cell fundamental-rating-border-style' 
                                style={{backgroundColor: fundamentalRatingItem.score.pbv.colorFill}}
                                >{fundamentalRatingItem.score.pbv.description}
                            </div>                                
                            <div 
                                title={fundamentalRatingItem.score.evEbitda.text}
                                className='fundamental-rating-ev-ebitda-cell fundamental-rating-border-style' 
                                style={{backgroundColor: fundamentalRatingItem.score.evEbitda.colorFill}}
                                >{fundamentalRatingItem.score.evEbitda.description}
                            </div> 
                            <div 
                                title={fundamentalRatingItem.score.netDebtEbitda.text}
                                className='fundamental-rating-netdebt-ebitda-cell fundamental-rating-border-style' 
                                style={{backgroundColor: fundamentalRatingItem.score.netDebtEbitda.colorFill}}
                                >{fundamentalRatingItem.score.netDebtEbitda.description}
                            </div>
                            <div 
                                title={fundamentalRatingItem.score.netDebt.text}
                                className='fundamental-rating-netdebt-cell fundamental-rating-border-style' 
                                style={{backgroundColor: fundamentalRatingItem.score.netDebt.colorFill}}
                                >{fundamentalRatingItem.score.netDebt.description}
                            </div>                            
                            <div 
                                title={fundamentalRatingItem.score.debtRatio.text}
                                className='fundamental-rating-debt-ratio-cell fundamental-rating-border-style' 
                                style={{backgroundColor: fundamentalRatingItem.score.debtRatio.colorFill}}
                                >{fundamentalRatingItem.score.debtRatio.description}
                            </div> 
                            <div 
                                title={fundamentalRatingItem.score.debtEquity.text}
                                className='fundamental-rating-debt-equity-cell fundamental-rating-border-style' 
                                style={{backgroundColor: fundamentalRatingItem.score.debtEquity.colorFill}}
                                >{fundamentalRatingItem.score.debtEquity.description}
                            </div>                                                       
                            <div                
                                title={fundamentalRatingItem.score.dividendYield.text}             
                                className='fundamental-rating-dividend-yield-cell fundamental-rating-border-style'
                                style={{backgroundColor: fundamentalRatingItem.score.dividendYield.colorFill}}
                                >{fundamentalRatingItem.score.dividendYield.description}
                            </div>   
                            <div 
                                title={fundamentalRatingItem.score.dividendAristocrat.text}
                                className='fundamental-rating-dividend-aristocrat-cell fundamental-rating-border-style' 
                                style={{backgroundColor: fundamentalRatingItem.score.dividendAristocrat.colorFill}}
                                >{fundamentalRatingItem.score.dividendAristocrat.description}
                            </div>                                                     
                            <div 
                                title={fundamentalRatingItem.score.netProfit.text}
                                className='fundamental-rating-netprofit-cell fundamental-rating-border-style' 
                                style={{backgroundColor: fundamentalRatingItem.score.netProfit.colorFill}}
                                >{fundamentalRatingItem.score.netProfit.description}
                            </div>                               
                            <div 
                                title={fundamentalRatingItem.score.fcf.text}
                                className='fundamental-rating-fcf-cell fundamental-rating-border-style' 
                                style={{backgroundColor: fundamentalRatingItem.score.fcf.colorFill}}
                                >{fundamentalRatingItem.score.fcf.description}
                            </div>    
                            <div 
                                title={fundamentalRatingItem.score.eps.text}
                                className='fundamental-rating-eps-cell fundamental-rating-border-style' 
                                style={{backgroundColor: fundamentalRatingItem.score.eps.colorFill}}
                                >{fundamentalRatingItem.score.eps.description}
                            </div>
                            <div 
                                title={fundamentalRatingItem.score.roa.text}
                                className='fundamental-rating-roa-cell fundamental-rating-border-style' 
                                style={{backgroundColor: fundamentalRatingItem.score.roa.colorFill}}
                                >{fundamentalRatingItem.score.roa.description}
                            </div>
                            <div 
                                title={fundamentalRatingItem.score.roe.text}
                                className='fundamental-rating-roe-cell fundamental-rating-border-style' 
                                style={{backgroundColor: fundamentalRatingItem.score.roe.colorFill}}
                                >{fundamentalRatingItem.score.roe.description}
                            </div>                                                      
                            <div 
                                title={fundamentalRatingItem.score.ebitdaRevenue.text}
                                className='fundamental-rating-ebitda-revenue-cell fundamental-rating-border-style' 
                                style={{backgroundColor: fundamentalRatingItem.score.ebitdaRevenue.colorFill}}
                                >{fundamentalRatingItem.score.ebitdaRevenue.description}
                            </div>
                            <div 
                                title='Падение от годового максимума'
                                className='fundamental-rating-falling-from-max-cell fundamental-rating-border-style' 
                                style={{backgroundColor: GetFallingFromMaxColor(fundamentalRatingItem.fallingFromMax)}}
                                >{GetFallingFromMaxValue(fundamentalRatingItem.fallingFromMax)}
                            </div>
                        </div>
                    ))
                }
            </div>
        }
        </React.Fragment>                
    )
}