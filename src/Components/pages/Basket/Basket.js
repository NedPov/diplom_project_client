import { RiDeleteBin6Line } from "react-icons/ri";

import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import BasketPopUp from "../../Components/BasketPopUp";


import { deleteBasketEl } from "../../../slices/basket/basketSlice";
import { decreaseBasketEl } from "../../../slices/basket/basketSlice";
import { increaseBasketEl } from "../../../slices/basket/basketSlice";



function Basket() {

    const user = JSON.parse(localStorage.getItem('user'));
    const isAuthenticated = !!user; //приводим к boolean
    console.log(isAuthenticated)



    // redux
    const dispatch = useDispatch();
    const navigate = useNavigate();



    // Массив продукции
    let basketArr = useSelector((state) => state.basket.basketArray);
    if (basketArr.length == 0) {
        basketArr = JSON.parse(localStorage.getItem('basketArr'));
    }
    console.log(basketArr);


    let basketSum = 0;
    if (basketArr) {
        basketArr.forEach(el => {
            basketSum += el.price * el.quantity;

        });
        console.log(basketSum);
    }


    return (
        <div className="container">
            <h1 className="text-center">Корзина</h1>
            <ol className=" list-group list-group-numbered">


                {
                    (basketArr ? (
                        basketArr.map((basketEl) => (
                            <li className="list-group-item row d-flex my-1 border border-info border-2 rounded">

                                {/* <img src="..." class="card-img-top col" alt="..." /> */}
                                <div className="col-3">Тут Должна быть картинка</div>

                                <div className="col-4">
                                    <div className="fw-bold">{basketEl.title}</div>
                                    <span>{basketEl.description}</span>
                                </div>

                                <div className="col-2">
                                    <span className="fs-2">{basketEl.price * basketEl.quantity}</span>
                                    <span className="fs-5 ms-1">₽</span>
                                </div>

                                <div className="col-2 d-flex align-items-center">
                                    <button className="btn btn-outline-danger" onClick={() => dispatch(decreaseBasketEl(basketEl.id))}>-</button>
                                    <span className='text-center pt-2' style={{ width: "32px", height: "41px" }}>{basketEl.quantity}</span>
                                    <button className="btn btn-outline-success" onClick={() => dispatch(increaseBasketEl(basketEl.id))}>+</button>
                                </div>

                                <div className="col d-flex align-items-center">
                                    <button className="btn btn-danger btn-md" onClick={() => dispatch(deleteBasketEl(basketEl.id))}>
                                        <RiDeleteBin6Line />
                                    </button>
                                </div>
                            </li>
                        ))
                    ) : (
                        <>
                            <h2 className="fw-bold text-center m-5">В корзине пока нет товаров</h2>
                            <div className="d-flex justify-content-center">
                                <button className="btn btn-outline-primary col-6" onClick={() => navigate('/sets')}>Перейти в меню</button>
                            </div>
                        </>
                    ))
                }

            </ol>
            {
                (basketArr && (
                    <>
                        <div className="d-flex justify-content-end fs-1">
                            <span>Итого: {basketSum} ₽</span>
                        </div>
                        <div className="row justify-content-center mt-3">
                            {
                                isAuthenticated ? (
                                    <button className="btn btn-info btn-lg border-dark border-2 col-6" data-bs-toggle="modal" data-bs-target="#registrationModal">
                                        Оформить заказ
                                    </button>
                                ) : (
                                    <button className="btn btn-info btn-lg border-dark border-2 col-6" disabled>
                                        Чтобы оформить заказ, Вам необходимо зарегистрироваться
                                    </button>
                                )
                            }

                        </div>

                        {/* Модалка для ввода данных */}
                        <BasketPopUp basketArr={basketArr} user_id={user.id} />
                    </>
                ))
            }

        </div>
    )
};


export default Basket;




