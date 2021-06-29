
import { configureStore } from '@reduxjs/toolkit';

import employeeReducer from './ducks/employee';

export default configureStore({
    reducer:{
        employee: employeeReducer,
           }
})
