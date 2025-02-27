import { createContext, useState, useEffect, ReactNode, useContext } from "react";
import { api } from "../services/api";

interface Transaction {
    id: string
    price: string
    categoryId: string
    userId: string
    created_at: Date
    updated_at: Date
}

type TransactionInput = Omit<Transaction, 'id' | 'created_at' | 'updated_at'>

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
    const [transactions, setTransactions] = useState<Transaction[]>([]);
  
    useEffect(() => {
      api.get('transactions')
        .then(response => setTransactions(response.data.transactions))
    }, []);
  
    async function createTransaction(transactionInput: TransactionInput) {
      const response = await api.post('/transactions', {
        ...transactionInput
      });
      const { transaction } = response.data;
  
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