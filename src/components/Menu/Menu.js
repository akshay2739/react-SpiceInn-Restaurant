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
                        <Route  path={path+'/appetizers'} component={Appetizers} />
                        <Route  path={path+'/breads'} component={Breads} />
                        <Route  path={path+'/desserts'} component={Desserts} />
                        <Route  path={path+'/drinks'} component={Drinks} />
                        <Route  path={path+'/lunchcombos'} component={LunchCombos} />
                        <Route  path={path+'/ricecombos'} component={RiceCombos} />
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  ));

