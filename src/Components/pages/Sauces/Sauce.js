import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

import { loadSauces } from "../../../slices/sauces/saucesSlice";
import { addBasketEl } from "../../../slices/basket/basketSlice";

import IconsEditOrDelete from "../../adminRecurses/IconsEditOrDelete";

function Sauce() {

    // redux
    const dispatch = useDispatch();

    // массив соусов
    const sauces = useSelector((state) => state.sauces.sauces);
    console.log(sauces);

    // Массив корзины
    let basketArr = useSelector((state) => state.basket.basketArray.filter(basketEl => basketEl.productType == 'sauces'));
    if (basketArr.length == 0) {
        if (localStorage.getItem('basketArr') !== null) {
            basketArr = JSON.parse(localStorage.getItem('basketArr')).filter(basketEl => basketEl.productType == 'sauces');
        }
    }
    console.log(basketArr);


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
        dispatch(loadSauces());
    }, [dispatch]);


    return (
        <div className="d-flex gap-5 p-5 flex-wrap justify-content-center">

            {
                sauces.map((sauce) => (
                    <div className="card" style={{ width: '22rem' }} key={sauce.id}>
                        {/* Если админка */}
                        {userRole === 'admin' && (
                            <IconsEditOrDelete />
                        )}
                        {/* <img src="..." class="card-img-top" alt="..."/> */}
                        <div>Тут Должна быть картинка</div>
                        <div className="card-body">
                            <h5 className="card-title">{sauce.title}</h5>
                            <p className="card-text">{sauce.description}</p>
                        </div>
                        <div className="card-body d-flex gap-5 align-items-end">
                            <div className="card-title  fw-bold">
                                <span className="fs-2">{sauce.price}</span>
                                <span className="fs-5">₽</span>
                            </div>
                            <div className="card-title fw-bold ">
                                {
                                    basketArr.find(basketEl => basketEl.id == sauce.id) ? (
                                        <button type="button" className="btn btn-info fs-6" disabled>
                                            Уже в корзине
                                        </button>
                                    ) : (
                                        <button type="button" className="btn btn-info fs-6" onClick={() => dispatch(addBasketEl(sauce))}>
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

export default Sauce;