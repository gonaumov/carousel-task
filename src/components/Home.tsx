import React, { useEffect } from 'react';
import '../App.css';
import { connect } from 'react-redux'
import items from "../selectors/items"
import disabled from "../selectors/disabled"
import { match } from "react-router"
import  Links  from './Links'
import { updateItemsPerPage } from "../actions/actions"

interface OwnProps {
    items: Array<Item>
    match: match<{pageNumber: string | undefined}>
    disabled: disabled
}

interface TDispatchProps {
    updateItemsPerPage: any
}

const Home: React.FunctionComponent<OwnProps & TDispatchProps> = (props) => {
    const { items, match, disabled, updateItemsPerPage } = props

    useEffect(() => {
        const changeItemsPerPage = () => {
            if(window.innerWidth <= 800 || window.innerHeight <= 600) {
                updateItemsPerPage(1)
            } else {
                updateItemsPerPage(4)
            }   
        }

        window.addEventListener('resize', changeItemsPerPage);

        changeItemsPerPage()

        return () => {
            window.removeEventListener('resize', changeItemsPerPage);
        }
    })

    return (
        <>
        <Links {...{disabled, match}} />
        <div className='carousel-holder'>
            <ul>
            {items.map((item, index) => (
                <React.Fragment key={(new Date()).getTime() + 'key' + index}>
                    <li>
                        <img src={item.image} alt={item.description} title={item.description}/>
                    </li>
                </React.Fragment>
            ))}
            </ul>
        </div>
       </>
   )
}

const mapStateToProps = (state: State, ownProps: OwnProps) => {
    return {
        items: items(state, ownProps.match),
        disabled: disabled(state, ownProps.match)
    }
}

const mapDispatchToProps = (dispatch: any) => ({
    updateItemsPerPage: (itemsPerPage: number) => {
      dispatch(updateItemsPerPage(itemsPerPage))
    }
})


export default connect(mapStateToProps, mapDispatchToProps)(Home);