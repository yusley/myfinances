
import './App.css'

function App() {
  

  return (

      <div className="w-full h-full">
        <section className='px-[2rem] pt-[3rem] pb-[10rem] bg-[var(--header-color)] flex justify-between'>
          <div className="logo items-center gap-[1rem] flex w-[300px]">
            <img  src="./public/logo.svg" alt="" />
            <p className='text-gray-100 text-[20px]'>dt money</p>
          </div>
          <div className="actionNewTransaction" >
         
              <input
                className='p-[1rem] bg-[#6933FF] text-gray-50 rounded-[5px] cursor-pointer'
                type="submit"
                value="Nova Transação"
              />
                     
          </div>
        </section>
        <section className=''></section>
      </div>
  )
}

export default App
