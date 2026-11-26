import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { 
    sagaBondLifePortfolioPositionList
} from '../../redux/actions/portfolioActions'
import { 
    fetchOrderField
} from '../../redux/actions/orderActions'
import Loader from '../Loader/Loader'
import {Ticker} from '../Ticker/Ticker'
import 'bootstrap/dist/css/bootstrap.css'
import './styles.css'
import { CONSTANTS } from '../../constants'
import { LifePortfolioTotalSum } from './LifePortfolioTotalSum'
import { LifePortfolioYieldMetric } from './LifePortfolioYieldMetric'
import { LifePortfolioEquityDiagram } from './LifePortfolioEquityDiagram'

export const BondLifePortfolio = () => {
    
    const dispatch = useDispatch()
    const loading = useSelector(state => state.app.loading)
    const portfolioData = useSelector(state => state.portfolio.bondLifePortfolioPositionListData)    

    useEffect(() => {
        dispatch(sagaBondLifePortfolioPositionList())
    }, [])

    const formatNumber = (num) => {
        return new Intl.NumberFormat('ru-RU').format(num);
      };     
    
    return (
        <React.Fragment>
        {
            !portfolioData.result || loading
            ? <Loader/>
            :
            <div className='life-portfolio-container'>
                <div>Статистика по доходности</div>
                <div>
                    <div className='horizontal-container'>
                        <LifePortfolioTotalSum title={"Сумма портфеля"} text={"Сумма портфеля"} value={portfolioData.result.totalSum} eunit={"руб."} />
                        <LifePortfolioYieldMetric title={"Год"} text={"Год"} yieldRub={portfolioData.result.moneyStatistics.yearYield} yieldPercent={portfolioData.result.moneyStatistics.yearYieldPercent} />
                        <LifePortfolioYieldMetric title={"Квартал"} text={"Квартал"} yieldRub={portfolioData.result.moneyStatistics.monthYield} yieldPercent={portfolioData.result.moneyStatistics.monthYieldPercent} />
                        <LifePortfolioYieldMetric title={"Месяц"} text={"Месяц"} yieldRub={portfolioData.result.moneyStatistics.quarterYield} yieldPercent={portfolioData.result.moneyStatistics.quarterYieldPercent} />                        
                        <LifePortfolioYieldMetric title={"Неделя"} text={"Неделя"} yieldRub={portfolioData.result.moneyStatistics.weekYield} yieldPercent={portfolioData.result.moneyStatistics.weekYieldPercent} />
                    </div>                              
                </div>
                <div>За последний квартал</div>
                <div className='horizontal-container'>
                    <div className='life-portfolio-container'>
                        <LifePortfolioEquityDiagram series={portfolioData.result.moneyStatistics.equitySeries}/>
                    </div>               
                </div>                      
                <div>Состав</div>
                <div className='horizontal-container'>
                    <div className='life-portfolio-border-style life-portfolio-number'>№</div>
                    <div className='life-portfolio-border-style life-portfolio-ticker'>Тикер</div>
                    <div className='life-portfolio-border-style life-portfolio-name'>Наименование</div>
                    <div className='life-portfolio-border-style life-portfolio-price'>Цена, руб.</div>
                    <div className='life-portfolio-border-style life-portfolio-rating'>Рейт.</div>
                    <div className='life-portfolio-border-style life-portfolio-percent'>
                        <div>Доля (расч.), %</div>
                        <div className='sort-button-container'>
                            <button className='btn btn-outline-dark sort-button'
                                onClick={() => {
                                    dispatch(fetchOrderField('Percent'))
                                    dispatch(sagaBondLifePortfolioPositionList())
                                }}><div className='sort-button-text'>Сорт.</div></button>
                        </div>
                    </div>
                    <div className='life-portfolio-border-style life-portfolio-delta-percent-text'>
                        <div>Изм., %</div>
                        <div className='sort-button-container'>
                            <button className='btn btn-outline-dark sort-button'
                                onClick={() => {
                                    dispatch(fetchOrderField('DeltaPercent'))
                                    dispatch(sagaBondLifePortfolioPositionList())
                                }}><div className='sort-button-text'>Сорт.</div></button>
                        </div>                        
                    </div>                     
                    <div className='life-portfolio-border-style life-portfolio-recommendation'>Рекоменд.</div>
                    <div className='life-portfolio-border-style life-portfolio-size'>Кол-во (расч.), шт</div>
                    <div className='life-portfolio-border-style life-portfolio-life-size'>Кол-во (реал.), шт</div>
                    <div className='life-portfolio-border-style life-portfolio-delta-text'>Изм., шт</div>
                    <div className='life-portfolio-border-style life-portfolio-cost'>Стоимость (расч.), руб</div>
                </div>
                {
                    portfolioData.result.portfolioPositions.map((portfolioPosition) => (
                        <div className='horizontal-container'>
                            <div className='life-portfolio-border-style life-portfolio-number' style={{backgroundColor: portfolioPosition.colorFill}}>{portfolioPosition.number}</div>                            
                            <div className='life-portfolio-border-style life-portfolio-ticker' style={{backgroundColor: portfolioPosition.colorFill}}>{portfolioPosition.ticker}</div>
                            <div className='life-portfolio-border-style life-portfolio-name' style={{backgroundColor: portfolioPosition.colorFill}}>{portfolioPosition.name}</div>  
                            <div className='life-portfolio-border-style life-portfolio-price' style={{backgroundColor: portfolioPosition.colorFill}}>{`${formatNumber(portfolioPosition.price)} руб`}</div>                            
                            <div className='life-portfolio-border-style life-portfolio-rating' style={{backgroundColor: portfolioPosition.colorFill}}>{portfolioPosition.rating}</div>  
                            <div className='life-portfolio-border-style life-portfolio-percent' style={{backgroundColor: portfolioPosition.colorFill}}>{`${formatNumber(portfolioPosition.percent)} %`}</div>  
                            <div className='life-portfolio-border-style life-portfolio-delta-percent-text' style={{backgroundColor: portfolioPosition.colorFill}}>{portfolioPosition.deltaPercentText}</div>                              
                            <div className='life-portfolio-border-style life-portfolio-recommendation' style={{backgroundColor: portfolioPosition.colorFill}}>{portfolioPosition.recommendation}</div>  
                            <div className='life-portfolio-border-style life-portfolio-size' style={{backgroundColor: portfolioPosition.colorFill}}>{`${formatNumber(portfolioPosition.size)} шт`}</div>  
                            <div className='life-portfolio-border-style life-portfolio-life-size' style={{backgroundColor: portfolioPosition.colorFill}}>{`${formatNumber(portfolioPosition.lifeSize)} шт`}</div>  
                            <div className='life-portfolio-border-style life-portfolio-delta-text' style={{backgroundColor: portfolioPosition.colorFill}}>{portfolioPosition.deltaText}</div>  
                            <div className='life-portfolio-border-style life-portfolio-cost' style={{backgroundColor: portfolioPosition.colorFill}}>{`${formatNumber(portfolioPosition.cost)} руб`}</div>  
                        </div>
                    ))
                }
            </div>
        }
        </React.Fragment>                
    )
}