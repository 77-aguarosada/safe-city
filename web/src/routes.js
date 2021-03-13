
import {Route,Switch} from 'react-router-dom'
import Home from './pages/Home';

import PageHome from './pages/PageHome/index'
import SingIn from './pages/SingIn'
import SingOut from './pages/SingOut';
function Routes(){

  return (
         
    <Switch>
        <Route path="/homee" exact component={PageHome} />
        <Route path="/" exact component={SingIn} />
        <Route path="/cadastrar" exact component={SingOut} />
        <Route path="/home" exact component={Home} />


    </Switch>
        

  );

}

export default Routes;