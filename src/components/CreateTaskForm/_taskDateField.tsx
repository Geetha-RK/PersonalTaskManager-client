import { FC, ReactElement,useState } from 'react';
//npm i @mui/x-date/pickers from mui for date picker field
//npm i date-fns
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { TextField } from '@mui/material';

export const TaskDateField: FC = ():ReactElement => {
    //state for Desktop Date Picker
    const [date,setDate] = useState<Date | null>(null);
    return (
        <>
            <LocalizationProvider
                dateAdapter={AdapterDateFns}
            >
                <DesktopDatePicker 
                    label="Task Date"
                    inputFormat="dd/MM/yyyy"
                    value={date}
                    onChange={(newValue)=>setDate(newValue)}
                    renderInput={(params)=>(
                                            <TextField{...params}/>
                                    )}/>
            </LocalizationProvider>
        </>
    )
}