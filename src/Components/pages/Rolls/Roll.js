import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";


import { loadRolls } from "../../../slices/rols/rollsSlice";

import IconsEditOrDelete from "../../adminRecurses/IconsEditOrDelete";


function Roll() {

    const dispatch = useDispatch();

    const rolls = useSelector((state) => state.rolls.rolls);
    console.log(rolls);


    useEffect(() => {
        dispatch(loadRolls());
    }, [dispatch]);


    return (
        <div className="d-flex gap-5 p-5 flex-wrap justify-content-center">

            {
                rolls.map((roll) => (
                    <div className="card position-relative" style={{ width: '22rem' }} key={roll.id} >
                        <IconsEditOrDelete />
                        {/* <img src="..." class="card-img-top" alt="..."/> */}
                        <div>Тут Должна быть картинка</div>
                        <div className="card-body">
                            <h5 className="card-title">{roll.title}</h5>
                            <p className="card-text">{roll.description}</p>
                        </div>
                        <div className="card-body d-flex gap-5 align-items-end">
                            <div className="card-title  fw-bold">
                                <span className="fs-2">{roll.price}</span>
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

export default Roll;