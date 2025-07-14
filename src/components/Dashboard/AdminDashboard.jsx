// import React from 'react'
import Header from '../other/Header'
import CreateTask from '../other/CreateTask'
import AllTask from '../other/AllTask'

const AdminDashboard = (props) => {
  return (
    <div className='h-screen w-full bg-red-200 items-start p-10'>
      <Header changeUser={props.changeUser} />
      <CreateTask />
      <AllTask />
      

    </div>
  )
}

export default AdminDashboard