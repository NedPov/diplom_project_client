import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

import { loadDrinks, deleteFetchDrinks } from "../../../slices/drinks/drinksSlice";
import { addBasketEl } from "../../../slices/basket/basketSlice";


import { RiDeleteBin6Line } from "react-icons/ri";




function Drink() {

    // redux
    const dispatch = useDispatch();


    // ОТОБРАЖЕНИЕ ЭЛЕМЕНТОВ
    // ==================================
    // получаем пользователя
    const user = useSelector((state) => state.authenticate.user);
    // По-дефолту будет user
    let userRole = 'user';
    // если пользователь определен, то ставим роль, которую он имеет
    if (user) { userRole = user.role; }
    // ==================================


    // Массив напитков
    const drinks = useSelector((state) => state.drinks.drinks);
    console.log(drinks);

    // Массив корзины
    let basketArr = useSelector((state) => state.basket.basketArray.filter(basketEl => basketEl.productType == 'drinks'));
    if (basketArr.length == 0) {
        if (localStorage.getItem('basketArr') !== null) {
            basketArr = JSON.parse(localStorage.getItem('basketArr')).filter(basketEl => basketEl.productType == 'drinks');
        }
    }
    console.log(basketArr);


    // Запрос на загрузку продукции
    useEffect(() => {
        dispatch(loadDrinks());
    }, [dispatch]);


    return (
        <div className="d-flex gap-5 p-5 flex-wrap justify-content-center">

            {
                drinks.map((drink) => (
                    <div className="card" style={{ width: '22rem' }} key={drink.id}>
                        {/* Если админка */}
                        {userRole === 'admin' && (
                            <div className="container d-flex gap-3 justify-content-end position-absolute bottom-100 start-0 ">
                                <button className="btn btn-outline-danger btn-sm" onClick={() => dispatch(deleteFetchDrinks(drink.id))}>
                                    <RiDeleteBin6Line />
                                </button>
                            </div>
                        )}
                        <img src={`http://localhost:9875/${drink.fileData}`} className="card-img-top" alt="..." style={{height: '18rem'}}/>
                        <div className="card-body">
                            <h5 className="card-title">{drink.title}</h5>
                            <p className="card-text">{drink.description}</p>
                        </div>
                        <div className="card-body d-flex gap-5 align-items-end">
                            <div className="card-title  fw-bold">
                                <span className="fs-2">{drink.price}</span>
                                <span className="fs-5">₽</span>
                            </div>
                            <div className="card-title fw-bold ">
                                {
                                    basketArr.find(basketEl => basketEl.id == drink.id) ? (
                                        <button type="button" className="btn btn-info fs-6" disabled>
                                            Уже в корзине
                                        </button>
                                    ) : (
                                        <button type="button" className="btn btn-info fs-6" onClick={() => dispatch(addBasketEl(drink))}>
                                            Добавить в корзину
                                        </button>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
};

export default Drink;