import * as React from 'react'
import { match } from 'react-router'
import { Link } from 'react-router-dom'

interface LinksProps {
    disabled: disabled
    match: match<{pageNumber: string | undefined}>
}

const Links: React.SFC<LinksProps> = (props) => {
    const {disabled, match} = props
    return (<>
    <div className='pagination-holder'>
    {disabled.previous ? 
       <span className='App-link-disabled'>Previous</span> : 
       <Link to={'/' + ((match.params.pageNumber ? parseInt(match.params.pageNumber, 10) : 1) -1) }>
    Previous
   </Link>}
   {disabled.next ? <span className='App-link-disabled'>Next</span> : <Link to={'/' + ((match.params.pageNumber ? parseInt(match.params.pageNumber, 10) : 1) + 1) }>
   Next
   </Link>}
   </div>
   </>
   )
}

export default Links