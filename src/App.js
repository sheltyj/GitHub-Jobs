import React from 'react';
import GitHubJobs from './components/GitHubJobs'
import {store} from './redux store/store'
import {Provider} from 'react-redux'


const App=()=> {
   
  return (
    <Provider store = {store}>
        <GitHubJobs/>
    </Provider>
    
  );
}

export default App;
