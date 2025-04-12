import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

import { loadSushi, deleteFetchSushi } from "../../../slices/sushi/sushiSlice";
import { addBasketEl } from "../../../slices/basket/basketSlice";

import { RiDeleteBin6Line } from "react-icons/ri";

function SushiCard() {

    // redux
    const dispatch = useDispatch();

    // Получаем массив суши
    const sushi = useSelector((state) => state.sushi.sushi);
    console.log(sushi);

    // Массив корзины
    let basketArr = useSelector((state) => state.basket.basketArray.filter(basketEl => basketEl.productType == 'sushi'));
    if (basketArr.length == 0) {
        if (localStorage.getItem('basketArr') !== null) {
            basketArr = JSON.parse(localStorage.getItem('basketArr')).filter(basketEl => basketEl.productType == 'sushi');
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
        dispatch(loadSushi());
    }, [dispatch]);


    return (
        <div className="d-flex gap-5 p-5 flex-wrap justify-content-center">

            {
                sushi.map((sushiEl) => (
                    <div className="card" style={{ width: '22rem' }} key={sushiEl.id}>

                        {/* Если админка */}
                        {userRole === 'admin' && (
                            <div className="container d-flex gap-3 justify-content-end position-absolute bottom-100 start-0 ">
                                <button className="btn btn-outline-danger btn-sm" onClick={() => dispatch(deleteFetchSushi(sushiEl.id))}>
                                    <RiDeleteBin6Line />
                                </button>
                            </div>
                        )}
                        <img src={`http://localhost:9875/${sushiEl.fileData}`} className="card-img-top" alt="..." style={{height: '18rem'}}/>
                        <div className="card-body">
                            <h5 className="card-title">{sushiEl.title}</h5>
                            <p className="card-text">{sushiEl.description}</p>
                        </div>
                        <div className="card-body d-flex gap-5 align-items-end">
                            <div className="card-title  fw-bold">
                                <span className="fs-2">{sushiEl.price}</span>
                                <span className="fs-5">₽</span>
                            </div>
                            <div className="card-title fw-bold ">
                                {
                                    basketArr.find(basketEl => basketEl.id == sushiEl.id) ? (
                                        <button type="button" className="btn btn-info fs-6" disabled>
                                            Уже в корзине
                                        </button>
                                    ) : (
                                        <button type="button" className="btn btn-info fs-6" onClick={() => dispatch(addBasketEl(sushiEl))}>
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

export default SushiCard;