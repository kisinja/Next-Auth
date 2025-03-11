import { auth, currentUser } from '@clerk/nextjs/server'
import React from 'react'

const Dashboard = async () => {

    const { userId } = await auth();
    const user = await currentUser();
    console.log(user);

    if (!userId) {
        return <div>You are not logged in!</div>
    }

    return (
        <div className='mt-10 t'>
            <h1 className="font-bold text-center mt-10">Dashboard page</h1>
        </div>
    )
}

export default Dashboard
