import React from 'react';

//fc means this is a functional component
const Todos: React.FC<{items: string[]}> = (props) => {
    return (
        <ul>
            {props.items.map(item => <li>{item}</li>)}
        </ul>
    );
};

export default Todos;
