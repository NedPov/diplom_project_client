import { NavLink, useNavigate } from "react-router-dom";

import Basket from "./Components/Basket";
import Register from "./Components/Register";


function Menu() {

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary p-0 ">
                <div className="container-fluid bg-dark">
                    {/* лого */}
                    <div className="bg-white ms-5" style={{ width: '50px', height: '50px' }}>ЛОГО</div>

                    <div className="collapse navbar-collapse d-flex justify-content-center ">
                        <ul className="navbar-nav gap-4 fs-5 fw-bold">
                            <li className="nav-item ">
                                <NavLink className="nav-link text-white" to='/'>Главная</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link text-white" to='/sets'>Сеты</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link text-white" to='/sushi'>Суши</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link text-white" to='/rolls'>Роллы</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link text-white" to='/sauces'>Соусы</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link text-white" to='/drinks'>Напитки</NavLink>
                            </li>
                        </ul>
                    </div>
                    {/* Админка */}
                    <div className="me-5 p-2">
                        <button className="btn btn-outline-warning">
                            <NavLink className="nav-link" to='/adminPanel'> Админская панель</NavLink>
                        </button>
                    </div>
                    {/* Корзина */}
                    <Basket />
                    {/* Регистрация */}
                    <Register />
                </div>
            </nav>
        </>
    )

};

export default Menu;