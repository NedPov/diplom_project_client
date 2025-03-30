import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

import { loadSauces } from "../../../slices/sauces/saucesSlice";


function Sauce() {

    const dispatch = useDispatch();

    const sauces = useSelector((state) => state.sauces.sauces);
    console.log(sauces);


    useEffect(() => {
        dispatch(loadSauces());
    }, [dispatch]);


    return (
        <div className="d-flex gap-5 p-5 flex-wrap justify-content-center">

            {
                sauces.map((sauce) => (
                    <div className="card" style={{ width: '22rem' }} key={sauce.id}>
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
                                <button type="button" className="btn btn-info fs-6">Добавить в корзину</button>
                            </div>
                        </div>
                    </div>
                ))
            }

        </div>
    )
};

export default Sauce;