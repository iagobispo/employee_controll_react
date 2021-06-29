import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'

import ListEmployee from '../../component/listEmployee';
import Header from '../../component/Header';
import { useHistory } from 'react-router-dom'

import { getAllEmployees, getSearchEmployees } from '../../store/fetchAction';

import './styles.css';

export default function Home() {

    const employee = useSelector(state => state.employee);
    const dispatch = useDispatch()

    const history = useHistory();

    const [form, setForm] = useState('')
    function formChange(e) {
        setForm({ search: e.target.value });
        console.log(form)
    }


    function SearchSend(e) {
        e.preventDefault();
        dispatch(getSearchEmployees(form.search))
        setForm({})

    }

    function onBlurCheck() {
        if (form.search == "") {
            dispatch(getAllEmployees())
        }
    }

    useEffect(() => {
        dispatch(getAllEmployees())
    }, [dispatch], []);


    return (

        <div className='div-containner'>
            <Header title='Cadastrar funcionário' page='formEemployee' />


            {employee.length > 0 ?
                <div className='containner-show'>
                    <div className="containner-render">
                        {employee.map((data, index) => (
                            <ListEmployee key={index} data={data} />
                        ))}
                    </div>
                                      
                    <form onSubmit={SearchSend} className="div-imput">
                        <input onBlur={onBlurCheck} onChange={formChange} className='input-search' placeholder='Buscar funcionários' required type='text' name='search' value={form.search} />
                        <button type='submit' className='btn-search'>Buscar</button>
                    </form>
                </div>
                :
                <div onClick={() => history.push('/formEemployee')} className='containner-add'>
                    <h1>Não há funcionários cadastrado.</h1>
                    <button className='btn-add'>Cadastrar</button>
                </div>
            }





        </div>


    )
}
