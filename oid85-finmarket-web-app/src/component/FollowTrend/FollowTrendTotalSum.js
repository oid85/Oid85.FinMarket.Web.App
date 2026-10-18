import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { CONSTANTS } from '../../constants'
import { fetchFollowTrendPortfolioTotalSum, showEditFollowTrendPortfolioTotalSumModal } from '../../redux/actions/followTrendActions';
import './styles.css'

const formatNumber = (num) => {
    return new Intl.NumberFormat('ru-RU').format(num);
  };

export const FollowTrendTotalSum = ({title, text, value, eunit}) => {

    const dispatch = useDispatch()
    
    return (
        <React.Fragment>          
            <div 
                title={title} 
                className='follow-trend-total-sum border-style' 
                style={{backgroundColor: CONSTANTS.COLOR_LIGHTGREEN}}
                onDoubleClick={() => {                    
                    dispatch(fetchFollowTrendPortfolioTotalSum(value))
                    dispatch(showEditFollowTrendPortfolioTotalSumModal())
                }} >
                <div className='follow-trend-container follow-trend-total-summ-description'>{text}</div> 
                <div className='follow-trend-container follow-trend-total-summ-value'>{`${formatNumber(value)} ${eunit}`}</div>                 
            </div> 
        </React.Fragment>                
    )
}