import { NavLink } from "react-router-dom";
import { Header } from "../components/header/Header"; 
import { Footer } from "../components/footer/Footer"; 
 
export function FirstPage(){ 
    return ( 
        <div> 
            <Header /> 
            <nav>
                <NavLink to="/memory" className={({isActive}) => (isActive ? 'link link--active':'link')}>Начать игру</NavLink>
            </nav>
            <Footer /> 
        </div> 
    ); 
}