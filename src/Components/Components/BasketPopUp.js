import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { submittingOrder } from "../../slices/basket/basketSlice";



function BasketPopUp({ basketArr, user_id }) {

    const dispatch = useDispatch();

    // для получения номера заказа после отправки на сервер
    let orders = useSelector(state => state.basket.orderArray);
    if (orders.length == 0) {
        orders = JSON.parse(localStorage.getItem('orders'));
    }
    console.log(orders);


    const [orderCompleted, setOrderCompleted] = useState('false');
    console.log(orderCompleted);

    console.log(basketArr);


    const [tel, setTel] = useState('');
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');


    const handleSubmit = (e) => {


        dispatch(submittingOrder({basketArr, tel, name, address, user_id}));


        setOrderCompleted('true');

        setTel('');
        setName('');
        setAddress('');

    }


    return (
        <>
            {
                orderCompleted == 'false' ? (
                    <div className="modal fade" id="registrationModal" tabindex="-1" aria-labelledby="registrationModalLabel" aria-hidden="true">
                        <div className="modal-dialog modal-lg">
                            <div className="modal-content">
                                <div className="modal-header d-flex ">
                                    <h1 className="modal-title fs-3 " id="registrationModalLabel">Оформление заказа</h1>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>

                                <div className="modal-body">
                                    <div className="mb-3">
                                        <label htmlFor="tel" className="form-label" >Введите ваш номер телефона:</label>
                                        <input type="number" className="form-control" id="tel" value={tel} onChange={(e) => setTel(e.target.value)} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="name" className="form-label" >Введите ваше имя:</label>
                                        <input type="text" className="form-control" id="name" value={name} onChange={(e) => setName(e.target.value)} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="address" className="form-label" >Введите ваш адрес:</label>
                                        <input type="text" className="form-control" id="address" value={address} onChange={(e) => setAddress(e.target.value)} />
                                    </div>
                                </div>

                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Закрыть</button>
                                    <button type="button" className="btn btn-primary" onClick={handleSubmit}>Оформить</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="modal fade" id="registrationModal" tabindex="-1" aria-labelledby="registrationModalLabel" aria-hidden="true">
                        <div className="modal-dialog modal-lg">
                            <div className="modal-content">
                                <div className="modal-header d-flex ">
                                    <h1 className="modal-title fs-3 " id="registrationModalLabel">Ваш заказ принят</h1>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>

                                <div className="modal-body text-center">
                                    {/* <h2>Номер заказа: {orders.id}</h2> */}
                                    <p>Скоро вам поступит смс уведомление или звонок оператора о подтверждении заказа.</p>
                                    <p>Если у вас есть вопросы или подтверждение не пришло, звоните по телефону:</p>
                                    <h5>8-800-700-65-56</h5>
                                </div>

                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" aria-label="Close">Закрыть</button>

                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </>

    )

};


export default BasketPopUp;





