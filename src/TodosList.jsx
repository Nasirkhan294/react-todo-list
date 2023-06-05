import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

const TodosList = ({ todosProps }) => {

	return (
		<ul>
			{todosProps.map((todo) => (
				<TodoItem itemProp={todo} key={todo.id}/>
			))}
		</ul>
	);
};

TodosList.propTypes = {
	todosProps: PropTypes.array.isRequired,
}

export default TodosList;
