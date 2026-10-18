import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Modal from 'react-modal';
import { 
    sagaEditFollowTrendPortfolioTotalSum,
    fetchFollowTrendPortfolioTotalSum,
    hideEditFollowTrendPortfolioTotalSumModal,
    sagaFollowTrendMonitor
} from '../../redux/actions/followTrendActions'
import 'bootstrap/dist/css/bootstrap.css'
import './styles.css'

export const EditFollowTrendPortfolioTotalSumModal = () => {
    
    const dispatch = useDispatch()
    const followTrendPortfolioTotalSum = useSelector(state => state.followTrend.followTrendPortfolioTotalSum)
    const editFollowTrendPortfolioTotalSumModalIsOpened = useSelector(state => state.followTrend.editFollowTrendPortfolioTotalSumModalIsOpened)

    const customStyles = {
        content: {
          top: '50%',
          left: '50%', 
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',                          
          transform: 'translate(-50%, -50%)'
        }
      };

    return (
        <React.Fragment>
            <div>                
                <Modal
                    isOpen={editFollowTrendPortfolioTotalSumModalIsOpened}
                    style={customStyles}>
                    <h6>Сумма портфеля</h6>
                    <form>
                        <label>Сумма портфеля</label>
                        <input 
                            className='form-control edit-modal-input' 
                            type="number" 
                            defaultValue={followTrendPortfolioTotalSum} 
                            placeholder='Сумма портфеля' 
                            onChange={ (event) => { 
                                dispatch(fetchFollowTrendPortfolioTotalSum(event.target.value))
                                }} />                                                               
                        <button 
                            className='btn btn-outline-primary edit-modal-save-button' 
                            onClick={ () => {
                                    dispatch(sagaEditFollowTrendPortfolioTotalSum())
                                    dispatch(sagaFollowTrendMonitor())
                                    dispatch(hideEditFollowTrendPortfolioTotalSumModal())
                                    }}>Сохранить</button>                                   
                        <button 
                            className='btn btn-outline-primary edit-modal-cancel-button' 
                            onClick={ () => { 
                                dispatch(hideEditFollowTrendPortfolioTotalSumModal()) 
                                }}>Закрыть</button>                        
                    </form>
                </Modal>
            </div>
        </React.Fragment>
    )
}