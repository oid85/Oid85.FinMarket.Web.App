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
                <div className='horizontal-container'>
                    <div className='life-portfolio-total-sum'>{`Сумма портфеля: ${formatNumber(portfolioData.result.totalSum)} руб.`}</div>
                </div>
                <div className='horizontal-container'>
                    <div className='life-portfolio-border-style life-portfolio-number'>№</div>
                    <div hidden className='life-portfolio-border-style' style={{width: 24}}></div>
                    <div className='life-portfolio-border-style life-portfolio-ticker'>Тикер</div>
                    <div className='life-portfolio-border-style life-portfolio-name'>Наименование</div>
                    <div className='life-portfolio-border-style life-portfolio-yield'>Куп. доход., %</div>
                    <div className='life-portfolio-border-style life-portfolio-rating'>Рейт.</div>
                    <div className='life-portfolio-border-style life-portfolio-percent'>Доля (расч.), %</div>
                    <div className='life-portfolio-border-style life-portfolio-delta-percent-text'>Изм., %</div>                    
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
                            <div hidden className='life-portfolio-border-style'><Ticker value={portfolioPosition.ticker} width={22} height={22} /></div>
                            <div className='life-portfolio-border-style life-portfolio-ticker' style={{backgroundColor: portfolioPosition.colorFill}}>{portfolioPosition.ticker}</div>
                            <div className='life-portfolio-border-style life-portfolio-name' style={{backgroundColor: portfolioPosition.colorFill}}>{portfolioPosition.name}</div>  
                            <div className='life-portfolio-border-style life-portfolio-yield' style={{backgroundColor: portfolioPosition.colorFill}}>{`${formatNumber(portfolioPosition.yield)} %`}</div>  
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