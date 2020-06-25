import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export default class WhereToStay extends Component {
    render() {
        return (
            <div className="EasyTravel">
                <form className="EasyTravel" noValidate autoComplete="off">
                    <TextField id="filled-basic" label="Where To?" variant="filled" />
                    <br></br>
                    <br></br>
                    <TextField
                        id="date"
                        label="Check In"
                        type="date"
                        defaultValue="2020-12-24"
                        className="whiteBackground"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <br></br>
                    <br></br>
                    <TextField
                        id="date"
                        label="Check Out"
                        type="date"
                        defaultValue="2020-12-29"
                        className="whiteBackground"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <br></br>
                    <br></br>
                    <label htmlFor="exampleFormControlSelect1">Number of Guests</label>
                    <select className="form-control" id="exampleFormControlSelect1">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                        <option>7</option>
                        <option>8</option>
                    </select>
                </form>
                <br></br>
                <br></br>
                <Button variant="contained" color="primary" href="https://www.booking.com/">Search</Button>
            </div>
        );
    }
}