



function AdminPanel() {






    return (
        <div className="container">
            <h1 className="text-center">AdminPanel</h1>

            <div className="">
                <form className="bg-light border border-2 p-4">
                    <div className="row">

                        <div className="mb-3">
                            <label for="productName" className="form-label">Название продукта</label>
                            <input type="text" className="form-control" id="productName" />
                        </div>
                        <div className="mb-3">
                            <label for="productDescription" className="form-label">Описание продукта</label>
                            <input type="text" className="form-control" id="productDescription" />
                        </div>


                        <div className="mt-2 col-4">
                            <label className="mb-1" for="fileInput">Загрузить изображение</label><br />
                            <input type="file" className="" id="fileInput" accept="image/png, image/jpeg" />
                        </div>

                        <div className="mb-3 col-4">
                            <label for="productPrice" className="form-label">Стоимость продукта</label>
                            <input type="text" className="form-control" id="productPrice" />
                        </div>

                        <div className="mb-3 col-4 pt-2">
                            <label className="form-label"></label>
                            <select className="form-select" aria-label="Default select example">
                                <option selected>Выберете тип продукта</option>
                                <option value="1">Сет</option>
                                <option value="2">Суши</option>
                                <option value="3">Роллы</option>
                                <option value="4">Соусы</option>
                                <option value="5">Напитки</option>
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
