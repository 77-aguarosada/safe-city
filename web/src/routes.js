
import {Route,Switch} from 'react-router-dom'

import PageHome from './pages/PageHome/index'
import SingIn from './pages/SingIn'
import SingOut from './pages/SingOut';
function Routes(){

  return (
         
    <Switch>
        <Route path="/home" exact component={PageHome} />
        <Route path="/" exact component={SingIn} />
        <Route path="/cadastrar" exact component={SingOut} />


    </Switch>
        

  );

}

export default Routes;