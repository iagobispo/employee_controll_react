import React from 'react';
import { useHistory } from 'react-router-dom';

import './styles.css';

export default function List({ data }) {
    const history = useHistory();
    function showEmployee(data){
        
        history.push('/employeeDetail', data)
        
    }

    return (
        <div className="containner-employee" onClick={()=>showEmployee(data)}>
            <div className=''></div>
            <h3 className=''>{data.name}</h3>
            <p className=''>{data.email}</p>
            <p className=''>{data.occupation}</p>
        </div>
    )

}
