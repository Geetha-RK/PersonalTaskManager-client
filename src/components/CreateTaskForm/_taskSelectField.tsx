import { FC, ReactElement } from 'react';
//Select component from material UI:
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
//import interfaces:
import { ISelectField } from './Interfaces/ISelectField';
//to sent the values as props from react component using the typecheck of PropTypes
import PropTypes from 'prop-types';

export const TaskSelectField: FC<ISelectField> = (
    props,
):ReactElement => {
    //Destructure props with its default values
    const { value = '',
            label = 'Select Box',
            name = 'selectBox',
            items = [{value:"",label:"Add Items"}],
            disabled=false,
            onChange=(e:SelectChangeEvent)=>console.log(e) } = props;
    return ( 
        <FormControl fullWidth size="small">
            <InputLabel id={`${name}-id`}>{label}</InputLabel>
            <Select
                labelId={`${name}-id`}
                id={`${name}-id-select`}
                value={value}
                label={label}
                name={name}
                onChange={onChange}
                disabled={disabled}
                >
                {/* map thru the items array of obejcts and pass it to the menuitem */}
                {
                    items.map((item,index)=>(
                        <MenuItem key={item.value + index} value={item.value}>{item.label}</MenuItem>
                    ))
                }
            </Select>
        </FormControl>
    );
}

TaskSelectField.propTypes = {
    onChange: PropTypes.func,
    label: PropTypes.string,
    name:PropTypes.string,
    disabled:PropTypes.bool,
    items: PropTypes.arrayOf(
        PropTypes.shape({
            value:PropTypes.string.isRequired,
            lable:PropTypes.string.isRequired,
        }).isRequired,
    ),

}