import { SUCCESS, LOADING, ERROR, HAS_NEXT_PAGE } from '../constants/action constants'

const initialState = {
    jobs : [],
    loading : false,
    error : false,
    hasNextPage : false
}

export const jobsReducer = (state = initialState, action) => {
    switch(action.type)
    {
        case SUCCESS:
            return{
                ...state,
                jobs : action.payload,
                loading : false
            }
        case LOADING:
            return{
                ...state,
                loading : true,
                jobs : []
            }
        case ERROR:
            return{
                ...state,
                error : true,
                loading : false
            }
        case HAS_NEXT_PAGE:
            return{
                ...state,
                hasNextPage : action.payload
            }
        default : return state
    
    }
}

