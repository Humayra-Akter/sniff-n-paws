import React from 'react';
import Admin from './Admin';
import Staff from './Staff';
import Vet from './Vet';
import Customer from './Customer';
import Animal from './Animal';
import Rescuer from './Rescuer';

const Dashboard = () => {
    return (
        <div>
            <Admin></Admin>
            <Staff></Staff>
            <Vet></Vet>
            <Customer></Customer>
            <Animal></Animal>
            <Rescuer></Rescuer>
        </div>
    );
};

export default Dashboard;