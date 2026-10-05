import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { 
    sagaShareLifePortfolioPositionList
} from '../../redux/actions/portfolioActions'
import { 
    fetchOrderField
} from '../../redux/actions/orderActions'
import Loader from '../Loader/Loader'
import {Ticker} from '../Ticker/Ticker'
import 'bootstrap/dist/css/bootstrap.css'
import './styles.css'
import { CONSTANTS } from '../../constants'

export const ShareLifePortfolio = () => {
    
    const dispatch = useDispatch()
    const loading = useSelector(state => state.app.loading)
    const portfolioData = useSelector(state => state.portfolio.shareLifePortfolioPositionListData)    

    useEffect(() => {
        dispatch(sagaShareLifePortfolioPositionList())
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
                    <div className='life-portfolio-border-style' style={{width: 24}}></div>
                    <div className='life-portfolio-border-style life-portfolio-ticker'>Тикер</div>
                    <div className='life-portfolio-border-style life-portfolio-name'>Наименование</div>                                        
                </div>
                {
                    portfolioData.result.portfolioPositions.map((portfolioPosition) => (
                        <div className='horizontal-container'>
                            <div className='life-portfolio-border-style life-portfolio-number' style={{backgroundColor: portfolioPosition.colorFill}}>{portfolioPosition.number}</div>
                            <div className='life-portfolio-border-style'><Ticker value={portfolioPosition.ticker} width={22} height={22} /></div>
                            <div className='life-portfolio-border-style life-portfolio-ticker' style={{backgroundColor: portfolioPosition.colorFill}}>{portfolioPosition.ticker}</div>
                            <div className='life-portfolio-border-style life-portfolio-name' style={{backgroundColor: portfolioPosition.colorFill}}>{portfolioPosition.name}</div>  
                        </div>
                    ))
                }
            </div>
        }
        </React.Fragment>                
    )
}