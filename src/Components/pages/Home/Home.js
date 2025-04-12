import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

import img1 from '../../../images/master.jpeg'

import BlockDiscountSets from "./BlockDiscountSets";
import NewSet from "./NewSet";



function Home() {




    return (
        <main className="container">
            <h1 className="text-center m-5">Главная</h1>
            <div className=" d-flex justify-content-around border border-dark">
                <div className="p-3">
                    <h4  className="mb-5 fw-bold">Почему стоит выбрать именно нас</h4>
                    <ul className="row gap-5 fs-5 fw-bold">
                        <li>Гарантируем вкуснейшее блюдо</li>
                        <li>Доставка от 30мин</li>
                        <li>Приготовлено исключительно из качественных продуктов</li>
                        <li>Контроль качества приготовления на каждом этапе</li>
                    </ul>
                </div>
                <div >
                    <img src={img1} alt="" style={{width: '40rem'}}/>
                </div>
            </div>
            

        </main>
    )
};

export default Home;
