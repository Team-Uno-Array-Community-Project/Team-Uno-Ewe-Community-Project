import React from 'react';
import { MenuItemLink } from 'react-admin';
// import PostIcon from 'material-ui/svg-icons';
// import FooIcon from 'material-ui/svg-icons/action/code';

export default ({ resources, onMenuTap, logout }) => (
    <div>
        <MenuItemLink to="/post" primaryText="Posts" onTouchTap={onMenuTap}/>
        {/* <MenuItemLink to="/foo" primaryText="Foo" onTouchTap={onMenuTap} leftIcon={<FooIcon/>}/> */}
        {logout}
    </div>
);