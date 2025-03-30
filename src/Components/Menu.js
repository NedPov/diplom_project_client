import { NavLink, useNavigate } from "react-router-dom";



function Menu() {

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary p-0 ">
                <div className="container-fluid bg-dark">
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
                </div>
            </nav>
        </>
    )

};

export default Menu;