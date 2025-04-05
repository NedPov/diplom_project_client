import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { logoutUser } from "../slices/authenticate/authenticateSlice";

import logo from '../images/cDttXgSOVH8.png'

import Basket from "./Components/Basket";


function Menu() {

    // redux
    const dispatch = useDispatch();
    const navigate = useNavigate();


    // проверка аутентификации пользователя 
    const isAuthenticated = useSelector((state) => state.authenticate.isAuthenticated);

    // получаем пользователя
    const user = useSelector((state) => state.authenticate.user);


    // По-дефолту будет user
    let userRole = 'user';
    // если пользователь определен, то ставим роль, которую он имеет
    if (user) {
        userRole = user.role;
    }


    // Метод выхода
    const handleLogout = () => {
        dispatch(logoutUser());
        navigate('/login');
    };


    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary p-0 ">
                <div className="container-fluid bg-dark">
                    {/* лого */}
                    <div className="bg-dark ms-5">
                        <img src={logo} alt="" style={{ width: '50px', height: '50px' }} />
                    </div>

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
                    {userRole === 'admin' && (
                        <div className="me-5 p-2 ">
                            <button className="btn btn-outline-warning m-1">
                                <NavLink className="nav-link" to='/adminPanel'>Админская панель</NavLink>
                            </button>
                            <button className="btn btn-outline-warning">
                                <NavLink className="nav-link" to='/orders'>Заказы</NavLink>
                            </button>
                        </div>
                    )}
                    {/* Корзина */}
                    <Basket />
                    {/* Регистрация */}
                    {isAuthenticated === true ? (
                        <li className="nav-item dropdown ms-auto">
                            <button className="btn btn-dark dropdown-toggle" data-bs-toggle='dropdown' aria-expanded='false'>
                                {user.username}
                            </button>
                            <ul className="dropdown-menu dropdown-menu-dark">
                                <li><button className="dropdown-item" onClick={handleLogout}>Выйти</button></li>
                            </ul>
                        </li>
                    ) : (
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
                    )}

                </div>
            </nav>
        </>
    )

};

export default Menu;