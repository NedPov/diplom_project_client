import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

import { loadSets } from "../../../slices/sets/setsSlice";


function Set() {

    const dispatch = useDispatch();

    const sets = useSelector((state) => state.sets.sets);
    console.log(sets);


    useEffect(() => {
        dispatch(loadSets());
    }, [dispatch]);


    return (
        <div className="d-flex gap-5 p-5 flex-wrap justify-content-center">

            {
                sets.map((set) => (
                    <div className="card" style={{ width: '22rem' }} key={set.id}>
                        {/* <img src="..." class="card-img-top" alt="..."/> */}
                        <div>Тут Должна быть картинка</div>
                        <div className="card-body">
                            <h5 className="card-title">{set.title}</h5>
                            <p className="card-text">{set.description}</p>
                        </div>
                        <div className="card-body d-flex gap-5 align-items-end">
                            <div className="card-title  fw-bold">
                                <span className="fs-2">{set.price}</span>
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

export default Set;