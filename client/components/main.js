import React from 'react'

import { Link } from 'react-router-dom'
import Head from './head'

const Main = () => {
  return (
    <div className=" hover:bg-teal-500 h-15 w-50 p-5 text-center">
      <Head title="Hello" />
      <div className="text-2xl underline text-center" id="title">
        {' '}
        Main{' '}
      </div>
      <Link to="/dashboard/profile/7ffsg-8trhfg-54bhhg-b70c-egfjiykjvF ">Go To Profile</Link>
      <br />
      <Link to="/dashboard">Go To Dashboard</Link>
    </div>
  )
}

Main.propTypes = {}

export default Main
