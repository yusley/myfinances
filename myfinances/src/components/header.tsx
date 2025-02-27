
interface HeaderComponentInterface {
    openModal: () => void;
}

export function HeaderComponent({...props}:HeaderComponentInterface){
    

    return (
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
                onClick={props.openModal}
                />
            </div>
        </section>
    )
}