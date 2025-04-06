import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { addFetchSets } from "../../slices/sets/setsSlice";
import { addFetchDrinks } from "../../slices/drinks/drinksSlice";
import { addFetchRolls } from "../../slices/rols/rollsSlice";
import { addFetchSushi } from "../../slices/sushi/sushiSlice";
import { addFetchSauces } from "../../slices/sauces/saucesSlice";


function AdminPanel() {

    // redux
    const dispatch = useDispatch();


    // Состояния
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [productType, setProductType] = useState('');
    const [image, setImage] = useState('');


    // reset Формы
    function resetForm() {
        setTitle('');
        setDescription('');
        setPrice('');
        setProductType('');
        setImage('');
    };



    // Отправка формы
    const handleSubmit = (e) => {
        e.preventDefault();

        // ДОБАВЛЕНИЕ ПРОДУКТА
        console.log(title);
        console.log(description);
        console.log(price);
        console.log(productType);
        console.log(image);

        if (productType === 'set') {
            dispatch(addFetchSets({ title, description, price, productType }));
        }
        if (productType === 'sushi') {
            dispatch(addFetchSushi({ title, description, price, productType }));
        }
        if (productType === 'roll') {
            dispatch(addFetchRolls({ title, description, price, productType }));
        }
        if (productType === 'sauces') {
            dispatch(addFetchSauces({ title, description, price, productType }));
        }
        if (productType === 'drinks') {
            dispatch(addFetchDrinks({ title, description, price, productType }));
        }

        resetForm();
    };

    return (
        <div className="container">
            <h1 className="text-center">AdminPanel</h1>

            <div className="">
                <form className="bg-light border border-2 p-4" onSubmit={handleSubmit}>
                    <div className="row">

                        <div className="mb-3">
                            <label htmlFor="productName" className="form-label" >Название продукта</label>
                            <input type="text" className="form-control" id="productName" value={title} onChange={(e) => setTitle(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="productDescription" className="form-label">Описание продукта</label>
                            <input type="text" className="form-control" id="productDescription" value={description} onChange={(e) => setDescription(e.target.value)} />
                        </div>


                        <div className="mt-2 col-4">
                            <label className="mb-1" htmlFor="fileInput">Загрузить изображение</label><br />
                            <input type="file" className="form-control" id="fileInput" accept="image/png, image/jpeg" files={image} value={image} onChange={(e) => setImage(e.target.value)} />
                        </div>

                        <div className="mb-3 col-4">
                            <label htmlFor="productPrice" className="form-label">Стоимость продукта</label>
                            <input type="number" className="form-control" id="productPrice" value={price} onChange={(e) => setPrice(e.target.value)} />
                        </div>

                        <div className="mb-3 col-4">
                            <label className="form-label" htmlFor="productType">Тип продукта</label>
                            <select className="form-select" id="productType" aria-label="Default select example" value={productType} onChange={(e) => setProductType(e.target.value)}>
                                <option defaultValue>Выберете тип продукта</option>
                                <option value="set">Сет</option>
                                <option value="sushi">Суши</option>
                                <option value="roll">Роллы</option>
                                <option value="sauces">Соусы</option>
                                <option value="drinks">Напитки</option>
                            </select>
                        </div>


                    </div>
                    <button type="submit" className="btn btn-primary col-1">Создать</button>
                </form>
            </div>


        </div>



    )
};


export default AdminPanel;
