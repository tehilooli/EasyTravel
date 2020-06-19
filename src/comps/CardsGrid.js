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
                                title={card.title}
                                subheader={card.subheader}
                                image={card.image}
                                firstInfo={card.firstInfo}
                                moreInfo={card.moreInfo}
                                uniqueId={card.uniqueId}>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </div>
        );
    }
}