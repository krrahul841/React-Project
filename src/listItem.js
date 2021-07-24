import React from 'react';
import './listItem.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css'

function ListItems(props){
    const items = props.items;
    const ListItems = items.map(item =>
        {
             return <div className="list" key={item.key}>
                 <p>
                 <input type="text" id={item.key} value={item.text} onChange={
                        (e) => {
                            props.setUpdate(e.target.value, item.key)
                        }
                 }></input>
                 <span><i className="bi bi-trash-fill" 
                 onClick={ () => props.deleteItem(item.key)}></i></span></p>
                 
             </div>
        }
        )
    return(
        <div>{ListItems}</div>
        
    )
}
export default ListItems;