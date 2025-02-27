export function TableComponent () {
    return (
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
    )
}