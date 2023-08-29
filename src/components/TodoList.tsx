import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import ListGroup from 'react-bootstrap/ListGroup';




const TodoList = () => {
    const todos = ["Buy groceries", "Clean the house", "Walk the Dog"];
    const isEmpty = todos.length === 0;
    const [selectedIdx, setSelectedIdx] = useState<number | null>(null);
    
    return(
        <div style={{ display: 'block', width: 700, padding: 30 }}>
        <h2>To-Do List</h2>
        {isEmpty ? (
        <p>No to-dos at this moment.</p>
      ) : (
        <ListGroup className="list-group">
          {todos.map((todo, index) => (
            <ListGroup.Item key={index}  className={`list-group-item ${selectedIdx === index ? 'active' : ''}`}
            onClick={() => setSelectedIdx(index)}>
              {todo}
            </ListGroup.Item>
          ))}
        </ListGroup>
      )}
      </div>
    )

 

}

export default TodoList;