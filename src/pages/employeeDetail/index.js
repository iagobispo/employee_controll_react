import React, { useState, useEffect } from 'react';
import Header from '../../component/Header';
import { useDispatch } from 'react-redux';

import { putEmployees, deleteEmployees, getAllEmployees } from '../../store/fetchAction';
import { useHistory } from 'react-router-dom';

import './styles.css';

export default function EmployeeDetail(props) {
    const history = useHistory()

    const [dataEmployee, setEmployee] = useState(props.history.location.state)
    const [showEdit, setShowEdit] = useState(false)

    const [form, setForm] = useState({
        name: dataEmployee.name,
        regime: dataEmployee.regime,
        cpf_cnpj: dataEmployee.cpf_cnpj,
        email: dataEmployee.email,
        occupation: dataEmployee.occupation,
        phone1: dataEmployee.phone1,
        phone2: dataEmployee.phone2
    });
    const dispatch = useDispatch();

    function formChange(e) {
        setForm({ ...form, [e.target.name]: e.target.value });
        console.log(form)
    }


    async function Envia(e) {
        e.preventDefault();

        await dispatch(putEmployees(form, dataEmployee.idemployee))


        setForm({ name: '', regime: '', cpf_cnpj: '', email: '', occupation: '', phone1: '', phone2: '' });
        await dispatch(getAllEmployees())
        history.push('/')
    }

    async function fetchDelete(id) {
        await dispatch(deleteEmployees(id))
        await dispatch(getAllEmployees())
        history.push('/')
    }

    return (
        <div className="containner">
            <Header title='Home' page='' />

            {showEdit ? <form className='containner-main' onSubmit={Envia}>
                <h1>{dataEmployee.name}</h1>

                <input onChange={formChange} required placeholder={dataEmployee.name} name='name' value={form.name} ></input>
                <input onChange={formChange} required placeholder='' name='occupation' value={form.occupation} />
                <input onChange={formChange} required placeholder='Regime*' name='regime' value={form.regime} />
                <input onChange={formChange} required placeholder='E-mail*' name='email' type='email' value={form.email} />
                <input onChange={formChange} required placeholder='CPF/CNPJ' name="cpf_cnpj" type='number' value={form.cpf_cnpj} />
                <input onChange={formChange} required placeholder='Telefone 1*' name='phone1' type='number' value={form.phone1} />
                <input onChange={formChange} placeholder='Telefone 2' name='phone2' type='number' value={form.phone2} />

                <button className='btn-submit' type="submit">Salver</button>
            </form>
                :
                <div className='containnerEmployee'>
                    <div>
                        <h1>{dataEmployee.name}</h1>
                        <div className='containner-btn'>
                            <button onClick={() => fetchDelete(dataEmployee.idemployee)} className='btn-delete'>Excluir</button>
                            <button onClick={() => setShowEdit(true)} className='btn-edit'>Editar</button>
                        </div>
                    </div>

                    <h4>Função</h4>
                    <p>{dataEmployee.occupation}</p>
                    <hr></hr>
                    <h4>cpf/cnpj</h4>
                    <p>{dataEmployee.cpf_cnpj}</p>
                    <hr></hr>
                    <h4>Email</h4>
                    <p>{dataEmployee.email}</p>
                    <hr></hr>
                    <h4>Regime</h4>
                    <p>{dataEmployee.regime}</p>
                    <hr></hr>
                    <h4>Telefone</h4>
                    <p>{dataEmployee.phone1}</p>
                    {dataEmployee.phone2 ? <><p>{dataEmployee.phone2}</p></> :
                        false
                    }

                </div>
            }

        </div>
    )
};

