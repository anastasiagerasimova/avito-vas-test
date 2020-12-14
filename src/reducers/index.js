const initialState = {
    image: '',
    text: '',
    gradient: {
        direction: 'to top',
        startColor: '#ced4da',
        endColor: '#ced4da',

    },
    background: 'color',
    color: '#f9e547',
    link: ''
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case 'ADD_IMAGE':
            return {
                ...state,
                image: action.payload
            }
        case 'ADD_TEXT':
            return {
                ...state,
                text: action.payload
            }
        case 'ADD_START_COLOR':
            return {
                ...state,
                gradient: {
                    ...state.gradient,
                    startColor: action.payload
                }
            }
        case 'ADD_END_COLOR':
            return {
                ...state,
                gradient: {
                    ...state.gradient,
                    endColor: action.payload
                }
            }
        case 'ADD_COLOR':
            return {
                ...state,
                color: action.payload
            }
        case 'ADD_GRADIENT_DIRECTION':
            return {
                ...state,
                gradient: {
                    ...state.gradient,
                    direction: action.payload
                }
            }
        case 'SET_BACKGROUND_TYPE':
            return {
                ...state,
                background: action.payload
            }
        case 'ADD_LINK':
            return {
                ...state,
                link: action.payload
            }
        default:
            return state
    }
}

export default reducer
