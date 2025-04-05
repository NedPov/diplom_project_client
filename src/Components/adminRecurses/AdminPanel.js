import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";



function AdminPanel() {

    // redux
    const dispatch = useDispatch();


    // Состояния
    const [productName, setProductName] = useState('');
    const [productDescription, setProductDescription] = useState('');
    const [productPrice, setProductPrice] = useState('');
    const [productType, setProductType] = useState('');
    const [image, setImage] = useState('');


    // reset Формы
    function resetForm() {
        setProductName('');
        setProductDescription('');
        setProductPrice('');
        setProductType('');
        setImage('');
    };



    // Отправка формы
    const handleSubmit = (e) => {
        e.preventDefault();

        // ДОБАВЛЕНИЕ ПРОДУКТА
        // !add

        console.log(productName);
        console.log(productDescription);
        console.log(productPrice);
        console.log(productType);
        console.log(image);

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
                            <input type="text" className="form-control" id="productName" value={productName} onChange={(e) => setProductName(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="productDescription" className="form-label">Описание продукта</label>
                            <input type="text" className="form-control" id="productDescription" value={productDescription} onChange={(e) => setProductDescription(e.target.value)} />
                        </div>


                        <div className="mt-2 col-4">
                            <label className="mb-1" htmlFor="fileInput">Загрузить изображение</label><br />
                            <input type="file" className="form-control" id="fileInput" accept="image/png, image/jpeg" files={image} value={image} onChange={(e) => setImage(e.target.value)} />
                        </div>

                        <div className="mb-3 col-4">
                            <label htmlFor="productPrice" className="form-label">Стоимость продукта</label>
                            <input type="number" className="form-control" id="productPrice" value={productPrice} onChange={(e) => setProductPrice(e.target.value)} />
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
