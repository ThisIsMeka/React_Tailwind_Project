import React from 'react'

import { Link } from 'react-router-dom'
import Head from './head'

const Dashboard = () => {
  return (
    <div className=" hover:bg-teal-500  h-15 w-50 p-5 text-center">
      <Head title="Hello" />
      <div className="text-2xl underline" id="title">
        Dashboard
      </div>
      <Link to="/dashboard/profile/7b52fd9c-7bd2-4a43-b70c-29f72ad5e4a5">Go To Profile</Link>
      <br />
      <Link to="/dashboard/main">Go To Main</Link>
    </div>
  )
}

Dashboard.propTypes = {}

export default Dashboard
