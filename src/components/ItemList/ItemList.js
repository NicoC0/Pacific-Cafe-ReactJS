import React from 'react'
import Item from '../Item/Item'
import CircularProgress from '@mui/material/CircularProgress'

const ItemList = (props) => {

    const { itemArray } = props;

    return (
        <div className="listContainer">
            {itemArray.length !== 0 ? (
                itemArray.map((item) => {
                    return <Item key={item.id} id={item.id} title={item.title} price={item.price} description={item.description} image={item.image}   />
                })
            ) : (<CircularProgress className="circularProgress" sx={{ color: "black" }} />)}
        </div>
    )
}

export default ItemList;