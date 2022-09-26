import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { useAuth } from '@redwoodjs/auth'
import { useState, useEffect } from 'react'

const HomePage = () => {
  const [loggedIn, setLoggedIn] = useState(false)
  const { isAuthenticated, currentUser, logIn, logOut } = useAuth()

  console.log(currentUser)

  return (
    <>
      <MetaTags title="Home" description="Home page" />

      <h1>HomePage</h1>
      <p>
        Find me in <code>./web/src/pages/HomePage/HomePage.js</code>
      </p>
      <p>
        My default route is named <code>home</code>, link to me with `
        <Link to={routes.home()}>Home</Link>`<br />
        <span>Is the user logged in? {isAuthenticated.toString()}</span><br />
      </p>
      <div>
          {isAuthenticated ? (
            <div>
              <span>Logged in as {currentUser.email}</span>{' '}<br />
              <button type="button" onClick={logOut}>
                Logout
              </button>
            </div>
          ) : (
            <>
              <Link to={routes.login()}>Login</Link>
              <Link to={routes.login()}>
                <button>Login</button>
              </Link>
            </>
          )}
        </div>
    </>
  )
}

export default HomePage
