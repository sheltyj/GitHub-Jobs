import { LOADING } from '../constants/action constants'

export const fetchJobsLoading = () => {
    return{
        type : LOADING,
    }
}