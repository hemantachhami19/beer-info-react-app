import React from 'react';
import Item from './Item';

const ItemsList = ({items}) => {
    return (<div className='custom-container'>
        {items && items.map(item => <Item value={item}/>)}
    </div>)
};

export default ItemsList;
