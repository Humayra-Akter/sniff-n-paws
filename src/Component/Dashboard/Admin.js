import React, { useEffect, useState } from 'react';
import AdminUser from './AdminUser';

const Admin = () => {
    const [users, setUsers] = useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=>res.json())
        .then(data=> {
            setUsers(data);
        })
    },[])
    return (
        <div className='pt-40 pb-56'>
            <div class="overflow-x-auto">
            <table class="table">
                <thead>
                <tr>
                    <th></th>
                    <th>name</th>
                    <th>Job</th>
                    <th>Favorite Color</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th>1</th>
                    <td>{users.man}</td>
                    <td>{
                        users.map(user =><AdminUser></AdminUser>)
                    }</td>
                    <td>Blue</td>
                </tr>
                </tbody>
            </table>
            </div>
        </div>
    );
};

export default Admin;