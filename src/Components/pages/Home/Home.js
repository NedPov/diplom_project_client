import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";



import BlockDiscountSets from "./BlockDiscountSets";
import NewSet from "./NewSet";



function Home() {




    return (
        <main className="container bg-primary">
            <h1 className="text-center">Home</h1>
            <h3 className="text-center mt-5">Супер акции недели</h3>
            <div className="container d-flex gap-3 justify-content-center mt-4 bg-secondary">
                <BlockDiscountSets />
            </div>
            <div className="container bg-secondary text-white my-5 d-flex justify-content-evenly">
                <NewSet />
            </div>
            <div className="container bg-warning d-flex justify-content-around">
                <div className="">
                    <h4>Почему стоит выбрать именно нас</h4>
                    <ul>
                        <li>Гарантируем вкуснейшее блюдо</li>
                        <li>Доставка от 30мин</li>
                        <li>Приготовлено исключительно из качественных продуктов</li>
                        <li>Контроль качества приготовления на каждом этапе</li>
                    </ul>
                </div>
                <div className="">ЗДЕСЬ ДОЛЖНО БЫТЬ ИЗОБРАЖЕНИЕ</div>
            </div>
            

        </main>
    )
};

export default Home;
