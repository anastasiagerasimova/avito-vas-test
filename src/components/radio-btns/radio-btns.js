import React from 'react'
import {
    ArrowUpLeftIcon, ArrowUpRightIcon, 
    ArrowDownLeftIcon, ArrowDownRightIcon, 
    ArrowLeftIcon, ArrowRightIcon,
    ArrowDownIcon, ArrowUpIcon
} from '@primer/octicons-react'
import {connect} from 'react-redux'

import Input from '../input'
import {addedGradientDirection} from '../../actions'
 
import classes from './radio-btns.module.css'

const RadioBtns = ({onAddedGradientDirection}) => {
    return(
        <ul 
            className={classes.radiogroup} 
            onClick={(e) => { 
                if(e.target.checked) onAddedGradientDirection(e.target.value)
            }}
        >
            <li>
                <Input name={'direction'} type={'radio'} value={'to top left'} label={<ArrowUpLeftIcon size={24} />}></Input>
                <Input name={'direction'} type={'radio'} value={'to top'} checked={true} label={<ArrowUpIcon size={24} />}></Input>
                <Input name={'direction'} type={'radio'} value={'to top right'} label={<ArrowUpRightIcon size={24} />}></Input>
            </li>
            <li>
                <Input name={'direction'} type={'radio'} value={'to left'} label={<ArrowLeftIcon size={24} />}></Input>
                <Input name={'direction'} type={'radio'} value={'to right'} label={<ArrowRightIcon size={24} />}></Input>
            </li>
            <li>
                <Input name={'direction'} type={'radio'} value={'to bottom left'} label={<ArrowDownLeftIcon size={24} />}></Input>
                <Input name={'direction'} type={'radio'} value={'to bottom'} label={<ArrowDownIcon size={24} />}></Input>
                <Input name={'direction'} type={'radio'} value={'to bottom right'} label={<ArrowDownRightIcon size={24} />}></Input>
            </li>
        </ul>
    )
}

const mapDispatchToProps = {
    onAddedGradientDirection: addedGradientDirection
}

const mapStateToProps = () =>{
    return {}
}
  
export default connect(mapStateToProps, mapDispatchToProps)(RadioBtns)
