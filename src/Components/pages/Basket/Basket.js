import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";



function Basket() {

    // redux
    const dispatch = useDispatch();



    // Массив продукции
    const basketArr = useSelector((state) => state.basket.basketArray);
    console.log(basketArr);


    return (
        <>
            <h1>Basket</h1>
            <div className="d-flex gap-5 p-5 flex-wrap justify-content-center">

                {
                    basketArr.map((basketEl) => (
                        <div className="card" style={{ width: '22rem' }} key={Date.now()}>
                            {/* <img src="..." class="card-img-top" alt="..."/> */}
                            <div>Тут Должна быть картинка</div>
                            <div className="card-body">
                                <h5 className="card-title">{basketEl.title}</h5>
                                <p className="card-text">{basketEl.description}</p>
                            </div>
                            <div className="card-body d-flex gap-5 align-items-end">
                                <div className="card-title  fw-bold">
                                    <span className="fs-2">{basketEl.price}</span>
                                    <span className="fs-5">₽</span>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    )
};


export default Basket;




