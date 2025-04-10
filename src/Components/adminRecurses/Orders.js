import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { loadOrders, deleteOrder  } from "../../slices/basket/basketSlice";



function Orders() {

    const dispatch = useDispatch();

    let orders = useSelector(state => state.basket.orderArray);
    console.log(orders);


    //! кейс на смену bg у карточки

    const [color, setColor] = useState('card-header row')
    // const setColor = (priority) => {
    //     switch (priority) {
    //         case "complete": return 'card-header row bg-green';
    //         default: return 'card-header row';
    //     }
    // };


     // Запрос на загрузку заказов
        useEffect(() => {
            dispatch(loadOrders());
        }, [dispatch]);

    return (
        <div className="container">
            <h1 className="text-center my-4">ЗАКАЗЫ</h1>
            <div className="row justify-content-evenly gap-2">
                {
                    orders && (
                        orders.map((order) => (
                            <div key={order.id} className="card col-3" style={{ width: '20rem' }}>
                                <h2 className='card-header row'>
                                    <span className="my-1 list-group-item">Номер заказа: {order.id}</span>
                                    <span className="my-1 list-group-item">Имя: {order.name}</span>
                                    <span className="my-1 list-group-item">Телефон: {order.tel}</span>
                                    <span className="my-1 list-group-item">Адрес: {order.address}</span>
                                </h2>
                                <ul className="list-group list-group-flush">
                                    {
                                        order.basketArr.map((basketEl) => (
                                            <>
                                                <li className="list-group-item" key={basketEl.id}>{basketEl.title}: {basketEl.quantity}</li>
                                            </>
                                        ))
                                    }

                                </ul>

                                <div className="row gap-1 m-1">
                                    <button className="btn btn-outline-success col" >Приготовлено</button>
                                    <button className="btn btn-outline-danger col" onClick={() => dispatch(deleteOrder(order.id))}>Доставлено</button>
                                </div>
                            </div>
                        ))
                    )
                }
            </div>
        </div>

    )
};


export default Orders;