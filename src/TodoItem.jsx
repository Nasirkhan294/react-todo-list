import PropTypes from 'prop-types';

const TodoItem = ({ itemProp, handleChange, delTodo }) => {
	const completedSyles = {
		fontStyle: 'italic',
		color: '#595959',
		opacity: 0.4,
		textDecoration: 'line-through',
	}
	return (
		<li className='item'>
			<div className="content">
				<input
					type="checkbox"
					checked={itemProp.completed}
					onChange={() => handleChange(itemProp.id)}
				/>
				<button onClick={() => delTodo(itemProp.id)}>Delete</button>
				<span style={itemProp.completed ? completedSyles : null}>
					{itemProp.title}
				</span>
			</div>
		</li>
	)
}

TodoItem.propTypes = {
	itemProp: PropTypes.object.isRequired,
	handleChange: PropTypes.func.isRequired,
	delTodo: PropTypes.func.isRequired,
}

export default TodoItem