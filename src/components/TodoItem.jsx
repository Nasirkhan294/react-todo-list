import PropTypes from 'prop-types';
import { useState,useRef } from 'react';
import { FaTrash } from "react-icons/fa";
import { AiFillEdit } from "react-icons/ai";


const TodoItem = ({ itemProp, handleChange, delTodo, setUpdate }) => {
	const [editing, setEditing] = useState(false);
	const editInputRef = useRef(null);

	const completedSyles = {
		fontStyle: 'italic',
		color: '#595959',
		opacity: 0.4,
		textDecoration: 'line-through',
	}

	const handleEditing = () => {
		setEditing(true);
	}

	let viewMode = {};
	let editMode = {};
	if (editing) {
		viewMode.display = 'none';
	} else {
		editMode.display = 'none';
	}

	const handleUpdatedDone = (event) => {
		if (event.key === 'Enter') {
			setUpdate(editInputRef.current.value, itemProp.id);
			setEditing(false);
		}
	};

	return (
		<li className='item'>
			<div className="content" style={viewMode}>
				<input
					type="checkbox"
					checked={itemProp.completed}
					onChange={() => handleChange(itemProp.id)}
				/>
				<button onClick={handleEditing}>
					<AiFillEdit style={{ color: "#5e5e5e", fontSize: "16px" }} />
				</button>
				<button onClick={() => delTodo(itemProp.id)}>
					<FaTrash style={{ color: "#5e5e5e", fontSize: "16px" }} />
				</button>
				<span style={itemProp.completed ? completedSyles : null}>
					{itemProp.title}
				</span>
			</div>
			<input
				type="text"
				ref={editInputRef}
				defaultValue={itemProp.title}
				className='textInput'
				style={editMode}
				onKeyDown={handleUpdatedDone}
			/>
		</li>
	)
}

TodoItem.propTypes = {
	itemProp: PropTypes.object.isRequired,
	handleChange: PropTypes.func.isRequired,
	delTodo: PropTypes.func.isRequired,
	setUpdate: PropTypes.func.isRequired,
}

export default TodoItem