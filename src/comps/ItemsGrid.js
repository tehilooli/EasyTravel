import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Item from './Item';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

/*<div className="EasyTravel">
                <Grid container spacing={7}>
                    {this.props.cardsList.map((card) => (
                        <Grid container item xs={12} sm={4} md={4} lg={4} spacing={3} key={card.uniqueId}>
                            <Item
                                title={card.title}
                                subheader={card.subheader}
                                image={card.image}
                                firstInfo={card.firstInfo}
                                moreInfo={card.moreInfo}
                                uniqueId={card.uniqueId}>
                            </Item>
                        </Grid>
                    ))}
                </Grid>
            
            </div>*/

export default class ItemsGrid extends Component {
    render() {
        return (
            <div>
                <List>
                    {this.props.cardsList.map((card) => (
                        <ListItem>
                            <Item
                                title={card.title}
                                subheader={card.subheader}
                                image={card.image}
                                firstInfo={card.firstInfo}
                                moreInfo={card.moreInfo}
                                uniqueId={card.uniqueId}>
                            </Item>
                        </ListItem>
                    ))}
                </List>
            </div>
        )
    }
}

/*
<List component="nav" aria-label="mailbox folders">
                {this.props.cardsList.map((card) => (
                    <ListItem button>
                        <Item
                            title={card.title}
                            subheader={card.subheader}
                            image={card.image}
                            firstInfo={card.firstInfo}
                            moreInfo={card.moreInfo}
                            uniqueId={card.uniqueId}>
                        </Item>
                    </ListItem>
            </List>
            */