import React, { Component } from 'react';
import '../App.css';
import { connect } from 'react-redux'
import items from "../selectors/items"
import disabled from "../selectors/disabled"
import { match } from "react-router"
import  Links  from './Links'

interface OwnProps {
    items: Array<Item>
    match: match<{pageNumber: string | undefined}>
    disabled: disabled
}


class Home extends Component<OwnProps> {
    render() {
        const { items, match, disabled } = this.props
        return (
            <>
            <Links {...{disabled, match}} />
            <div className='carousel-holder'>
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
            </div>
           </>
        );
    }
}

const mapStateToProps = (state: State, ownProps: OwnProps) => {
    return {
        items: items(state, ownProps.match),
        disabled: disabled(state, ownProps.match)
    }
}

export default connect(mapStateToProps)(Home);