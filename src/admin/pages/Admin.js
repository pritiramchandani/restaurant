// @flow 
import * as React from 'react';
import { Outlet } from 'react-router-dom';

export const Admin = (props) => {
    return (
        <div>
            <Outlet></Outlet>
        </div>
    );
};