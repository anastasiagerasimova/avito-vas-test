import React, {useRef} from 'react'
import {connect} from 'react-redux'
import useClipboard from "use-clipboard-hook"
import {exportComponentAsPNG} from 'react-component-export-image'

import {creatGradient} from '../../utils'
import Button from '../button'

import classes from './bunner.module.css'

const Bunner = (props)=> {
    const bunnerRef = useRef(null);
    const {copy} = useClipboard();

    const {image, text, startColor, endColor, direction, background, color, link} = props
    const bg = background === 'gradient' ? creatGradient(direction, startColor, endColor) : color
    const img = image ? <img src={image} alt="Bunner img"></img> : null
    const json = background === 'gradient' 
        ? {image, text, gradient:{startColor, endColor, direction}}
        : {image, text, color}

    return(
        <div className={classes.bannerWrapper} >
            <div 
                href={link}
                ref={bunnerRef}
                className={classes.banner} 
                style={{background: bg}}
            >
                <a href={link} target="_blank" rel="noreferrer">{null}</a>
                {img}
                <p>{text}</p>
            </div>
            <div className="mx-auto">
                <Button onClick={() => copy(bunnerRef.current.outerHTML)}>Copy HTML</Button>
                <Button onClick={() => copy(JSON.stringify(json))}>Copy JSON</Button>
                <Button onClick={() => exportComponentAsPNG(bunnerRef)}>Get PNG</Button>
            </div>
        </div>
    )
}

const mapStateToProps = ({image, text, gradient: {startColor, endColor, direction}, background, color, link}) => {
    return {
        image, text, 
        startColor, endColor, 
        direction,
        background,
        color, link
    }
}

export default connect(mapStateToProps)(Bunner)
