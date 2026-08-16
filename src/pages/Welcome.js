import { Link, Route, Routes, Outlet } from 'react-router-dom'

const Welcome = () => {
  return (
    <section>
      <h1>The Welcome Page</h1>
      <Link to='new-user'>New User</Link>
      {/* <Routes> */}
      {/* use relative or just next path only in react-route 6 for Links also and not start with '/'  */}
      {/*      <Route path='new-user' element={<p>Welcome, new user !</p>} /> */}
      {/* </Routes> */}

      {/* for nested route */}
      <Outlet />
    </section>
  )
}

export default Welcome
