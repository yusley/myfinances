
import './App.css'
import { useState } from 'react';

function App() {
  

  function newTransaction (){
    //
  }

  return (

      <div className="w-full h-full">

        
        <section className='lg:px-[10rem] md:px-[5rem] sm:px-[2rem] px-[1rem] max-h-[13.25rem] pt-[3rem] pb-[10rem] bg-[var(--header-color)] flex justify-between'>
          <div className="logo items-center gap-[1rem] flex w-[18.75rem] h-[4rem] ">
            <img src="./public/logo.svg" alt="" />
            <p className='text-gray-100 text-[20px]'>dt money</p>
          </div>
          <div className="actionNewTransaction flex items-center justify-center  h-[4rem]">
              <input
                className='h-[3rem] px-[1rem] bg-[#6933FF] text-gray-50 rounded-[5px] cursor-pointer'
                type="submit"
                value="Nova Transação"
                onClick={newTransaction}
              />
          </div>
        </section>

        <section className='lg:px-[10rem] md:px-[5rem] sm:px-[2rem] px-[1rem] flex '>
          <div className="w-full cards flex gap-[1rem] justify-between mt-[-4rem] overflow-x-auto whitespace-nowrap custom-scrollbar ">
            <div className="card xl:min-w-[500px] lg:min-w-[250px] min-w-[200px]  h-[136px] p-[1rem] bg-[#FFFFFF] shadow-md rounded-[10px]">
              <div className="head-card flex justify-between">
                <h2>Entradas</h2>
                <img src="./public/Entradas.svg" alt="" />
              </div>
              <div className="body-card">
                <p className='text-[2rem] mt-[1rem] font-medium text-[#363F5F]'>R$ 15.000,00</p>
              </div>
            </div>

            <div className="card xl:min-w-[500px] lg:min-w-[250px] min-w-[200px]  h-[136px] p-[1rem] bg-[#FFFFFF] shadow-md rounded-[10px]">
              <div className="head-card flex justify-between">
                <h2>Saídas</h2>
                <img src="./public/Saídas.svg" alt="" />
              </div>
              <div className="body-card">
                <p className='text-[2rem] mt-[1rem] font-medium text-[#363F5F]'>R$ 15.000,00</p>
              </div>
            </div>

            <div className="card xl:min-w-[500px] lg:min-w-[250px] min-w-[200px]  h-[136px] p-[1rem] bg-[#33CC95] shadow-md rounded-[10px]">
              <div className="head-card flex justify-between">
                <h2>Total</h2>
                <img src="./public/Total.svg" alt="" />
              </div>
              <div className="body-card">
                <p className='text-[2rem] mt-[1rem] font-medium text-[#363F5F]'>R$ 15.000,00</p>
              </div>
            </div>
          </div>
        </section>

        <section className='lg:mt-[10rem] sm:mt-[2rem] mt-[1rem] lg:px-[10rem] md:px-[5rem] sm:px-[2rem] px-[1rem] flex '>
          <div className="tableTransactions w-full h-[50vh]">
            
            <div className="table-head lg:flex md:flex sm:hidden hidden flex-wrap p-2 font-normal text-[#969CB2]">
              <p className="flex-2">Título</p>
              <p className="flex-1">Preço</p>
              <p className="flex-1">Categoria</p>
              <p className="flex-1">Data</p>
            </div>

            <div className="table-body flex-wrap  my-[0.5rem] bg-[#FFFFFF] flex bg p-2 ">
              <div className='lg:flex-2'>
                <p className="">Desenvolvimento de site</p>
              </div>
              <div className='lg:flex-1 w-full'>
                <p className="text-[#33CC95]">R$ 12.000,00</p>
              </div>
              <div className='flex-1'>
                <p className="text-[#969CB2]">Terreno</p>
              </div>
              <div className='flex-1'>
                <p className="text-[#969CB2]">15/03/2026</p>
              </div>
              
            </div>

            <div className="table-body flex-wrap  my-[0.5rem] bg-[#FFFFFF] flex bg p-2 ">
              <div className='lg:flex-2'>
                <p className="">Desenvolvimento de site</p>
              </div>
              <div className='lg:flex-1 w-full'>
                <p className="text-[#33CC95]">R$ 12.000,00</p>
              </div>
              <div className='flex-1'>
                <p className="text-[#969CB2]">Terreno</p>
              </div>
              <div className='flex-1'>
                <p className="text-[#969CB2]">15/03/2026</p>
              </div>
              
            </div>
            

          </div>
        </section>
      </div>
  )
}

export default App
