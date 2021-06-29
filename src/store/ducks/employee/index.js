

import { createAction, createReducer} from '@reduxjs/toolkit';

const INITIAL_STATE = [];

export const addemployee = createAction('ADD_EMPLOYEE');
export const addemployees  = createAction('ADD_EMPLOYEES');
export const removeEmployee   = createAction('REMOVE_EMPLOYEES')

export default createReducer(INITIAL_STATE,{
    [addemployee.type]: (state, action) => [...state, action.payload],
    [addemployees.type]: (state, action) => [...action.payload],
    [removeEmployee.type]: (state, action) => state.filter((item) => item.idemployee !== action.payload)
});



