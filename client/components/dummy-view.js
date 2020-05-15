import React from 'react'

import { Link } from 'react-router-dom'
import Head from './head'

const Dummy = () => {
  return (
    <div>
      <Head title="Hello" />
      <div className="flex items-center bg-teal-100 justify-center h-screen">
        <div className=" hover:bg-teal-500 bg-teal-400 content-center text-white font-bold rounded-full border shadow-lg p-10">
          <div>
            <Link to="/dashboard">Go To Dashboard</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

Dummy.propTypes = {}

export default Dummy
