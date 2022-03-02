import {
    FormControl,
    FormControlLabel,
    FormLabel,
    Grid,
    Paper,
    Radio,
    RadioGroup,
} from '@mui/material';

import React from 'react';
import {useProducts} from "../../contexts/ProductContext"
import "./SideBar.css"
const SideBar = () => {
    const { fetchByParams } = useProducts();
    return (
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 1}}>
            <Paper>
                <FormControl>
                    <FormLabel>Filter by:</FormLabel>
                    <RadioGroup  onChange={(e) => fetchByParams('type', e.target.value)}>
                        <FormControlLabel
                            value="sunglasses"
                            control={<Radio />}
                            label="eyeglasses"
                        />
                        <FormControlLabel
                            value="eyeglasses"
                            control={<Radio />}
                            label="sunglasses"
                        />
                        <FormControlLabel value="all" control={<Radio />} label="all" />
                    </RadioGroup>
                </FormControl>
            </Paper>
        </Grid>
    );
};

export default SideBar;
