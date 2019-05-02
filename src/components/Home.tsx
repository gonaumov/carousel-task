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
            {items.map((item, index) => (
                <React.Fragment key={(new Date()).getTime() + index}>
                    <li>
                        <img src={item.image} alt={item.description} title={item.description}/>
                        {item.description}
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