import React, { Component } from 'react'
import Aux from '../../hoc/Aux';

import classes from './Layout.css'; 

class Layout extends Component{
    render(){
        return(
            <Aux>
                <div>Toolbar / SideMenu / Logo</div>
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux>
        );
    }
}

export default Layout; 