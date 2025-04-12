import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";


import { loadRolls } from "../../../slices/rols/rollsSlice";
import { addBasketEl } from "../../../slices/basket/basketSlice";

import IconsEditOrDelete from "../../adminRecurses/IconsEditOrDelete";


function Roll() {

    // redux
    const dispatch = useDispatch();

    // Получаем массив роллов
    const rolls = useSelector((state) => state.rolls.rolls);
    console.log(rolls);

    // Массив корзины
    let basketArr = useSelector((state) => state.basket.basketArray.filter(basketEl => basketEl.productType == 'roll')) || [];
    console.log(basketArr);
    if (basketArr.length == 0) {
        if (localStorage.getItem('basketArr') !== null) {
            basketArr = JSON.parse(localStorage.getItem('basketArr')).filter(basketEl => basketEl.productType == 'roll');
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
        dispatch(loadRolls());
    }, [dispatch]);


    return (
        <div className="d-flex gap-5 p-5 flex-wrap justify-content-center">

            {
                rolls.map((roll) => (
                    <div className="card position-relative" style={{ width: '22rem' }} key={roll.id} >
                        {/* Если админка */}
                        {userRole === 'admin' && (
                            <IconsEditOrDelete id={roll.id}/>
                        )}
                        <img src={`http://localhost:9875/${roll.fileData}`} className="card-img-top" alt="..."/>
                        <div>Тут Должна быть картинка</div>
                        <div className="card-body">
                            <h5 className="card-title">{roll.title}</h5>
                            <p className="card-text">{roll.description}</p>
                        </div>
                        <div className="card-body d-flex gap-5 align-items-end">
                            <div className="card-title  fw-bold">
                                <span className="fs-2">{roll.price}</span>
                                <span className="fs-5">₽</span>
                            </div>
                            <div className="card-title fw-bold ">
                                {
                                    basketArr.find(basketEl => basketEl.id == roll.id) ? (
                                        <button type="button" className="btn btn-info fs-6" disabled>
                                            Уже в корзине
                                        </button>
                                    ) : (
                                        <button type="button" className="btn btn-info fs-6" onClick={() => dispatch(addBasketEl(roll))}>
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

export default Roll;