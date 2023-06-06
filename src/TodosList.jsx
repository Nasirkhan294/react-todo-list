import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

const TodosList = ({ todosProps, handleChange, delTodo }) => {

	return (
		<ul>
			{todosProps.map((todo) => (
				<TodoItem
					itemProp={todo}
					key={todo.id}
					handleChange={handleChange}
					delTodo={delTodo}
				/>
			))}
		</ul>
	);
};

TodosList.propTypes = {
	todosProps: PropTypes.array.isRequired,
	handleChange: PropTypes.func.isRequired,
	delTodo: PropTypes.func.isRequired,
}

export default TodosList;
