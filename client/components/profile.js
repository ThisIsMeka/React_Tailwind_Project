import React from 'react'
import { Link, useParams } from 'react-router-dom'
import Head from './head'

const Profile = () => {
  const { user } = useParams()
  return (
    <div className="hover:bg-teal-500  h-15 w-40 text-center">
      <Head title="Hello" />
      <div className=" text-2xl underline text-center" id="title">
        Profile
      </div>
      <Link to="/dashboard">Go To Dashboard</Link>
      <br />
      <Link to="/dashboard/main">Go To Main</Link>
      <br />
      <div className="text-xs" id="username">{user}</div>
    </div>
  )
}

Profile.propTypes = {}

export default Profile
