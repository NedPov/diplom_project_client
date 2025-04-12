
import axios from "axios";

const SERVER_URL = 'http://localhost:9875/sushi';

// Настройка axios по дефолту
const api = axios.create({
    baseURL: SERVER_URL,
    headers: {
        "Content-Type": "application/json",
    },
    //работа с куки(headers), отправляем токен
    withCredentials: true
});


// Запрос: Получение всех суши
export const fetchSushi = async () => {
    const response = await api.get('/'); 
    return response.data;
};

// Запрос: Добавить суши
export const addSushi = async ({ title, description, price, productType, quantity, imgUrl }) => {
    const response = await api.post('http://localhost:9875/addProducts', { title, description, price, productType, quantity, imgUrl });
    console.log(response.data);
    return response.data;
};

// Запрос: Изменение суши
export const editSushi = async (title, description, price, sushiId) => {
    const response = await api.put(`/${sushiId}/edit`, { title, description, price });
    return response.data;
};

// Запрос: Удаление суши
export const deleteSushi = async (id) => {
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
