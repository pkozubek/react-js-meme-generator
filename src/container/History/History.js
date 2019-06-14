import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../../store/actions/index';
import HistoryTab from '../../components/HistoryTab/HistoryTab';

class History extends React.Component{
    
    state ={
        currentlySelected : null
    }

    componentDidMount(){
        this.props.fetchHistory();
    }
    
    clickHandle = (index)=>{
        this.setState({currentlySelected: index})
    }

    render(){

        let fetchedArray = [];

        if(this.props.fetchedData !== null)
            fetchedArray = Object.keys(this.props.fetchedData).map(key => this.props.fetchedData[key]);
       
        return <div>
        {fetchedArray.map((element,index)=>{
            return <HistoryTab
            isSelected = {this.state.currentlySelected === index}
            click = {()=>this.clickHandle(index)} 
            key = {element.fileName+index} 
            name = {element.fileName}
            bottomText = {element.bottomText}
            topText = {element.topText}
            topFontSize = {element.topFontSize}
            bottomFontSize = {element.bottomFontSize}
            colorBottom = {element.bottomColor}
            colorTop = {element.topColor}
            selectedImage = {element.image}
            isSaved = {false}
            />
        })}
        </div>
    }
}

const mapStateToProps = state =>{
    return{
        fetchedData: state.fetchedData
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        fetchHistory: ()=> dispatch(actions.fetchHistory())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(History);