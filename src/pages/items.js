import React from 'react'

import {useParams,useNavigate,useLocation,NavLink} from "react-router-dom";

function Items() {

    let history=useNavigate();
    console.log(history)
    let location=useLocation();
    console.log(location)
    // let router=useRouteMatch();
    // console.log(router.path,router.url)
    let  slugs=20
    let { id } = useParams();
  console.log(id)
    return (
        <div>
            Now showing post {id}
               <h2>this is a items page</h2>
               <NavLink to={`/items/${slugs}`}> <h2>items</h2></NavLink>

        </div>
    )
}

export default Items;
