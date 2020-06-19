import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';

export default class Flights extends Component {
    render() {
        return (
            <div className="EasyTravel">
                <form className="EasyTravel" noValidate autoComplete="off">
                    <TextField id="filled-basic" label="From" variant="filled" />
                    <br></br>
                    <br></br>
                    <TextField id="filled-basic" label="To" variant="filled" />
                    <br></br>
                    <br></br>
                    <TextField
                        id="date"
                        label="Depart"
                        type="date"
                        defaultValue="2017-05-24"
                        className="EasyTravel"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <br></br>
                    <br></br>
                    <TextField
                        id="date"
                        label="Return"
                        type="date"
                        defaultValue="2017-05-24"
                        className="EasyTravel"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <br></br>
                    <br></br>
                    <InputLabel id="label">Number of Passangers</InputLabel>
                    <Select labelId="label" id="select" value="">
                        <MenuItem value="1">1</MenuItem>
                        <MenuItem value="2">2</MenuItem>
                        <MenuItem value="3">3</MenuItem>
                        <MenuItem value="4">4</MenuItem>
                        <MenuItem value="5">5</MenuItem>
                        <MenuItem value="6">6</MenuItem>
                        <MenuItem value="7">7</MenuItem>
                        <MenuItem value="8">8</MenuItem>
                    </Select>
                </form>
                <br></br>
                <br></br>
                <Button variant="contained" color="primary">Search Flight</Button>
            </div>
        );
    }
}