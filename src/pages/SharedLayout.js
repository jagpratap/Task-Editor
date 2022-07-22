import { Link, Outlet } from 'react-router-dom'

const SharedLayout = () => {
    return (
        <main className='main'>
            <nav className='nav'>
                <img src="nav_logo.png" alt="" className='nav-logo' />
                <Link to="/" className='nav-link'>Home</Link>
                <Link to="tasklist" className='nav-link'>TaskList</Link>
            </nav>
            <div className='container'>
                <Outlet />
            </div>
        </main>
    )
}

export default SharedLayout