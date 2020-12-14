import React from 'react'
import {connect} from 'react-redux'

import {
    addedImage, addedText, 
    addedStartColor, addedEndColor, 
    setedBackgroundType, addedColor, 
    addedLink
} from '../../actions'
import Input from '../input'
import RadioBtns from '../radio-btns'

import classes from './form.module.css'

const Form = (props) => {
    const {
        onAddedImage, 
        onAddedText, 
        onAddedStartColor, 
        onAddedEndColor, 
        onsetedBackgroundType, 
        onAddedColor,
        onAddedLink,
        color, endColor, startColor
    } = props
    return(
        <form className={classes.form}>
            <legend>Create bunner</legend>            
            <Input type={'text'} label={'Image:'} placeholder={'Link or DataURI'} onChange={(e) => onAddedImage(e.target.value)}/>
            <Input type={'text'} label={'Text:'} placeholder={'Bunner text'} onChange={(e) => onAddedText(e.target.value)}/>
            <Input type={'text'} label={'Link:'} placeholder={'Bunner link'} onChange={(e)=> onAddedLink(e.target.value)}/>
            <div 
                onClick={(e) => {
                    if(e.target.name === 'bg' && e.target.checked) onsetedBackgroundType(e.target.value)
                }}
            >
                <Input name={'bg'} type={'radio'} value={'gradient'} label={'GRADIENT'}></Input>
                <div className="d-flex">
                    <Input className={'mr-3'} type={'color'} label={'Start color:'} value={startColor} onChange={(e) => onAddedStartColor(e.target.value)}/>
                    <Input type={'color'} label={'End color:'} value={endColor} onChange={(e) => onAddedEndColor(e.target.value)}/>
                </div>
                <RadioBtns />

                <Input name={'bg'} type={'radio'} value={'color'} checked={true} label={'COLOR'}></Input>
                <Input type={'color'} label={'Color:'} value={color} onChange={(e) => onAddedColor(e.target.value)}/>
            </div>
      </form>  
    )
}

const mapStateToProps = ({color, gradient:{endColor, startColor}}) =>{
  return {color, endColor, startColor}
}

const mapDispatchToProps = {
    onAddedImage: addedImage, 
    onAddedText: addedText,
    onAddedStartColor: addedStartColor,
    onAddedEndColor: addedEndColor,
    onAddedColor: addedColor,
    onsetedBackgroundType: setedBackgroundType,
    onAddedLink: addedLink
}

export default connect(mapStateToProps, mapDispatchToProps)(Form)