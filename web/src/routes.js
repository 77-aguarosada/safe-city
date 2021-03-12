
import {Route,Switch} from 'react-router-dom'

import PageHome from './pages/PageHome/index'
import SingIn from './pages/SingIn'
function Routes(){

  return (
         
    <Switch>
        <Route path="/home" exact component={PageHome} />
        <Route path="/" exact component={SingIn} />


    </Switch>
        

  );

}

export default Routes;