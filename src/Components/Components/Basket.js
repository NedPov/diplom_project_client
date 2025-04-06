import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";


import { FaBasketShopping } from "react-icons/fa6";
import { useEffect } from "react";

function Basket() {


    // Массив продукции
    let basketArr = useSelector((state) => state.basket.basketArray);

    if (basketArr.length == 0) {
        basketArr = JSON.parse(localStorage.getItem('basketArr'));
    }
    console.log(basketArr);


    let basketSum = 0;

    // if (basketArr) {
    //     basketArr.forEach(el => {
    //         basketSum += el.price;

    //     });
    //     console.log(basketSum);
    // }


    return (
        <div className="navbar">
            <ul className="nav fw-bold">
                <li className="nav-item ">
                    <NavLink className="nav-link text-white" to='/basket'>
                        <button className="btn btn-outline-danger  btn-lg">
                            <span><FaBasketShopping /></span>
                            <span>{basketSum}</span>
                            <span>₽</span>
                        </button>
                    </NavLink>
                </li>
            </ul>
        </div>
    )
};

export default Basket;

