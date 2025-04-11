import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

import { loadSets } from "../../../slices/sets/setsSlice";
import { addBasketEl } from "../../../slices/basket/basketSlice";


import IconsEditOrDelete from "../../adminRecurses/IconsEditOrDelete";


function Set() {
    const productType = 'set';


    // redux
    const dispatch = useDispatch();

    // Получаем массив сетов
    const sets = useSelector((state) => state.sets.sets);
    console.log(sets);

    // Массив корзины
    let basketArr = useSelector((state) => state.basket.basketArray.filter(basketEl => basketEl.productType == 'set')) || [];
    console.log(basketArr);
    if (basketArr.length == 0) {
        if (localStorage.getItem('basketArr') !== null){
            basketArr = JSON.parse(localStorage.getItem('basketArr')).filter(basketEl => basketEl.productType == 'set');
        }
    }


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
        dispatch(loadSets());
    }, [dispatch]);


    return (
        <div className="d-flex gap-5 p-5 flex-wrap justify-content-center">

            {
                    sets.map((set) => (
                        <div className="card" style={{ width: '22rem' }} key={set.id}>
                            {/* <img src="..." class="card-img-top" alt="..."/> */}
                            {/* Если админка */}
                            {userRole === 'admin' && (
                                <IconsEditOrDelete />
                            )}
                            <div>Тут Должна быть картинка</div>
                            <div className="card-body">
                                <h5 className="card-title">{set.title}</h5>
                                <p className="card-text">{set.description}</p>
                            </div>
                            <div className="card-body d-flex gap-5 align-items-end">
                                <div className="card-title  fw-bold">
                                    <span className="fs-2">{set.price}</span>
                                    <span className="fs-5">₽</span>
                                </div>
                                <div className="card-title fw-bold ">
                                    {
                                        basketArr.find(basketEl => basketEl.id == set.id) ? (
                                            <button type="button" className="btn btn-info fs-6" disabled>
                                                Уже в корзине
                                            </button>
                                        ) : (
                                            <button type="button" className="btn btn-info fs-6" onClick={() => dispatch(addBasketEl(set))}>
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

export default Set;