import React, { Component } from 'react'; 
import Aux from '../../hoc/Aux'; 
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import classes from './Layout.css'; 

class Layout extends Component{

    state = {
        showSideDrawer: true, 
    }

    sideDrawerClosedHandler = () => {
        this.setState({showSideDrawer: false}); 
    }

    sideDrawerOpenHandler = () => {
        this.setState({ showSideDrawer: true });
    }

    render(){
        return (
            <Aux>
                <Toolbar openSideDrawer={this.sideDrawerOpenHandler} />
                <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerClosedHandler} />
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux>
        ); 
    }
}

export default Layout;