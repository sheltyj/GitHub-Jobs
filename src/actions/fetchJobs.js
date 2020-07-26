
import axios from 'axios'
import { fetchJobsLoading } from './fetchJobsLoading'
import { fetchJobsSuccess } from './fetchJobsSuccess'
import { fetchJobsError } from './fetchJobsError'
import {fetchNextPage} from './fetchNextPage'

const API_URL = "https://cors-anywhere.herokuapp.com/https://jobs.github.co/positions.json"
const FAKE_URL = "http://localhost:3000/jobs"


export const fetchJobs = ({page, params}) => { 
   const cancelToken1=axios.CancelToken.source()
   const cancelToken2=axios.CancelToken.source()
   return (dispatch) => {
     dispatch(fetchJobsLoading())
     axios.get(API_URL, { 
       cancelToken : cancelToken1.token,
       params : {markdown:true, page: page, ...params}}).then(res => {
       dispatch(fetchJobsSuccess(res.data))
     }).catch(e => {
       if(axios.isCancel(e)) return
       dispatch(fetchJobsError())
     })
     axios.get(API_URL, { 
      cancelToken : cancelToken2.token,
      params : {markdown:true, page: page+1, ...params}}).then(res => {
      dispatch(fetchNextPage(res.data.length!==0))
    }).catch(e => {
      if(axios.isCancel(e)) return
      dispatch(fetchJobsError())
    })

     return () => {
       cancelToken1.cancel()
       cancelToken2.cancel()
     }
   }
}