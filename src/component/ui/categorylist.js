import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import {Container} from "react-bootstrap";
import {Link,NavLink} from "react-router-dom";
export default function CategoryList({
  categories,
  selectedCategory,
  onCategoryClick,
}) {
  return (
    <List
      sx={{
        width: "100%",
        maxWidth: 360,
        bgcolor: "background.paper",
        position: "relative",
        overflow: "auto",
        maxHeight: "auto",
        "& ul": { padding: 5 },
      }}
      subheader={<li />}
    >
      {categories.map((cat) => (
        <li key={`section-${cat.id}`}>
          <Container className="text-center ml-4 justify-center">
            {" "}
            <ListItem key={cat.id}>
                <NavLink to={`category-${cat.id}`} style={({ isActive }) => {
              return {
                display: "block",
                hover: true,
                color: isActive ? "red" : "gray",
              };
            }}>
           
               <ListItemText primary={cat.name} /></NavLink>
             
            </ListItem>
          </Container>
        </li>
      ))}
    </List>
  );
}
