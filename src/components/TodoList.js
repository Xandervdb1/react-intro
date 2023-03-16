const TodoList = () => {
    return(
      <div className='todoList'>
        <h2>Todos</h2>
        <ul>
          <div className='todoItem'>
            <input type='checkbox'></input>
            <li>Learn React</li>
          </div>
          <div className='todoItem'>
            <input type='checkbox'></input>
            <li>Be awesome</li>
          </div>
          <div className='todoItem'>
            <input type='checkbox'></input>
            <li>Style this page</li>
          </div>
        </ul>
      </div>
    );
}

export {TodoList};