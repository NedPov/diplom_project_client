import { RiDeleteBin6Line } from "react-icons/ri";

import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";


import { deleteBasketEl } from "../../../slices/basket/basketSlice";
import { decreaseBasketEl } from "../../../slices/basket/basketSlice";



function Basket() {

    // redux
    const dispatch = useDispatch();



    // Массив продукции
    let basketArr = useSelector((state) => state.basket.basketArray);
    if (basketArr.length == 0) {
        basketArr = JSON.parse(localStorage.getItem('basketArr'));
    }
    console.log(basketArr);


    return (
        <>
            <h1>Basket</h1>
            <div className="d-flex gap-5 p-5 flex-wrap justify-content-center">

                {
                    (basketArr && (
                        basketArr.map((basketEl) => (
                            <div className="card" style={{ width: '22rem' }} key={basketEl.id}>
                                <div className="container d-flex gap-3 justify-content-end position-absolute bottom-100 start-0 ">
                                    <button className="btn btn-outline-danger btn-sm" onClick={() => dispatch(deleteBasketEl(basketEl.id))}>
                                        <RiDeleteBin6Line />
                                    </button>
                                </div>
                                {/* <img src="..." class="card-img-top" alt="..."/> */}
                                <div>Тут Должна быть картинка</div>
                                <div className="card-body">
                                    <h5 className="card-title">{basketEl.title}</h5>
                                    <p className="card-text">{basketEl.description}</p>
                                </div>
                                <div className="card-body d-flex gap-5 align-items-end">
                                    <div className="card-title  fw-bold">
                                        <span className="fs-2">{basketEl.price * basketEl.quantity}</span>
                                        <span className="fs-5">₽</span>
                                    </div>
                                    <div className="card-title  fw-bold">
                                        <button className="fs-2" onClick={() => dispatch(decreaseBasketEl(basketEl.id))}>-</button>
                                        <span className="fs-2 mx-3">{basketEl.quantity}</span>
                                        <button className="fs-2" onClick={() => dispatch(deleteBasketEl(basketEl.id))}>+</button>
                                    </div>
                                </div>
                            </div>
                        ))
                    ))
                }
            </div>
        </>
    )
};


export default Basket;




