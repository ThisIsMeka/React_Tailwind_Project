import React from 'react'
import { Route } from 'react-router-dom'
import Header from './header'
import Dashboard from './dashboard'
import Profile from './profile'
import Main from './main'

const Home = () => {
  return (
    <div>
      <Header />
      <div className="flex items-center bg-teal-100 justify-center h-screen">
        <div className=" cursor-text bg-teal-400 box-border-200 text-center text-center text-white font-normal rounded-lg border shadow-lg p-7">
          <div>
            <Route exact path="/dashboard" component={Dashboard} />
          </div>
          <div>
            <Route exact path="/dashboard/main" component={() => <Main />} />
          </div>
          <div>
            <Route exact path="/dashboard/profile/:user">
              <Profile />
            </Route>
          </div>
        </div>
      </div>
    </div>
  )
}

Home.propTypes = {}

export default React.memo(Home)
