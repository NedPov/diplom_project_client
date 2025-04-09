import { useSelector } from "react-redux";


function Orders() {

    const orders = useSelector(state => state.basket.orderArray);
    console.log(orders);

    // const order1 = orders[0].price.trim().split(' ');
    // const order2 = orders[0].quantity.trim().split(' ');
    // const order3 = orders[0].title.trim().split(' ');
    // console.log(order1);
    // console.log(order2);
    // console.log(order3);

    return (
        <>
            <h1>ORDERS</h1>
            {
                orders.map((order) => (
                    <div>
                        <h2>Номер заказа: {order.id}</h2>
                        <h2>Имя: {order.name}</h2>
                        <h2>Тлф: {order.tel}</h2>

                        <div>
                            <span>order</span>
                            <span></span>
                            <span></span>
                        </div>
                        
                    </div>
                ))
            }
        </>

    )
};


export default Orders;