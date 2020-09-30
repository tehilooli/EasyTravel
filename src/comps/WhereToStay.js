import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        margin: "20px",
    },
    button: {
        marginRight: theme.spacing(1),
    },
    instructions: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },
}));

function getSteps() {
    return ['Where to?', 'When do you want to go?', 'How many guests?'];
}

export default function WhereToStay() {

    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const [location, setLocation] = React.useState(0);
    const [checkInDate, setCheckInDate] = React.useState(0);
    const [checkOutDate, setCheckOutDate] = React.useState(0);
    const [guests, setGuests] = React.useState(0);
    const steps = getSteps();

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    const handleLocationSearch = (event) => {
        setLocation(event.target.value);
    }

    const handleCheckInDate = (event) => {
        setCheckInDate(event.target.value);
    }

    const handleCheckOutDate = (event) => {
        setCheckOutDate(event.target.value);
    }

    const handleGuests = (event) => {
        setGuests(event.target.value);
    }

    const getStepContent = (step) => {
        switch (step) {
            case 0:
                return (
                    <div>
                        <br></br>
                        <br></br>
                        <TextField id="filled-basic" label="Choose a location" variant="filled" onChange={handleLocationSearch}/>
                    </div>
                );
            case 1:
                return (
                    <div>
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
                            onChange={handleCheckInDate}
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
                            onChange={handleCheckOutDate}
                        />
                    </div>
                );
            case 2:
                return (
                    <div>
                        <br></br>
                        <br></br>
                        <select className="form-control" id="exampleFormControlSelect1" onChange={handleGuests}>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                            <option>7</option>
                            <option>8</option>
                        </select>
                    </div>
                );
            default:
                return 'Unknown step';
        }
    }

    return (
        <div className={classes.root}>
            <Stepper activeStep={activeStep}>
                {steps.map((label, index) => {
                    const stepProps = {};
                    const labelProps = {};
                    return (
                        <Step key={label} {...stepProps}>
                            <StepLabel {...labelProps}>{label}</StepLabel>
                        </Step>
                    );
                })}
            </Stepper>
            <div>
                {activeStep === steps.length ? 
                (
                    <div>
                        <br></br>
                        <br></br>
                        {/*<Typography className={classes.instructions}>All steps completed - you&apos;re finished</Typography>*/}
                        <Typography className={classes.instructions}>
                            You chose to travel to: {location}
                            <br></br>
                            The dates of your trip are from {checkInDate} to {checkOutDate}
                            <br></br>
                            The number of guests is: {guests}
                        </Typography>
                        <br></br>
                        <Button variant="contained" color="primary" href="https://www.booking.com/">Search</Button>
                        <br></br>
                        <br></br>
                        <Button onClick={handleReset} className={classes.button}>Reset</Button>
                    </div>
                ) 
                : (
                    <div>
                        <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
                        <div>
                            <br></br>
                            <br></br>
                            <Button disabled={activeStep === 0} onClick={handleBack} className={classes.button}>Back</Button>
                            <Button variant="contained" color="primary" onClick={handleNext} className={classes.button}>
                                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                            </Button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}


/*export default class WhereToStay extends Component {
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
}*/