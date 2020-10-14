import React, { Component } from 'react';
import Card from './Card';
import Grid from '@material-ui/core/Grid';

export default class CardsGrid extends Component {
    render() {
        return (
            <div className="EasyTravel">
                <Grid container spacing={7} justify="center">
                    {this.props.cardsList.map((card) => (
                        <Grid container item xs={12} sm={4} md={4} lg={4} spacing={3} key={card.uniqueId}>
                            <Card
                                title={card[2]}
                                subheader={card[3]}
                                image={card[4]}
                                firstInfo={card[5]}
                                moreInfo={card[6]}
                                uniqueId={card[0]}>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </div>
        );
    }
}