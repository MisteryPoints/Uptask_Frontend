import { Outlet, Navigate } from 'react-router-dom'
import useAuth from '../hooks/useAuth'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'

const SecureRoute = () => {
    const { auth, loading } = useAuth() 
    if(loading) return (
        <button type="button" className="bg-red-600 inline-flex items-center px-4 py-2 font-semibold leading-6 text-sm shadow rounded-md text-white   hover:bg-red-400 transition ease-in-out duration-150 cursor-not-allowed" disabled>
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"> 
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Cargando...
        </button>
    )
    return (
        <>
            {auth._id ? (
                <div className='bg-sky-100  mb-[0.5rem]'>
                    <Header/>
                    <div className='md:flex md:min-h-screen'>
                        <Sidebar/>
                        <main className='p-10 flex-1'>
                            <Outlet/>
                        </main>
                    </div>
                    
                </div>
            ) : <Navigate to='/'/> }
        </>
    )
}

export default SecureRoute