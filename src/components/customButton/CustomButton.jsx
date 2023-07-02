import React from 'react';
import style from './CustomButton.module.css';
import { Button } from '@mui/material';

const CustomButton = ({ text = "button", func = () => { } }) => {
    return (
        <Button variant="contained" color='secondary' onClick={() => func()}>{text}</Button>
    )
}

export default CustomButton;