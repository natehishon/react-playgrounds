import React from 'react';
import PropTypes from 'prop-types';
import {AppBar, Toolbar, useScrollTrigger} from "@material-ui/core";


function ElevationScroll(props) {
    const {children} = props;

    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
    });

    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
    });
}


const Header = (props) => {

    return (
        <ElevationScroll>
            <AppBar>
                <Toolbar>
                    Nate's Site
                </Toolbar>
            </AppBar>
        </ElevationScroll>
    );
};

export default Header;
