import React, { Component } from 'react';
import '../App.css';
import { connect } from 'react-redux'
import items from "../selectors/items";
import { match } from "react-router";

interface OwnProps {
    items: Array<Item>
    match: match<{pageNumber: string | undefined}>
}

class Home extends Component<OwnProps> {
    render() {
        const { items } = this.props
        return (
            <ul>
            {items.map((item) => (
                <React.Fragment>
                    <li>
                        <img src={item.image} title={item.description}/>
                        {item.price}
                    </li>
                </React.Fragment>
            ))}
        </ul>
        );
    }
}

const mapStateToProps = (state: State, ownProps: OwnProps) => {
    return {
        items: items(state, ownProps.match)
    }
}

export default connect(mapStateToProps)(Home);