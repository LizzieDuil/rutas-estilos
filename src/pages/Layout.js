import { Outlet, Link } from "react-router-dom";
const Loyout =() => {
 return  <div>
     <nav>
         <ul>
            <li>
                 <button><Link to="/">Home</Link></button>
            </li>
            <li>
                 <button><Link to="/about">About</Link></button>
            </li>
            <li>
                <button><Link to="/dashboard">Dashboard</Link></button>
             </li>
             <li>
                <button><Link to="/logouts">Logouts</Link></button>
             </li>
            </ul>
        </nav>
        <hr/>
        <Outlet/>
    </div>;
}
export default Loyout;