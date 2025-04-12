
import axios from "axios";

const SERVER_URL = 'http://localhost:9875/sauces';

// Настройка axios по дефолту
const api = axios.create({
    baseURL: SERVER_URL,
    headers: {
        "Content-Type": "application/json",
    },
    //работа с куки(headers), отправляем токен
    withCredentials: true
});


// Запрос: Получение всех соусов
export const fetchSauces = async () => {
    const response = await api.get('/');
    return response.data;
};

// Запрос: Добавить соус
export const addSauces = async ({ title, description, price, productType, quantity, imgUrl }) => {
    const response = await api.post('http://localhost:9875/addProducts', { title, description, price, productType, quantity, imgUrl });
    console.log(response.data);
    return response.data;
};

// Запрос: Изменение соуса
export const editSauces = async (title, description, price, saucesId) => {
    const response = await api.put(`/${saucesId}/edit`, { title, description, price });
    return response.data;
};

// Запрос: Удаление соуса
export const deleteSauces = async (id) => {
    const response = await api.delete(`/${id}`);
    console.log(response.data)
    console.log(response.data.id)
    return response.data.id;
};



// interceptors - фишка axios. Перехватывает запросы исходящие и добавляет в них то, что пропишем
api.interceptors.request.use(async (config) => {
    // Автоматом отправляем наш токен со всеми запросами
    let token = localStorage.getItem('accessToken');
    // Настраиваем что в заголовке Authorization будет наш токен доступа
    config.headers.Authorization = `Bearer ${token}`;

    return config;
});
