import axios from 'axios';
import { ADDNEW_TODO, GETALL_TODOS, TOGGLE_TODO, UPDATE_TODO, DELETE_TODO, TOGGLE_TAB } from "./type.js";
const API_URL = 'http://localhost:8000';

export const addNewTodo = (data) => async(dispatch) => {
    try{
        const response = await axios.post(`${API_URL}/todos`, {data});
        
        dispatch({ type: ADDNEW_TODO,payload: response.data});
    } catch(error){
        console.log("Error while calling addNewTodo API", error.message);
    }
}

export const getAllTodos = () => async(dispatch) => {
    try{
        const response = await axios.get(`${API_URL}/todos`);
        
        dispatch({ type: GETALL_TODOS ,payload: response.data});
    } catch(error){
        console.log("Error while calling getAllTodos API", error.message);
    }
}

export const toggleTodo = (id) => async(dispatch) => {
    try{
        const response = await axios.get(`${API_URL}/todos/${id}`);
        
        dispatch({ type: TOGGLE_TODO ,payload: response.data});
    } catch(error){
        console.log("Error while calling toggleTodo API", error.message);
    }
}

export const updateTodo = (id, data) => async(dispatch) => {
    try{
        const response = await axios.put(`${API_URL}/todos/${id}`, {data});
        
        dispatch({ type: UPDATE_TODO ,payload: response.data});
    } catch(error){
        console.log("Error while calling updateTodo API", error.message);
    }
}

export const deleteTodo = (id, data) => async(dispatch) => {
    try{
        const response = await axios.delete(`${API_URL}/todos/${id}`);
        
        dispatch({ type: DELETE_TODO ,payload: response.data});
    } catch(error){
        console.log("Error while calling deleteTodo API", error.message);
    }
}

export const toggleTab = (tab) => async (dispatch) => {
    dispatch({ type: TOGGLE_TAB, selected: tab });
}