import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

import { loadDrinks } from "../../../slices/drinks/drinksSlice";

import IconsEditOrDelete from "../../adminRecurses/IconsEditOrDelete";


function Drink() {

    const dispatch = useDispatch();

    const drinks = useSelector((state) => state.drinks.drinks);
    console.log(drinks);


    useEffect(() => {
        dispatch(loadDrinks());
    }, [dispatch]);


    return (
        <div className="d-flex gap-5 p-5 flex-wrap justify-content-center">

            {
                drinks.map((drink) => (
                    <div className="card" style={{ width: '22rem' }} key={drink.id}>
                        <IconsEditOrDelete />
                        {/* <img src="..." class="card-img-top" alt="..."/> */}
                        <div>Тут Должна быть картинка</div>
                        <div className="card-body">
                            <h5 className="card-title">{drink.title}</h5>
                            <p className="card-text">{drink.description}</p>
                        </div>
                        <div className="card-body d-flex gap-5 align-items-end">
                            <div className="card-title  fw-bold">
                                <span className="fs-2">{drink.price}</span>
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

export default Drink;