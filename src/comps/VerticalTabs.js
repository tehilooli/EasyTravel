import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Flights from './Flights';
import WhereToStay from './WhereToStay';
import Attractions from './Attractions';
import Restaurants from './Restaurants';
import { lightBlue } from '@material-ui/core/colors';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            style={{ height: "1000px" }}
            {...other}
        >
            {value === index && (
                <Box width={950}>
                    <Typography component={'span'}>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: lightBlue,
        display: 'flex',
        height: 224,
    },
    tabs: {
        borderRight: `1px solid ${theme.palette.divider}`,
    },
}));

export default function VerticalTabs(props) {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <Tabs
                orientation="vertical"
                variant="scrollable"
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                className={classes.tabs}
                style={{ height: "1000px" }}
            >
                <Tab label={props.optionsList[0]} {...a11yProps(0)} />
                <Tab label={props.optionsList[1]} {...a11yProps(1)} />
                <Tab label={props.optionsList[2]} {...a11yProps(2)} />
                <Tab label={props.optionsList[3]} {...a11yProps(3)} />
            </Tabs>
            <TabPanel value={value} index={0}>
                <Flights></Flights>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <WhereToStay></WhereToStay>
            </TabPanel>
            <TabPanel value={value} index={2}>
                <Attractions currentCity={props.selectedCity}></Attractions>
            </TabPanel>
            <TabPanel value={value} index={3}>
                <Restaurants></Restaurants>
            </TabPanel>
        </div>
    );
}