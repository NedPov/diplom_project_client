
import axios from "axios";

const SERVER_URL = 'http://localhost:9876/sets';

// Настройка axios по дефолту
const api = axios.create({
    baseURL: SERVER_URL,
    headers: {
        "Content-Type": "application/json",
    },
    //работа с куки(headers), отправляем токен
    withCredentials: true
});


// Запрос: Получение всех сетов
export const fetchSets = async () => {
    const response = await api.get('/'); 
    return response.data;
};

// Запрос: Добавить сет
export const addSets = async ({title, description, price }) => {
    const response = await api.post('/', {title, description, price});
    console.log(response.data);
    return response.data;
};


// Запрос: Изменение сета
export const editSets = async (title, description, price, setsId) => {
    const response = await api.put(`/${setsId}/edit`, { title, description, price });
    return response.data;
};

// Запрос: Удаление сетаа
export const deleteSets = async (id) => {
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
