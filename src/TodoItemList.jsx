import './App.css';

const TodoItem = props => {
  return (
    <ul className='list'>
      {
        props.itemList.map(item => {
          return (
            <li key={item.id}>
              <label>
                <input type='checkbox'/>
                {item.name}
              </label>
              <button className='btn btn-danger' onClick={() => props.deleteItemHander(item.id)}>Delete</button>
            </li>
          )
        })
      }
    </ul>
  )
};

export default TodoItem;