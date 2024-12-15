import { FC, ReactElement } from 'react';
//npm i @mui/x-date/pickers from mui for date picker field
//npm i date-fns
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { TextField } from '@mui/material';
import { IDateField } from './Interfaces/IDateField';
import PropTypes from 'prop-types';

export const TaskDateField: FC<IDateField> = (
    props,
):ReactElement => {
    //state for Desktop Date Picker

    //Destructure the props and give default values
    const { value = new Date(),
                    disabled=false,
                    onChange=(date)=>console.log(date) } = props;

    return (
        <>
            <LocalizationProvider
                dateAdapter={AdapterDateFns}
            >
                <DesktopDatePicker 
                    label="Task Due Date"
                    inputFormat="dd/MM/yyyy"
                    value={value}
                    onChange={onChange}
                    disabled={disabled}
                    renderInput={(params)=>(
                                            <TextField{...params}/>
                                    )}/>
            </LocalizationProvider>
        </>
    )
}

TaskDateField.propTypes = {
    disabled: PropTypes.bool,
    onChange:PropTypes.func,
    value:PropTypes.instanceOf(Date),
}