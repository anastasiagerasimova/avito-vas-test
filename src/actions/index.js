const addedImage = (image) => {
    return {
        type: 'ADD_IMAGE',
        payload: image
    }
}

const addedText = (text) => {
    return {
        type: 'ADD_TEXT',
        payload: text
    }
}

const addedStartColor = (color) => {
    return {
        type: 'ADD_START_COLOR',
        payload: color
    }
}

const addedEndColor = (color) => {
    return {
        type: 'ADD_END_COLOR',
        payload: color
    }
}

const addedGradientDirection = (direction) => {
    return {
        type: 'ADD_GRADIENT_DIRECTION',
        payload: direction
    }
}

const setedBackgroundType = (type) => {
    return {
        type: 'SET_BACKGROUND_TYPE',
        payload: type
    }
}

const addedColor = (color) => {
    return{
        type: 'ADD_COLOR',
        payload: color
    }
}

const addedLink = (link) => {
    return{
        type: 'ADD_LINK',
        payload: link
    }
}

export {
    addedImage,
    addedText,
    addedStartColor,
    addedEndColor,
    addedColor,
    addedGradientDirection,
    setedBackgroundType,
    addedLink
}