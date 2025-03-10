
import './App.css'
import { TransactionsProvider } from './hooks/useTransaction';
import { Home } from './pages/Home';
import { AuthProvider } from './hooks/useAuth';

function App() {

  return (
    <TransactionsProvider>
      
        <Home/>
      
    </TransactionsProvider>
  )
}

export default App
