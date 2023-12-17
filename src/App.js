import './App.css';
import Balance from './components/Balance';
import Header from './components/Header';
import TransactionList from './components/TransactionList';
import IncomeExpenses from './components/incomeExpenses';
function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Balance/>
        <IncomeExpenses/>
        <TransactionList/>
      </div>
    </div>
  );
}

export default App;
