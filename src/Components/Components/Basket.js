import { NavLink} from "react-router-dom";


import { FaBasketShopping } from "react-icons/fa6";

function Basket() {


    return (
        <div className="navbar">
            <ul className="nav fw-bold">
                <li className="nav-item ">
                    <NavLink className="nav-link text-white" to='/basket'>
                        <button className="btn btn-outline-danger  btn-lg">
                            <FaBasketShopping /> 507p
                        </button>
                    </NavLink>
                </li>
            </ul>
        </div>
    )
};

export default Basket;

