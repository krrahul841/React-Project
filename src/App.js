import React  from 'react';
import logo from './logo.svg';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css'
import './App.css';
import ListItems from './listItem';

class App extends React.Component
{
  constructor(props){
    super(props);
    this.state={
      items:[],
      currentItems:{
        text:'',
        key:''
      }
    }
    this.handleInput  = this.handleInput.bind(this);
    this.addItem  = this.addItem.bind(this);
    this.deleteItem  = this.deleteItem.bind(this);
    this.setUpdate  = this.setUpdate.bind(this);
  }
  handleInput(e){
    this.setState({
      currentItems:{
        text:e.target.value,
        key:Date.now()
      }
    })
  }
addItem(e){
  e.preventDefault();
  const newItem = this.state.currentItems;
  console.log(newItem)
  if(newItem.text!==""){
    const newItems = [...this.state.items, newItem]
    this.setState({
      items:newItems,
      currentItems:
      {
        text:'',
        key:''
      }
    })
  }
}
deleteItem(key){
  const filteredItem = this.state.items.filter(item => item.key!==key);
  this.setState(
    {
      items:filteredItem
    }
  )
}
setUpdate(text,key){
  const items = this.state.items;
  items.map(item => {
    if(item.key==key){
      item.text = text;
    }
  })
  this.setState({
    items:items
  })
}
  render(){
    return (
      <div className="App">
        <header>
        <form id="todo-list" onSubmit={this.addItem}> 
          <input type="text" placeholder="Enter Text" value={this.state.currentItems.text}
          onChange={this.handleInput}></input>
          <button type="submit" className="btn btn-warning bg-warning text-white">Add</button>
         </form>
      </header>
      <ListItems items={this.state.items} deleteItem = {this.deleteItem} setUpdate={this.setUpdate}></ListItems>
      </div>
    );
  }
  

}
export default App;
