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

    const [title,setTitle] = useState("")
    const [typeTransaction,setTypeTransaction] = useState("Saida")
    const [category,setCategory] = useState("")
    const [price,setPrice] = useState("")
    

    useEffect(() => {
      
      const listCategoryes = api.get('category')
      .then((response) => setCategoryes(response.data))
      

    },[])

    const {createTransaction} = useTransactions();

    const handleCreateTransaction = async (event:FormEvent) => {
      event.preventDefault()
      props.closeModal()
      
      const transaction = {
        "title":title,
        "price": price,
        "type": typeTransaction,
        "userId": "01a09edd-2e9d-4195-97cd-5da4d0f222ea",
        "categoryId": category
      }
      console.log(transaction)
      const teste = await createTransaction(transaction)

      console.log(teste)
      

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
              <input 
                className='w-full p-[1rem] border-[1px] bg-[#F0F2F5] border-[#D7D7D7] rounded-[0.3rem] my-[0.5rem] focus:outline-none focus:ring-0' 
                placeholder="Nome"
                type="text"
                onChange={(e) => setTitle(e.target.value)}
              />
            
              <div className="flex my-[0.5rem] gap-[10px] justify-between">
                <div className={`entrada w-[50%] p-[1rem] flex gap-[1rem] justify-center items-center border-[1px] 
                              border-[#D7D7D7] rounded-[0.3rem] cursor-pointer 
                              ${typeTransaction === "Entrada" ? "bg-[#D7D7D7]" : "bg-[#ffffff]"} `}
                              onClick={() => setTypeTransaction("Entrada")}
                              
                              >
                  <img src="./public/Entradas.svg" alt=""/>
                  <p>Entrada</p>
                </div>
                <div className={`saida w-[50%] p-[1rem] flex gap-[1rem] justify-center items-center border-[1px]
                              border-[#D7D7D7] rounded-[0.3rem] cursor-pointer
                                ${typeTransaction === "Saida" ? "bg-[#D7D7D7]" : "bg-[#ffffff]"}`}
                              onClick={() => setTypeTransaction("Saida")}
                              >
                  <img src="./public/Saídas.svg" alt=""/>
                  <p>Saída</p>
                </div>
              </div>
              <select 
                className='w-full p-[1rem] bg-[#F0F2F5] flex gap-[1rem] justify-center items-center border-[1px] border-[#D7D7D7] rounded-[0.3rem] focus:outline-none focus:ring-0'
                  onChange={(e) => setCategory(e.target.value)}
                >
                {categoryes.map((el:CategoryInterface) => (
                  <option key={el.id} value={el.id}>{el.title}</option>
                ))}

                
              </select>
              <input className='w-full p-[1rem] border-[1px] bg-[#F0F2F5] border-[#D7D7D7] rounded-[0.3rem] my-[0.5rem] focus:outline-none focus:ring-0' 
                placeholder="Preço" 
                type="number"
                onChange={(e) => setPrice(e.target.value)}
              />
              <input 
                className='w-full bg-[#33CC95] p-[1rem] border-[1px] border-[#D7D7D7] rounded-[0.3rem] my-[1rem] text-[#FFFFFF] cursor-pointer' 
                type="submit" 
                value='Cadastrar' 
                onClick={(e) => handleCreateTransaction(e)} 
              />
            </div>
          </div>

        </Modal>
    )
}