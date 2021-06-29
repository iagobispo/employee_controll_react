import api from '../../services/api';
import { addemployees } from '../ducks/employee';


export const getAllEmployees = () => {
    return (dispatch) => {
        api.get('/employees')
            .then((res) => {
                dispatch(addemployees(res.data));
                console.log(res.data)
            })
            .catch(err => console.log(err));
    };
};


export const getSearchEmployees = (search) => {
    return (dispatch) => {
        api.get(`/search/${search}`)
            .then((res) => {
                dispatch(addemployees(res.data));
            })
            .catch(console.log);
    };
};

export const postEmployees = (data) => {
    return () => {
        api.post(`/create`, data)
            .then((res) => {
                console.log(res.request.response)
            })
            .catch((err)=>{
                console.log(err)
            });
    };
};

export const putEmployees = (data, id) => {
    return () => {
        api.put(`/employee/${id}`, data)
            .then((res) => {
                console.log(res.data)
            })
            .catch((err)=>{
                console.log(err)
            });
    };
};

export const deleteEmployees = (id) => {
    return () => {
        api.delete(`/employee/${id}`)
            .then((res) => {
                console.log(res.data)
            })
            .catch((err)=>{
                console.log(err)
            });
    };
};
