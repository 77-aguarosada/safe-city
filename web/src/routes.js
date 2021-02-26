
import {Route,Switch} from 'react-router-dom'

import PageHome from './pages/PageHome/index'
function Routes(){

  return (
         
    <Switch>
        <Route path="/" exact component={PageHome} />


    </Switch>
        

  );

}

export default Routes;