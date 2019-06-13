import React from 'react';
import Modal from '../Modal/Modal';
import {connect} from 'react-redux';
import * as actions from '../../store/actions/index';
import Button from '../Button/Button';

const confirmationScreen = (props)=>{
    return (
        <Modal 
        show = {props.isHistoryVisible}>
            <div>
                <p>Do you want to save it in history?</p>
                <Button 
                click = {()=>{
                    props.hideHistorySave();
                    props.resetImage();
                    }} 
                type = 'Cancel'>No</Button>
                <Button type = 'Confirm'>Yes!</Button>
            </div>
        </Modal>   
    )
}

const mapDispatchToProps = dispatch =>{
    return{
        hideHistorySave: () => dispatch(actions.showHistorySave()),
        resetImage: ()=>dispatch(actions.resetImage())
    }
}

const mapStateToProps = (state)=>{
    return{
        isHistoryVisible: state.isHistorySaveVisible
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(confirmationScreen);