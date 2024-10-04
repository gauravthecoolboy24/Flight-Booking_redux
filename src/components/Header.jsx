
import { TbPlaneInflight } from "react-icons/tb";

const Header = () => {
    return (
        <div>
            <header className='w-full p-4 bg-slate-100'>
                <nav className='flex items-center justify-between max-w-6xl mx-auto'>
                    <a href="/" className='text-lg font-bold flex items-center'><TbPlaneInflight className='text-3xl mr-2 text-indigo-600'/>Travel Logo</a>
                    <button className='bg-indigo-600 text-white px-6 py-2 rounded font-medium'>Login</button>
                </nav>
            </header>
        </div>
    )
}

export default Header
