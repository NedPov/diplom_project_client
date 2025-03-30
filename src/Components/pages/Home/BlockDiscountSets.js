import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";


import { loadDiscountSets } from '../../../slices/sets/setsSlice'


function BlockDiscountSets() {

    const dispatch = useDispatch();

    const discountSets = useSelector((state) => state.sets.discountSets);



    useEffect(() => {
        dispatch(loadDiscountSets());
    }, [dispatch]);

    return (
        <>
            {
                discountSets.map((discountSetsEl) => (
                    <div className="card p-1" style={{ width: '22rem' }} key={discountSetsEl.id}>
                        {/* <img src="..." class="card-img-top" alt="..."/> */}
                        <div>Тут Должна быть картинка</div>
                        <div className="card-body">
                            <h5 className="card-title">{discountSetsEl.title}</h5>
                            <p className="card-text">{discountSetsEl.description}</p>
                        </div>
                        <div className="card-body d-flex gap-5 align-items-end">
                            <div className="card-title  fw-bold">
                                <span className="fs-2">{discountSetsEl.price}</span>
                                <span className="fs-5">₽</span>
                            </div>
                            <div className="card-title fw-bold ">
                                <button type="button" className="btn btn-info fs-6">Добавить в корзину</button>
                            </div>
                        </div>
                    </div>
                ))
            }
        </>
    )
};



export default BlockDiscountSets;