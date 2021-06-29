import React, { useState } from 'react';
import Header from '../../component/Header'
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { postEmployees, getAllEmployees } from '../../store/fetchAction';

import './styles.css';

export default function CreateEmployee() {

    const history = useHistory()

    const [form, setForm] = useState({ name: '', regime: '', cpf_cnpj: '', email: '', occupation: '', phone1: '', phone2: '' });
    const dispatch = useDispatch();

    function formChange(e) {
        setForm({ ...form, [e.target.name]: e.target.value });
        console.log(form)
    }


    async function Envia(e) {
        e.preventDefault();

        await dispatch(postEmployees(form))

        setForm({ name: '', regime: '', cpf_cnpj: '', email: '', occupation: '', phone1: '', phone2: '' });

        await dispatch(getAllEmployees())
        history.push('/')
    }

    return (

        <div className='containner'>
            <Header title='Home' page='' />
            <form className='containner-main' onSubmit={Envia}>
                <h1>Adicione um novo funcionário</h1>

                <input onChange={formChange} required placeholder='Nome*' name='name' value={form.name} ></input>
                <input onChange={formChange} required placeholder='função*' name='occupation' value={form.occupation} />
                <input onChange={formChange} required placeholder='Regime*' name='regime' value={form.regime} />
                <input onChange={formChange} required placeholder='E-mail*' name='email' type='email' value={form.email} />
                <input onChange={formChange} required placeholder='CPF/CNPJ' name="cpf_cnpj" type='number' value={form.cpf_cnpj} />
                <input onChange={formChange} required placeholder='Telefone 1*' name='phone1' type='number' value={form.phone1} />
                <input onChange={formChange} placeholder='Telefone 2' name='phone2' type='number' value={form.phone2} />


                <button className='btn-submit' type="submit">Salver</button>
            </form>

        </div>
    )
}


