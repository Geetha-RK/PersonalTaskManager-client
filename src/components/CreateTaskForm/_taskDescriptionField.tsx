import { FC, ReactElement } from 'react';
import { TextField } from '@mui/material';
import { ITextField } from './Interfaces/ITextField';

export const TaskDescriptionField: FC<ITextField> = (
    props,
):ReactElement => {

     //Destructure the props with Default value for onchange and disabled props
     const { onChange= (e)=>console.log(e), disabled=false } = props;

    return (
        <TextField
            id="description"
            name="description"
            label="Description"
            placeholder='Description'
            variant="outlined"
            size="small"
            multiline
            rows={4}
            fullWidth
            onChange={onChange}
            disabled={disabled}
        />
    )
};