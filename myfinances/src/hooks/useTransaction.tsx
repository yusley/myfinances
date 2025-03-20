import { createContext, useState, useEffect, ReactNode, useContext } from "react";
import { api } from "../services/api";
import { useCookies } from "react-cookie";
interface Transaction {
    id: string
    title: string
    price: string
    type: string
    categoryId: string
    userId: string
    created_at: Date
    updated_at: Date
}

export type TransactionInput = Omit<Transaction, 'id' | 'created_at' | 'updated_at'>

interface TransactionsProviderProps {
    children: ReactNode
}

interface TransactionContextData {
    transactions: Transaction[];
    createTransaction: (transaction: TransactionInput) => Promise<void>;
}

export const TransactionsContext = createContext<TransactionContextData>(
    {} as TransactionContextData
);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
    const [cookies] = useCookies();
    const [transactions, setTransactions] = useState<Transaction[]>([]);


    useEffect(() => {
      api.get('transactions', {headers:{'Authorization': `Bearer ${cookies.token}`}})
        .then(response => {
          console.log(response.data)
          setTransactions(response.data)
        })
    }, []);
  
    async function createTransaction(transactionInput: TransactionInput) {
      console.log(cookies.token)
      const response = await api.post('/transactions',{...transactionInput}, {
        headers:{'Authorization': `Bearer ${cookies.token}`}
      });
      const transaction  = response.data;
      console.log(response.data)
      setTransactions([
        ...transactions,
        transaction,
      ]);

    }
  
    return (
      <TransactionsContext.Provider value={{
        transactions,
        createTransaction
      }}>
        {children}
      </TransactionsContext.Provider>
    )

}


export const useTransactions = () =>{
  const contex = useContext(TransactionsContext)
  return contex
}