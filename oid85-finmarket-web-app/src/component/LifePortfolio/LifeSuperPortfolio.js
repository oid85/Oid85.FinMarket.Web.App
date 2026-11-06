import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { 
    sagaLifeSuperPortfolio
} from '../../redux/actions/portfolioActions'
import { 
    fetchOrderField
} from '../../redux/actions/orderActions'
import Loader from '../Loader/Loader'
import {Ticker} from '../Ticker/Ticker'
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
                </div>
                {
                    portfolioData.result.portfolios.map((portfolio) => (
                        <div className='horizontal-container'>
                            <div className='life-portfolio-border-style life-portfolio-number' style={{backgroundColor: portfolio.colorFill}}>{portfolio.number}</div>
                            <div className='life-portfolio-border-style life-portfolio-name' style={{backgroundColor: portfolio.colorFill}}>{portfolio.name}</div>
                        </div>
                    ))
                }
            </div>
        }
        </React.Fragment>                
    )
}