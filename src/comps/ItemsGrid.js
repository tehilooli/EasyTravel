import React, { Component } from 'react';
import Item from './Item';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

export default class ItemsGrid extends Component {
    render() {
        return (
            <div>
                <List>
                    {this.props.cardsList.map((card) => (
                        <ListItem>
                            <Item
                                title={card[2]}
                                subheader={card[3]}
                                image={card[4]}
                                firstInfo={card[5]}
                                moreInfo={card[6]}
                                uniqueId={card[1]}>
                            </Item>
                        </ListItem>
                    ))}
                </List>
            </div>
        )
    }
}