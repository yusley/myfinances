export function CardsComponent () {
    return (
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
    )
}