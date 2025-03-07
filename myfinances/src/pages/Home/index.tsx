import { useState } from "react"
import { ModalComponent } from "../../components/modal"
import { HeaderComponent } from "../../components/header"
import { CardsComponent } from "../../components/cards"
import { TableComponent } from "../../components/table"


export function Home(){

    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal(){
        setIsOpen(true)
    }

    function closeModal() {
        setIsOpen(false);
    }

    return(
        <div className="w-full h-full">
            
            <ModalComponent isOpen={modalIsOpen} closeModal={closeModal}/>
            
            <HeaderComponent openModal={openModal}/>

            <CardsComponent/>  

            <TableComponent/>
            
        </div>
    )
}