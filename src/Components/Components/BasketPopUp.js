import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { submittingOrder } from "../../slices/basket/basketSlice";



function BasketPopUp({ basketArr, user_id }) {

    const dispatch = useDispatch();


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
                    <div class="modal fade" id="registrationModal" tabindex="-1" aria-labelledby="registrationModalLabel" aria-hidden="true">
                        <div class="modal-dialog modal-lg">
                            <div class="modal-content">
                                <div class="modal-header d-flex ">
                                    <h1 class="modal-title fs-3 " id="registrationModalLabel">Оформление заказа</h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>

                                <div class="modal-body">
                                    <div className="mb-3">
                                        <label htmlFor="tel" className="form-label" >Веведите ваш номер телефона:</label>
                                        <input type="number" className="form-control" id="tel" value={tel} onChange={(e) => setTel(e.target.value)} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="name" className="form-label" >Веведите ваше имя:</label>
                                        <input type="text" className="form-control" id="name" value={name} onChange={(e) => setName(e.target.value)} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="address" className="form-label" >Веведите ваш адрес:</label>
                                        <input type="text" className="form-control" id="address" value={address} onChange={(e) => setAddress(e.target.value)} />
                                    </div>
                                </div>

                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Закрыть</button>
                                    <button type="button" class="btn btn-primary" onClick={handleSubmit}>Оформить</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div class="modal fade" id="registrationModal" tabindex="-1" aria-labelledby="registrationModalLabel" aria-hidden="true">
                        <div class="modal-dialog modal-lg">
                            <div class="modal-content">
                                <div class="modal-header d-flex ">
                                    <h1 class="modal-title fs-3 " id="registrationModalLabel">Ваш заказ принят</h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>

                                <div class="modal-body text-center">
                                    <h2>Номер заказа: 000000000</h2>
                                    <p>Скоро вам поступит смс уведомление или звонок оператора о подтверждении заказа.</p>
                                    <p>Если у вас есть вопросы или подтверждение не пришло, звоните по телефону:</p>
                                    <h5>8-800-700-65-56</h5>
                                </div>

                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Закрыть</button>

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





