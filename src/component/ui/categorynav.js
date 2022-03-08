import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

import CategoryList from "./categorylist.js";

export default function SwipeableTemporaryCategoryDrawer() {
  const [state, setState] = React.useState({
    Category: false,
   
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

const categories=[{
    name:"All",
    id:0
},{
    name:"Electronics",
    id:1
},{
    name:"Fashion",
    id:2
},{
    name:"Home & Garden",
    id:3
},{
    name:"Sports & Fitness",
    id:4
},{
    name:"Books & Media",
    id:5
},{
    name:"Health & Beauty",
    id:6
},{
    name:"Toys & Games",
    id:7
},{
    name:"Automotive",
    id:8
},{
    name:"Baby & Kids",
    id:9
},{
    name:"Clothing & Shoes",
    id:10

}]

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
        <h3 className="text-center mt-3 pt-4 font-serif">Hello Sign in</h3>
        <hr/>
      <div style={{ marginLeft:"10px",justifyContent:"center" ,alignItems: "center" ,align:"center" }}><CategoryList categories={categories}/></div>
    </Box>
  );

  return (
    <div>
      {['Category'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}
