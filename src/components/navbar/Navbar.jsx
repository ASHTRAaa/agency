import './navbar.css';
import { NavLink } from 'react-router-dom';
const Navbar = ()=>{
     return (
       <div className="nav">
         <div className="compName">
           <h1>AgENCY</h1>
         </div>
         <nav className="navbar">
           <NavLink
             to="/" 
             end
             className={({ isActive }) =>
               isActive ? "nav-link active" : "navlink"
             }
           >
             Home
           </NavLink>
           <NavLink
             to="/about-us"
             className={({ isActive }) =>
               isActive ? "nav-link active" : "navlink"
             }
           >
             About Us
           </NavLink>
           <NavLink to="/services">Services</NavLink>
           <NavLink to="/our-work">Our Work</NavLink>
           <NavLink to="/contact-us">Contact Us</NavLink>
         </nav>
         <div className="button">
           <button className="cta-btn">COST YOUR PROJECT</button>
         </div>
       </div>
     );
}

export default Navbar;