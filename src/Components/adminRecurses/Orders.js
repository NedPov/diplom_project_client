
import { RiDeleteBin6Line } from "react-icons/ri";
import { MdDoneOutline } from "react-icons/md";


import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { loadOrders, completedOrder, deleteOrder } from "../../slices/basket/basketSlice";



function Orders() {

    const dispatch = useDispatch();

    let orders = useSelector(state => state.basket.orderArray);
    console.log(orders);



    // Запрос на загрузку заказов
    useEffect(() => {
        dispatch(loadOrders());
    }, [dispatch]);

    return (
        <div className="container">
            <h1 className="text-center my-4">ЗАКАЗЫ</h1>
            <div className="row justify-content-evenly gap-3">
                {
                    orders && (
                        orders.map((order) => (
                            <div key={order.id} className="card col-3 my-3" style={{ width: '25rem'}}>
                                <h2 className={order.completed == 0 ? 'card-header row' : 'card-header row bg-success'} style={{height: '22rem'}}>
                                    <span className="my-1 list-group-item">Номер заказа: {order.id}</span>
                                    <span className="my-1 list-group-item">Имя: {order.name}</span>
                                    <span className="my-1 list-group-item">Телефон: {order.tel}</span>
                                    <span className="my-1 list-group-item">Адрес: {order.address}</span>
                                </h2>
                                <ul className="list-group list-group-flush mb-1">
                                    {
                                        order.basketArr.map((basketEl) => (
                                            <>
                                                <li className="list-group-item" key={basketEl.id}>{basketEl.title}: {basketEl.quantity}</li>
                                            </>
                                        ))
                                    }

                                </ul>

                                <div className="row gap-1 m-1 my-3">
                                    {order.completed == 0 ? (
                                        <button className="btn btn-outline-success col" onClick={() => dispatch(completedOrder(order.id))}>  Приготовлено</button>
                                    ) : (
                                        <button className="btn btn-outline-success col" disabled>Уже приготовлено</button>
                                    )
                                    }
                                    <button className="btn btn-outline-danger col" onClick={() => dispatch(deleteOrder(order.id))}>
                                        <RiDeleteBin6Line /> 
                                        <span className="ms-2">Доставлено</span>
                                    </button>
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