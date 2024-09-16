import * as React from "react"
// import { Link } from "gatsby"
import Header from './header';
import Footer from './footer';
import { useLocation } from '@reach/router';

const Layout = ({title, children }) => {
  const location = useLocation();
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  // let header

  // if (isRootPath) {
  //   header = (
  //     <h1 className="main-heading">
  //       <Link to="/">{title}</Link>
  //     </h1>
  //   )
  // } else {
  //   header = (
  //     <Link className="header-link-home" to="/">
  //       {title}
  //     </Link>
  //   )
  // }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <Header/>
      <main>{children}</main>
      <Footer/>
    </div>
  )
}

export default Layout
