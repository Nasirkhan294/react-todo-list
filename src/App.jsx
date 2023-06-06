import Header from './Header';
import TodosLogic from './TodosLogic';

function App() {

  return (
    <div className="container">
      <div className="todos">
        <Header />
        <TodosLogic />
      </div>
    </div>
  )
}

export default App
