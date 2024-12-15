import { FC, ReactElement } from 'react';
import { TextField } from '@mui/material';
import { ITextField } from './Interfaces/ITextField';


//TaskTitleField is accepting two props form ITextField and IDisabled interfaces. to make it dynamic
export const TaskTitleField: FC<ITextField> = (
    props,
):ReactElement => {

    //Destructure the props with Default value for onchange and disabled props
    const { onChange= (e)=>console.log(e), disabled=false } = props;


    return (
        <TextField
            id="title"
            label="Task Title"
            placeholder="Task Title"
            variant="outlined"
            size="small"
            name="title"
            fullWidth
            disabled={disabled}
            onChange={onChange} // onchange prop is used here for type
        />
    )
};