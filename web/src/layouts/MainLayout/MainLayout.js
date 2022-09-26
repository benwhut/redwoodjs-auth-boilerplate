import { Link, routes } from "@redwoodjs/router"

const MainLayout = ({ children }) => {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <Link to={routes.home()}>Home</Link>
            </li>
            <li>
              <Link to={routes.about()}>About</Link>
            </li>
            <li>
              <Link to={routes.contact()}>Contact</Link>
            </li>
            <li>
              <Link to={routes.login()}>Login</Link>
            </li>
            <li>
              <Link to={routes.signup()}>Sign Up</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
      <footer>
        <nav>
            <ul>
              <li>
                <Link to={routes.home()}>Home</Link>
              </li>
              <li>
                <Link to={routes.about()}>About</Link>
              </li>
              <li>
                <Link to={routes.contact()}>Contact</Link>
              </li>
            </ul>
          </nav>
      </footer>
    </>
  )
}

export default MainLayout
