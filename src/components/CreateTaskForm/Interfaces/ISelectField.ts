import { IDisabled } from "./IDisabled";
import {  SelectChangeEvent } from '@mui/material'; //return type of event in Select component of material ui

export interface ISelectItems {
    //interface for Menu item. have the menu item as object and pass the values as properties.
    value: string;
    label: string;
}   
export interface ISelectField extends IDisabled{
    name?: string;
    label?: string;
    value?: string;
    onChange?: (e: SelectChangeEvent) => void;
    items: ISelectItems[] //Array of Obejcts of shape ISelectItems;
}