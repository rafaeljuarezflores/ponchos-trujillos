import '../styles/NavBar.scss'
import { Link } from 'react-router-dom';

function NavBar(){
    return(
        <div className='NavBar'>
            <Link id='nombre' to='/'>PONCHOS TRUJILLO</Link>
            <div className='items'>
                <Link to='/Men' id='link'>Men</Link>
                <Link to='/Women' id='link'>Women</Link>
            </div>
        </div>
    )
}

export default NavBar;