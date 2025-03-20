
import './App.css'
import { TransactionsProvider } from './hooks/useTransaction';
import { Home } from './pages/Home';
import { AuthProvider } from './hooks/useAuth';
import { CookiesProvider } from 'react-cookie';

function App() {

  return (
    <TransactionsProvider>
      
        <Home/>
      
    </TransactionsProvider>
  )
}

export default App
