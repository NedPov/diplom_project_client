

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { loadMyOrders } from "../../../slices/basket/basketSlice";


function MyOrders() {

    const dispatch = useDispatch();


    const user = JSON.parse(localStorage.getItem('user'));
    let user_id = ''
    if(user){
        user_id = user.id;
    }





    let orders = useSelector(state => state.basket.MyOrderArray);
    console.log(orders);



    // Запрос на загрузку заказов
    useEffect(() => {
        dispatch(loadMyOrders(user_id));
    }, [dispatch]);

    return (
        <div className="container">
            <h1 className="text-center my-4">Мои заказы</h1>
            <div className="row justify-content-evenly gap-3">
                {
                    orders.length > 0 ? (
                        orders.map((order) => (
                            <div key={order.id} className={order.completed == 0 ? 'card col-3 my-3' : 'card col-3 my-3 bg-success text-light'} style={{ width: '25rem', height: 'auto' }}>
                                {
                                    order.completed != 0 && (
                                        <h2 className="p-1 text-center"> Ваш заказ готов !</h2>
                                    )
                                }
                                <div>==================================</div>
                                <div className='row p-2 justify-content-around'>
                                    <span className="my-1 list-group-item col-5">Имя: {order.name}</span>
                                    <span className="my-1 list-group-item col-5">Номер заказа: {order.id}</span>
                                    <span className="my-1 list-group-item col-11">Адрес: {order.address}</span>
                                </div>
                                <div>==================================</div>
                                <ol className="list-group list-group-numbered mb-4 mt-2">
                                    {
                                        order.basketArr.map((basketEl) => (
                                            <li className="list-group-item" key={basketEl.id}>
                                                <span>{basketEl.title}</span>
                                                <div className="d-flex justify-content-end gap-1">
                                                    <span>{basketEl.quantity}</span>
                                                    <span> X </span>
                                                    <span>{basketEl.price}.00</span>
                                                </div>

                                            </li>

                                        ))
                                    }

                                </ol>

                            </div>
                        ))
                    ) : (
                        <h2 className="text-center">
                            Заказов пока нет
                        </h2>
                    )
                }
            </div>
        </div>

    )
};


export default MyOrders;






