import React, { FC, ReactElement } from 'react';
//Select component from material UI:
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export const TaskSelectField: FC = ():ReactElement => {
    return ( 
        <FormControl fullWidth size="small">
            <InputLabel id="status">Status</InputLabel>
            <Select
                labelId="status"
                id="status-select"
                value=""
                label="Status"
                name="status"
            >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={10}>Twenty</MenuItem>
                <MenuItem value={10}>Thirty</MenuItem>
            </Select>
        </FormControl>
    );
}