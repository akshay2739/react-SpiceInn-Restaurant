import React from 'react';
import { useRouteMatch,  Switch, Route, BrowserRouter, useLocation, withRouter } from 'react-router-dom';
import MenuHeader from './MenuHeader';
import Appetizers from './types/Appetizers'
import Breads from './types/Breads'
import Desserts from './types/Desserts'
import Drinks from './types/Drinks'
import LunchCombos from './types/LunchCombos'
import Mains from './types/Mains'
import RiceCombos from './types/RiceCombo'
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import './Menu.css'

const Menu = () => {
    let  {path} = useRouteMatch()
    let location = useLocation()
    
    return (
            <div>
                <div className="page-name">
                  <p>Menu</p>
                </div>
                <MenuHeader />
                <AnimatedSwitch path={path} />
            </div>
     
    );
}

export default Menu;

const AnimatedSwitch = withRouter(({ location , path}) => (
    <TransitionGroup>
      <CSSTransition key={location.key} classNames="slide" timeout={1000}>
        <Switch location={location}>
                        <Route  exact path={path+'/mains'} component={Mains} />
                        <Route  exact path={path+'/appetizers'} component={Appetizers} />
                        <Route  exact path={path+'/breads'} component={Breads} />
                        <Route  exact path={path+'/desserts'} component={Desserts} />
                        <Route  exact path={path+'/drinks'} component={Drinks} />
                        <Route  exact path={path+'/lunchcombos'} component={LunchCombos} />
                        <Route  exact path={path+'/ricecombos'} component={RiceCombos} />
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  ));

