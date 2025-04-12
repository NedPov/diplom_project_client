import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";


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
    console.log(image);
    const quantity = 1;

    // reset Формы
    function resetForm() {
        setTitle('');
        setDescription('');
        setPrice('');
        setProductType('');
        setImage('');
    };

    const upload = async () => {
        try {
            const formData = new FormData();
            formData.append('file', image);
            console.log(formData);
            const response = await axios.post('http://localhost:9875/upload', formData, { headers: { "Content-Type": "multipart/form-data" } });
            console.log(response.data);
            return response.data;
        } catch (error) {
            console.error(error);
        }
    }



    // Отправка формы
    const handleSubmit = async (e) => {
        e.preventDefault();

        const imgUrl = await upload();
        console.log(imgUrl);

        // ДОБАВЛЕНИЕ ПРОДУКТА
        console.log(title);
        console.log(description);
        console.log(price);
        console.log(productType);
        console.log(image);


        if (productType === 'set') {
            dispatch(addFetchSets({ title, description, price, productType, quantity, imgUrl }));
        }
        if (productType === 'sushi') {
            dispatch(addFetchSushi({ title, description, price, productType, quantity, imgUrl }));
        }
        if (productType === 'roll') {
            dispatch(addFetchRolls({ title, description, price, productType, quantity, imgUrl}));
        }
        if (productType === 'sauces') {
            dispatch(addFetchSauces({ title, description, price, productType, quantity, imgUrl}));
        }
        if (productType === 'drinks') {
            dispatch(addFetchDrinks({ title, description, price, productType,quantity, imgUrl}));
        }

        resetForm();
    };

    return (
        <div className="container">
            <h1 className="text-center">AdminPanel</h1>

            <div className="">
                <form className="bg-light border border-2 p-4" encType="multipart/form-data" onSubmit={handleSubmit}>
                    <div className="row">
                        {/* <img src={imgUrl} alt="" /> */}
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
                            <input type="file" className="form-control" id="fileInput" name="filedata" accept="image/png, image/jpeg, image/jpg " files={image} onChange={(e) => setImage(e.target.files[0])} />
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
