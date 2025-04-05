import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

import { loadDrinks } from "../../../slices/drinks/drinksSlice";
import { addBasketEl } from "../../../slices/basket/basketSlice";

import IconsEditOrDelete from "../../adminRecurses/IconsEditOrDelete";


function Drink() {

    // redux
    const dispatch = useDispatch();

    // Массив напитков
    const drinks = useSelector((state) => state.drinks.drinks);
    console.log(drinks);


    // получаем пользователя
    const user = useSelector((state) => state.authenticate.user);

    // По-дефолту будет user
    let userRole = 'user';
    // если пользователь определен, то ставим роль, которую он имеет
    if (user) {
        userRole = user.role;
    }


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
                            <IconsEditOrDelete />
                        )}
                        {/* <img src="..." class="card-img-top" alt="..."/> */}
                        <div>Тут Должна быть картинка</div>
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
                                <button type="button" className="btn btn-info fs-6" onClick={() => dispatch(addBasketEl(drink))}>
                                    Добавить в корзину
                                </button>
                            </div>
                        </div>
                    </div>
                ))
            }

        </div>
    )
};

export default Drink;