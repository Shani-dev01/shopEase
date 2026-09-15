import { Link, NavLink } from "react-router-dom";

function Navbar (){
    
    return(
        <>
        
        <header className="sticky top-0 z-50 w-full h-18  bg-gray-400
                flex items-center justify-center shadow-lg p-8  " >
            <div className="h-full w-full flex items-center justify-self-start " >
                <Link to="/" className="text-2xl font-bold text-gray-700 tracking-tight">
                Shop<span className="text-white text-2xl">Ease</span>
                </Link>
            </div>
            <div className="w-6xl h-full flex items-center justify-around " >
                <ul className="w-2xl h-full flex items-center justify-around text-white font-light text-lg " >
                    <li className="hover:text-gray-800 transition-all 0.3s ease-in-out" >
                        <NavLink to="/">
                            Home
                        </NavLink>
                    </li>
                    <li className="hover:text-gray-800 transition-all 0.3s ease-in-out" >
                        <NavLink to="/Product">
                            Product
                        </NavLink>
                    </li>
                    <li className="hover:text-gray-800 transition-all 0.3s ease-in-out" >
                        <NavLink to="/About">
                            About
                        </NavLink>
                    </li>
                    <li className="hover:text-gray-800 transition-all 0.3s ease-in-out" >
                        <NavLink to="/Cart">
                            Cart
                        </NavLink>
                    </li>
                </ul>
            </div>
        </header>
        </>
    )
}
export default Navbar;