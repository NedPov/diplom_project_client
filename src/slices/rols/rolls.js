
import axios from "axios";

const SERVER_URL = 'http://localhost:9876/rolls';

// Настройка axios по дефолту
const api = axios.create({
    baseURL: SERVER_URL,
    headers: {
        "Content-Type": "application/json",
    },
    //работа с куки(headers), отправляем токен
    withCredentials: true
});


// Запрос: Получение всех роллов
export const fetchRolls = async () => {
    const response = await api.get('/'); 
    return response.data;
};

// Запрос: Добавить роллы
export const addRolls = async ({title, description, price, productType, quantity }) => {
    const response = await api.post('http://localhost:9876/addProducts', {title, description, price, productType, quantity});
    console.log(response.data);
    return response.data;
};

// Запрос: Изменение роллов
export const editRolls = async (title, description, price, rollsId) => {
    const response = await api.put(`/${rollsId}/edit`, { title, description, price });
    return response.data;
};

// Запрос: Удаление роллов
export const deleteRolls = async (id) => {
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
