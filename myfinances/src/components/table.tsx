import { useTransactions } from "../hooks/useTransaction"
export function TableComponent () {

    const {transactions} = useTransactions()

    return (
        <section className='lg:mt-[10rem] sm:mt-[2rem] mt-[1rem] lg:px-[10rem] md:px-[5rem] sm:px-[2rem] px-[1rem] flex '>
            <div className="tableTransactions w-full h-[50vh]">
                
                <div className="table-head lg:flex md:flex sm:hidden hidden flex-wrap p-2 font-normal text-[#969CB2]">
                    <p className="flex-2">Título</p>
                    <p className="flex-1">Preço</p>
                    <p className="flex-1">Categoria</p>
                    <p className="flex-1">Data</p>
                </div>
                
                {
                    transactions.length > 0 ? (
                        transactions.map((ele) => (
                            <div key={ele.id} className="table-body flex-wrap  my-[0.5rem] bg-[#FFFFFF] flex bg p-2 ">
                                <div className='lg:flex-2'>
                                    <p className="">{ele.title}</p>
                                </div>
                                <div className='lg:flex-1 w-full'>
                                <p className={ele.type === "Entrada" ? "text-[#33CC95]" : "text-[#cc3333]"}>
                                    R$ { 
                                        /^\d{1,3}(,\d{3})*(\.\d{2})?$/.test(ele.price) 
                                        ? (ele.price) 
                                        : "Valor inválido" 
                                    }
                                </p>

                                </div>
                                <div className='flex-1'>
                                    <p className="text-[#969CB2]">{ele.type}</p>
                                </div>
                                <div className='flex-1'>
                                    <p className="text-[#969CB2]">{`${ele.created_at}`}</p>
                                </div>
                            
                            </div>
                        ))
                    ) : 
                    (
                        <div className="table-body flex-wrap  my-[0.5rem] bg-[#FFFFFF] flex bg p-2 ">
                            <p className="text-slate-500">Não existem transações</p>
                        </div>
                    )
                }
            </div>
        </section>
    )
}