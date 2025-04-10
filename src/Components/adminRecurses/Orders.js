import { useSelector } from "react-redux";


function Orders() {

    const orders = useSelector(state => state.basket.orderArray);
    console.log(orders);

    return (
        <div className="container">
            <h1 className="text-center my-4">ЗАКАЗЫ</h1>
            <div className="row justify-content-evenly gap-2">
                {
                    orders.map((order) => (
                        <div key={order.id} className="card col-3" style={{ width: '20rem' }}>
                            <h2 className="card-header row">
                                <span className="my-1 list-group-item">Номер заказа: {order.id}</span>
                                <span className="my-1 list-group-item">Имя: {order.name}</span>
                                <span className="my-1 list-group-item">Телефон: {order.tel}</span>
                                <span className="my-1 list-group-item">Адрес: {order.address}</span>
                            </h2>
                            <ul className="list-group list-group-flush">
                                {
                                    order.basketArr.map((basketEl) => (
                                        <>
                                            <li className="list-group-item">{basketEl.title}: {basketEl.quantity}</li>
                                        </>
                                    ))
                                }

                            </ul>

                        </div>
                    ))
                }
            </div>
        </div>

    )
};


export default Orders;