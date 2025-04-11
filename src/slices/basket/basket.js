
import axios from "axios";

const SERVER_URL = 'http://localhost:9875/order';

// Настройка axios по дефолту
const api = axios.create({
    baseURL: SERVER_URL,
    headers: {
        "Content-Type": "application/json",
    },
    //работа с куки(headers), отправляем токен
    withCredentials: true
});


// Запрос: Получение всех заказов
export const fetchOrder = async () => {
    const response = await api.get('/'); 
    return response.data;
};

// Запрос: Получение ЛИЧНОГО заказа
export const fetchMyOrder = async (id) => {
    const response = await api.get(`/${id}`); 
    return response.data;
};

// Запрос: Добавить заказ
export const addFetchOrders = async ({basketArr, tel, name, address, userId}) => {
    const response = await api.post('/', {basketArr, tel, name, address, userId});
    console.log(response.data);
    return response.data;
};

// // Запрос: Изменение напитка
// export const editDrinks = async (title, description, price, drinksId) => {
//     const response = await api.put(`/${drinksId}/edit`, { title, description, price });
//     return response.data;
// };

// Запрос: Заказ приготовлен
export const completeOrders = async (id) =>{
    const response = await api.put(`/${id}/completed`);
    console.log(response.data);
    return response.data.id;
}

// Запрос: Удаление заказа
export const deleteOrders = async (id) => {
    const response = await api.delete(`/${id}`);
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
