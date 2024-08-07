import React, { useEffect, useState } from 'react';

import Loading from '../layouts/Loading';
import UserItem from '../users/UserItem';

function UserResults() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true); // Initialize as boolean

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            const response = await fetch(`${process.env.REACT_APP_GITHUB_URL}/users`, {
                headers: {
                    Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`
                }
            });
            const data = await response.json();
            setUsers(data);
        } catch (error) {
            console.error("Error fetching users:", error);
        } finally {
            setLoading(false);
        }
    };

    if (!loading) {
       
    

    return (
        <div className='grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2'>
            {users.map((user) => (
               <UserItem  key={user.id} user={user}/> // Added key prop
            ))}
        </div>
    );
}else{
    return  <div className='flex items-center justify-center h-full w-full'>

        <Loading/>
    </div>
}
}

export default UserResults;
