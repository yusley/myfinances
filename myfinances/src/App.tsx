
import './App.css'
import { useState } from 'react';
import { ModalComponent } from './components/modal';
import { HeaderComponent } from './components/header';
import { CardsComponent } from './components/cards';
import { TableComponent } from './components/table';
import { TransactionsProvider } from './hooks/useTransaction';

function App() {

  
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal(){
    setIsOpen(true)
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <TransactionsProvider>
      <div className="w-full h-full">
        
        <ModalComponent isOpen={modalIsOpen} closeModal={closeModal}/>
        
        <HeaderComponent openModal={openModal}/>

        <CardsComponent/>  

        <TableComponent/>
        
      </div>
    </TransactionsProvider>
  )
}

export default App
