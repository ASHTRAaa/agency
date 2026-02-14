import './navbar.css';
import { NavLink } from 'react-router-dom';
const Navbar = ()=>{
     return (
       <div className="nav">
         <div className="compName">
           <h1>AgENCY</h1>
         </div>
         <nav className="navbar">
           <NavLink to="/" className={({isActive})=> isActive? "nav-link active":"navbar a" }>Home</NavLink>
           <NavLink to="/">About Us</NavLink>
           <NavLink to="/">Services</NavLink>
           <NavLink to="/">Our Work</NavLink>
           <NavLink to="/">Contact Us</NavLink>
         </nav>
         <div className="button">
           <button className='cta-btn'>COST YOUR PROJECT</button>
         </div>
       </div>
     );
}

export default Navbar;