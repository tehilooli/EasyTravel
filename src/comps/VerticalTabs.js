import React from 'react';
import Flights from './Flights';
import WhereToStay from './WhereToStay';
import Attractions from './Attractions';
import Restaurants from './Restaurants';
import Facts from './Facts';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { lightBlue } from '@material-ui/core/colors';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
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
    panels: {
        outline: 'none!important'
    }
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
                <Tab label={props.optionsList[0]} className={classes.panels} {...a11yProps(0)} />
                <Tab label={props.optionsList[1]} className={classes.panels} {...a11yProps(1)} />
                <Tab label={props.optionsList[2]} className={classes.panels} {...a11yProps(2)} />
                <Tab label={props.optionsList[3]} className={classes.panels} {...a11yProps(3)} />
                <Tab label={props.optionsList[4]} className={classes.panels} {...a11yProps(4)} />
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
                <Restaurants currentCity={props.selectedCity}></Restaurants>
            </TabPanel>
            <TabPanel value={value} index={4}>
                <Facts currentCity={props.selectedCity}></Facts>
            </TabPanel>
        </div>
    );
}