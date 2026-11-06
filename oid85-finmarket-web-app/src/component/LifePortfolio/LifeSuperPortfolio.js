import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { 
    sagaLifeSuperPortfolio
} from '../../redux/actions/portfolioActions'
import Loader from '../Loader/Loader'
import 'bootstrap/dist/css/bootstrap.css'
import './styles.css'
import { CONSTANTS } from '../../constants'

export const LifeSuperPortfolio = () => {
    
    const dispatch = useDispatch()
    const loading = useSelector(state => state.app.loading)
    const portfolioData = useSelector(state => state.portfolio.lifeSuperPortfolioData)    

    useEffect(() => {
        dispatch(sagaLifeSuperPortfolio())
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
                    <div className='life-portfolio-border-style life-portfolio-name'>Наименование</div>
                    <div className='life-portfolio-border-style life-portfolio-description'>Описание</div>
                    <div className='life-portfolio-border-style life-portfolio-weight'>Вес</div>
                    <div className='life-portfolio-border-style life-portfolio-percent'>Доля (расч.), %</div>    
                    <div className='life-portfolio-border-style life-portfolio-delta-text'>Изм., руб</div>   
                    <div className='life-portfolio-border-style life-portfolio-recommendation'>Рекоменд.</div>   
                    <div className='life-portfolio-border-style life-portfolio-cost'>Стоимость (расч.), руб</div>
                    <div className='life-portfolio-border-style life-portfolio-life-cost'>Стоимость (life), руб</div>                              
                </div>
                {
                    portfolioData.result.portfolios.map((portfolio) => (
                        <div className='horizontal-container'>
                            <div className='life-portfolio-border-style life-portfolio-number' style={{backgroundColor: portfolio.colorFill}}>{portfolio.number}</div>
                            <div className='life-portfolio-border-style life-portfolio-name' style={{backgroundColor: portfolio.colorFill}}>{portfolio.name}</div>
                            <div className='life-portfolio-border-style life-portfolio-description' style={{backgroundColor: portfolio.colorFill}}>{portfolio.description}</div>
                            <div className='life-portfolio-border-style life-portfolio-weight' style={{backgroundColor: portfolio.colorFill}}>{portfolio.weight}</div>
                            <div className='life-portfolio-border-style life-portfolio-percent' style={{backgroundColor: portfolio.colorFill}}>{`${formatNumber(portfolio.percent)} %`}</div>
                            <div className='life-portfolio-border-style life-portfolio-delta-text' style={{backgroundColor: portfolio.colorFill}}>{portfolio.deltaPercentText}</div>  
                            <div className='life-portfolio-border-style life-portfolio-recommendation' style={{backgroundColor: portfolio.colorFill}}>{portfolio.recommendation}</div>  
                            <div className='life-portfolio-border-style life-portfolio-cost' style={{backgroundColor: portfolio.colorFill}}>{`${formatNumber(portfolio.cost)} руб`}</div>  
                            <div className='life-portfolio-border-style life-portfolio-life-cost' style={{backgroundColor: portfolio.colorFill}}>{`${formatNumber(portfolio.lifeCost)} руб`}</div>                              
                        </div>
                    ))
                }
            </div>
        }
        </React.Fragment>                
    )
}