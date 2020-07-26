import React from 'react'
import {connect} from 'react-redux'
import { Container } from 'react-bootstrap'
import { fetchJobs } from '../actions/fetchJobs' 
import { useEffect,useState } from 'react'
import Job from './Job'
import SearchBar from './SearchBar'
import JobsPagination from './JobsPagination'

    
const GitHubJobs = ( {loading, error, jobs, fetchJobs, hasNextPage }) => {
    
    const [params, setParams] = useState({})
    const [page, setPage] = useState(1)
  
    function handleParamChange(e) {
      const param = e.target.name
      const value = e.target.value
      setPage(1)
      setParams(prevParams => {
        return { ...prevParams, [param]: value }
      })
    }
    useEffect(()=>{
           fetchJobs(page, params) 
    },[page, params])
    return (
        <Container className = "my-4">
            <h1 className = "mb-4">GitHub Jobs</h1>
            <SearchBar params={params} onParamChange={handleParamChange} />
            <JobsPagination page={page} setPage={setPage} hasNextPage={hasNextPage} />
            { loading && <h1> Loading... </h1>}
            { error && <h1> error.. </h1>}
            {
                jobs.map( job => {
                    return <Job key = {job.id} job = {job}></Job>
                })
            }
            <JobsPagination page={page} setPage={setPage} hasNextPage={hasNextPage} />
        </Container>
    )
}


const mapStateToProps = (state) => {
    return{
        loading : state.loading,
        error : state.error,
        jobs : state.jobs,
        hasNextPage : state.hasNextPage
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
         fetchJobs : (page, params) => dispatch(fetchJobs(page, params))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(GitHubJobs)
