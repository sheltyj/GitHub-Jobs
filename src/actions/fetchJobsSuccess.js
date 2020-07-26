import { SUCCESS } from '../constants/action constants'

export const fetchJobsSuccess = (jobs) => {
    return{
        type : SUCCESS,
        payload : jobs
    }
}