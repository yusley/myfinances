import { useState,FormEvent, useEffect } from 'react';
import Modal from 'react-modal'
import { useTransactions } from '../hooks/useTransaction';
import { api } from '../services/api';


interface CategoryInterface {
  id: string
  title: string
  created_at: string
  updated_at: string
}

interface ModalComponentInterface {
  isOpen: boolean,
  closeModal : () => void;
}


export function ModalComponent ({...props}: ModalComponentInterface) {

    const [categoryes,setCategoryes] = useState([])
    

    useEffect(() => {
      
      const listCategoryes = api.get('category')
      .then((response) => setCategoryes(response.data))
      

    },[])

    const {createTransaction} = useTransactions();

    const handleCreateTransaction = (event:FormEvent) => {
      event.preventDefault()


    }

    return (
        <Modal isOpen={props.isOpen}
        overlayClassName="dark-overlay fixed inset-0 bg-black flex items-center justify-center"
        className="bg-white p-6 rounded-lg shadow-lg max-w-xl w-full mx-4"
        onRequestClose={props.closeModal}
        contentLabel="Example Modal">
        
          <div className="body-modal p-[1rem]">
            <div className="w-full flex flex-row-reverse">
              <button className='text-[20px] cursor-pointer' onClick={props.closeModal}>
              <img src="./public/close.svg" alt="" />
              </button>
            </div>

            <div className="title">
              <h2 className='my-[1.5rem] text-[24px] font-semibold font-[#363F5F]'>Cadastrar transação</h2>
            </div>

            <div className="form">
              <input className='w-full p-[1rem] border-[1px] border-[#D7D7D7] rounded-[0.3rem] my-[0.5rem]' placeholder="Nome" type="text" />
              <input className='w-full p-[1rem] border-[1px] border-[#D7D7D7] rounded-[0.3rem] my-[0.5rem]' placeholder="Título" type="text" />
              <div className="flex my-[0.5rem] gap-[10px] justify-between">
                <div className="entrada w-[50%] p-[1rem] flex gap-[1rem] justify-center items-center border-[1px] border-[#D7D7D7] rounded-[0.3rem] cursor-pointer">
                  <img src="./public/Entradas.svg" alt=""/>
                  <p>Entrada</p>
                </div>
                <div className="saida w-[50%] p-[1rem] flex gap-[1rem] justify-center items-center border-[1px] border-[#D7D7D7] rounded-[0.3rem] cursor-pointer">
                  <img src="./public/Saídas.svg" alt=""/>
                  <p>Saída</p>
                </div>
              </div>
              <select className='w-full p-[1rem] flex gap-[1rem] justify-center items-center border-[1px] border-[#D7D7D7] rounded-[0.3rem] ' name="" id="">
                {categoryes.map((el:CategoryInterface) => (
                  <option value={el.id}>{el.title}</option>
                ))}
                
              </select>
              <input className='w-full p-[1rem] border-[1px] border-[#D7D7D7] rounded-[0.3rem] my-[0.5rem]' placeholder="Valor" type="number" />
              <input className='w-full bg-[#33CC95] p-[1rem] border-[1px] border-[#D7D7D7] rounded-[0.3rem] my-[1rem] text-[#FFFFFF] cursor-pointer' type="submit" value='Cadastrar' onClick={(e) => handleCreateTransaction(e)} />
            </div>
          </div>

        </Modal>
    )
}