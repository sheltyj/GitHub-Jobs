import { ERROR } from '../constants/action constants'

export const fetchJobsError = (errorMessage) => {
    return{
        type : ERROR,
        payload : errorMessage
    }
}