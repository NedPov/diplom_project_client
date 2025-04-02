import { NavLink } from "react-router-dom";



function Register() {


    return (
        <div className="navbar">
            <ul className="nav fw-bold">
                <li className="nav-item ">
                    <NavLink className="nav-link text-white" to='/login'>Вход</NavLink>
                </li>
                <li className="nav-item ">
                    <NavLink className="nav-link text-white" to='/register'>Регистрация</NavLink>
                </li>
            </ul>
        </div>
    )
};

export default Register;