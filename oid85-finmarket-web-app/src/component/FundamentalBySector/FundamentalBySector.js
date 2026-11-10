import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { 
    sagaFundamentalBySector, 
    fetchCurrentSector
} from '../../redux/actions/fundamentalParameterActions'
import Loader from '../Loader/Loader'
import 'bootstrap/dist/css/bootstrap.css'
import './styles.css'
import { LineDiagram } from './LineDiagram'
import { BarDiagram } from './BarDiagram'
import { BarDiagramInvertColor } from './BarDiagramInvertColor'
import { BubbleDiagram } from './BubbleDiagram'
import { sagaSectorList } from '../../redux/actions/instrumentActions'
import { Ticker } from '../Ticker/Ticker'
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

export const FundamentalBySector = () => {
    
    const dispatch = useDispatch()
    const loading = useSelector(state => state.app.loading)
    const fundamentalBySectorData = useSelector(state => state.fundamentalParameter.fundamentalBySectorData)   
    const sectorListData = useSelector(state => state.instrument.sectorListData) 
    const currentSector = useSelector(state => state.fundamentalParameter.currentSector)    

    useEffect(() => {
        dispatch(sagaFundamentalBySector())
        dispatch(sagaSectorList())
    }, [])

    return (
        <React.Fragment>
        {
            !fundamentalBySectorData.result || !sectorListData.result || loading
            ? <Loader/>
            :
            <div className='fundamental-by-sector-container'>
                <div className='horizontal-container'>
                {
                    sectorListData.result.sectors.map((sector) => (
                        <div className='sector-button-container'>
                        <button className='btn btn-outline-dark sector-button'
                            onClick={() => {
                                dispatch(fetchCurrentSector({name: sector}))
                                dispatch(sagaFundamentalBySector())
                            }}><div className='sector-button-text'>{sector}</div></button>
                    </div>                        
                    ))
                }                                                                                                                                                                                                                                                              
                </div>
                <div className='fundamental-by-sector-sector-title'>{currentSector.name}</div>
                <div className='fundamental-by-sector-fundamental-score-title'>Фундаментальный рейтинг</div>
                <div className='horizontal-container'>
                    <div className='fundamental-by-sector-number-header-cell fundamental-by-sector-border-style'>№</div>
                    <div className='fundamental-by-sector-border-style' style={{width: 62}}></div>
                    <div className='fundamental-by-sector-ticker-header-cell fundamental-by-sector-border-style'>Тикер</div>
                    <div className='fundamental-by-sector-name-header-cell fundamental-by-sector-border-style'>Наименование</div>
                    <div className='fundamental-by-sector-sector-header-cell fundamental-by-sector-border-style'>Сектор</div>
                    <div className='fundamental-by-sector-score-header-cell fundamental-by-sector-border-style'>Рейт.</div>
                    <div className='fundamental-by-sector-market-cap-header-cell fundamental-by-sector-border-style'>Market Cap</div>
                    <div className='fundamental-by-sector-pe-header-cell fundamental-by-sector-border-style'>P / E</div>                    
                    <div className='fundamental-by-sector-pbv-header-cell fundamental-by-sector-border-style'>P / BV</div>
                    {
                        currentSector.name != 'Банки'
                        ?
                        <div className='fundamental-by-sector-ev-ebitda-header-cell fundamental-by-sector-border-style'>EV / EBITDA</div>
                        : <div></div>
                    }                    
                    {
                        currentSector.name != 'Банки'
                        ?
                        <div className='fundamental-by-sector-netdebt-ebitda-header-cell fundamental-by-sector-border-style'>ND / EBITDA</div>  
                        : <div></div>
                    }     
                    {
                        currentSector.name != 'Банки'
                        ?
                        <div className='fundamental-by-sector-netdebt-header-cell fundamental-by-sector-border-style'>Net Debt</div>  
                        : <div></div>
                    }                                                        
                    <div className='fundamental-by-sector-debt-ratio-header-cell fundamental-by-sector-border-style'>Debt Ratio</div>
                    <div className='fundamental-by-sector-debt-equity-header-cell fundamental-by-sector-border-style'>Debt Equity</div>
                    <div className='fundamental-by-sector-dividend-yield-header-cell fundamental-by-sector-border-style'>ДД, %</div>
                    <div className='fundamental-by-sector-dividend-aristocrat-header-cell fundamental-by-sector-border-style'>Стабильность дивидендов</div>
                    <div className='fundamental-by-sector-netprofit-header-cell fundamental-by-sector-border-style'>Чистая прибыль</div>
                    <div className='fundamental-by-sector-fcf-header-cell fundamental-by-sector-border-style'>FCF</div>
                    <div className='fundamental-by-sector-eps-header-cell fundamental-by-sector-border-style'>EPS</div>   
                    <div className='fundamental-by-sector-roa-header-cell fundamental-by-sector-border-style'>ROA, %</div>   
                    <div className='fundamental-by-sector-roe-header-cell fundamental-by-sector-border-style'>ROE, %</div>   
                    {
                        currentSector.name != 'Банки'
                        ?
                        <div className='fundamental-by-sector-ebitda-revenue-header-cell fundamental-by-sector-border-style'>EBITDA Margin, %</div>
                        : <div></div>
                    }                                        
                    <div className='fundamental-by-sector-falling-from-max-header-cell fundamental-by-sector-border-style'>Пад. от год. max, %</div>
                </div>                
                {
                    fundamentalBySectorData.result.fundamentalRatingItems.map((fundamentalRatingItem) =>(
                        <div className='horizontal-container'>
                            <div className='fundamental-by-sector-number-cell fundamental-by-sector-border-style'>{fundamentalRatingItem.number}</div>
                            <div className='fundamental-by-sector-border-style'><Ticker value={fundamentalRatingItem.ticker} width={60} height={60} /></div>
                            <div className='fundamental-by-sector-ticker-cell fundamental-by-sector-border-style'>{fundamentalRatingItem.ticker}</div>
                            <div className='fundamental-by-sector-name-cell fundamental-by-sector-border-style'>{fundamentalRatingItem.name}</div>
                            <div className='fundamental-by-sector-sector-cell fundamental-by-sector-border-style'>{fundamentalRatingItem.sector}</div>
                            <div 
                                title='Рейтинг по фундаментальным данным'
                                className='fundamental-by-sector-score-cell fundamental-by-sector-border-style'
                                style={{backgroundColor: fundamentalRatingItem.score.score.colorFill}}
                                >{fundamentalRatingItem.score.score.value}
                            </div>
                            <div 
                                title={fundamentalRatingItem.score.marketCap.text}
                                className='fundamental-by-sector-market-cap-cell fundamental-by-sector-border-style' 
                                style={{backgroundColor: fundamentalRatingItem.score.marketCap.colorFill}}
                                >{fundamentalRatingItem.score.marketCap.description}
                            </div>                            
                            <div 
                                title={fundamentalRatingItem.score.pe.text}
                                className='fundamental-by-sector-pe-cell fundamental-by-sector-border-style' 
                                style={{backgroundColor: fundamentalRatingItem.score.pe.colorFill}}
                                >{fundamentalRatingItem.score.pe.description}
                            </div>
                            <div 
                                title={fundamentalRatingItem.score.pbv.text}
                                className='fundamental-by-sector-pbv-cell fundamental-by-sector-border-style' 
                                style={{backgroundColor: fundamentalRatingItem.score.pbv.colorFill}}
                                >{fundamentalRatingItem.score.pbv.description}
                            </div> 
                            {
                                currentSector.name != 'Банки'
                                ?
                                <div 
                                    title={fundamentalRatingItem.score.evEbitda.text}
                                    className='fundamental-by-sector-ev-ebitda-cell fundamental-by-sector-border-style' 
                                    style={{backgroundColor: fundamentalRatingItem.score.evEbitda.colorFill}}
                                    >{fundamentalRatingItem.score.evEbitda.description}
                                </div> 
                                : <div></div>
                            }                                                             
                            {
                                currentSector.name != 'Банки'
                                ?
                                <div 
                                    title={fundamentalRatingItem.score.netDebtEbitda.text}
                                    className='fundamental-by-sector-netdebt-ebitda-cell fundamental-by-sector-border-style' 
                                    style={{backgroundColor: fundamentalRatingItem.score.netDebtEbitda.colorFill}}
                                    >{fundamentalRatingItem.score.netDebtEbitda.description}
                                </div> 
                                : <div></div>
                            }
                            {
                                currentSector.name != 'Банки'
                                ?
                                <div 
                                    title={fundamentalRatingItem.score.netDebt.text}
                                    className='fundamental-by-sector-netdebt-cell fundamental-by-sector-border-style' 
                                    style={{backgroundColor: fundamentalRatingItem.score.netDebt.colorFill}}
                                    >{fundamentalRatingItem.score.netDebt.description}
                                </div> 
                                : <div></div>
                            }                            
                            <div 
                                title={fundamentalRatingItem.score.debtRatio.text}
                                className='fundamental-by-sector-debt-ratio-cell fundamental-by-sector-border-style' 
                                style={{backgroundColor: fundamentalRatingItem.score.debtRatio.colorFill}}
                                >{fundamentalRatingItem.score.debtRatio.description}
                            </div> 
                            <div 
                                title={fundamentalRatingItem.score.debtEquity.text}
                                className='fundamental-by-sector-debt-equity-cell fundamental-by-sector-border-style' 
                                style={{backgroundColor: fundamentalRatingItem.score.debtEquity.colorFill}}
                                >{fundamentalRatingItem.score.debtEquity.description}
                            </div>                                                       
                            <div                
                                title={fundamentalRatingItem.score.dividendYield.text}             
                                className='fundamental-by-sector-dividend-yield-cell fundamental-by-sector-border-style'
                                style={{backgroundColor: fundamentalRatingItem.score.dividendYield.colorFill}}
                                >{fundamentalRatingItem.score.dividendYield.description}
                            </div>   
                            <div 
                                title={fundamentalRatingItem.score.dividendAristocrat.text}
                                className='fundamental-by-sector-dividend-aristocrat-cell fundamental-by-sector-border-style' 
                                style={{backgroundColor: fundamentalRatingItem.score.dividendAristocrat.colorFill}}
                                >{fundamentalRatingItem.score.dividendAristocrat.description}
                            </div>                                                     
                            <div 
                                title={fundamentalRatingItem.score.netProfit.text}
                                className='fundamental-by-sector-netprofit-cell fundamental-by-sector-border-style' 
                                style={{backgroundColor: fundamentalRatingItem.score.netProfit.colorFill}}
                                >{fundamentalRatingItem.score.netProfit.description}
                            </div>                               
                            <div 
                                title={fundamentalRatingItem.score.fcf.text}
                                className='fundamental-by-sector-fcf-cell fundamental-by-sector-border-style' 
                                style={{backgroundColor: fundamentalRatingItem.score.fcf.colorFill}}
                                >{fundamentalRatingItem.score.fcf.description}
                            </div>    
                            <div 
                                title={fundamentalRatingItem.score.eps.text}
                                className='fundamental-by-sector-eps-cell fundamental-by-sector-border-style' 
                                style={{backgroundColor: fundamentalRatingItem.score.eps.colorFill}}
                                >{fundamentalRatingItem.score.eps.description}
                            </div>
                            <div 
                                title={fundamentalRatingItem.score.roa.text}
                                className='fundamental-by-sector-roa-cell fundamental-by-sector-border-style' 
                                style={{backgroundColor: fundamentalRatingItem.score.roa.colorFill}}
                                >{fundamentalRatingItem.score.roa.description}
                            </div>
                            <div 
                                title={fundamentalRatingItem.score.roe.text}
                                className='fundamental-by-sector-roe-cell fundamental-by-sector-border-style' 
                                style={{backgroundColor: fundamentalRatingItem.score.roe.colorFill}}
                                >{fundamentalRatingItem.score.roe.description}
                            </div> 
                            {
                                currentSector.name != 'Банки'
                                ?
                                <div 
                                    title={fundamentalRatingItem.score.ebitdaRevenue.text}
                                    className='fundamental-by-sector-ebitda-revenue-cell fundamental-by-sector-border-style' 
                                    style={{backgroundColor: fundamentalRatingItem.score.ebitdaRevenue.colorFill}}
                                    >{fundamentalRatingItem.score.ebitdaRevenue.description}
                                </div> 
                                : <div></div>
                            }
                            <div 
                                title='Падение от годового максимума'
                                className='fundamental-by-sector-falling-from-max-cell fundamental-by-sector-border-style' 
                                style={{backgroundColor: GetFallingFromMaxColor(fundamentalRatingItem.fallingFromMax)}}
                                >{GetFallingFromMaxValue(fundamentalRatingItem.fallingFromMax)}
                            </div>
                        </div>
                    ))
                }         
                <div className='fundamental-by-sector-diagram-title'>Графики цены (динамика за 5 лет)</div>
                <div className='horizontal-container'>
                {
                    fundamentalBySectorData.result.priceDiagram.map((diagram, index) => (
                        <LineDiagram
                            key={index}
                            ticker={diagram.ticker}
                            name={diagram.name} 
                            data={diagram.data} />))
                }                    
                </div>           
                <div className='fundamental-by-sector-diagram-title'>Диаграммы фундаментальных параметров (динамика за пред. 5 лет + TTM)</div>
                <div className='fundamental-by-sector-diagram-title'>Чистая прибыль, млрд. руб</div>
                <div className='horizontal-container'>
                {
                    fundamentalBySectorData.result.netProfitDiagram.map((diagram, index) => (
                        <BarDiagram key={index} data={diagram.data} />))
                }                        
                </div> 
                {
                    fundamentalBySectorData.result.sector != 'Банки'
                    ?
                    <div>
                        <div className='fundamental-by-sector-diagram-title'>Чистый долг, млрд. руб</div>
                        <div className='horizontal-container'>
                        {
                            fundamentalBySectorData.result.netDebtDiagram.map((diagram, index) => (
                                <BarDiagramInvertColor key={index} data={diagram.data} />))
                        }                        
                        </div>                        
                    </div>
                    : <div></div>
                }      
                <div className='fundamental-by-sector-diagram-title'>Дивиденды, руб</div>
                <div className='horizontal-container'>
                {
                    fundamentalBySectorData.result.dividendDiagram.map((diagram, index) => (
                        <BarDiagram key={index} data={diagram.data} />))
                }
                </div>
                {
                    fundamentalBySectorData.result.sector != 'Банки'
                    ?
                    <div>
                        <div className='fundamental-by-sector-diagram-title'>EV/EBITDA, NetDebt/EBITDA, MarketCap</div>
                        <div className='horizontal-container'>
                            <BubbleDiagram data={fundamentalBySectorData.result.bubbleDiagram} />
                        </div>                           
                    </div>
                    : <div></div>
                }
            </div>
        }

        </React.Fragment>                
    )
}