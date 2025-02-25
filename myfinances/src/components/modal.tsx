import { useState } from 'react';
import Modal from 'react-modal'


export function ModalComponent () {


    const [modalIsOpen, setIsOpen] = useState(false);

    function closeModal() {
      setIsOpen(false);
    }

    return (
        <Modal isOpen={modalIsOpen}
        overlayClassName="dark-overlay fixed inset-0 bg-black flex items-center justify-center"
        className="bg-white p-6 rounded-lg shadow-lg max-w-xl w-full mx-4"
        onRequestClose={closeModal}
        contentLabel="Example Modal">
        
          <div className="body-modal">
            <div className="w-full flex flex-row-reverse">
              <button className='text-[20px] cursor-pointer' onClick={closeModal}>
              <img src="./public/close.svg" alt="" />
              </button>
            </div>

            <div className="title">
              <h2 className='text-[24px] font-semibold font-[#363F5F]'>Cadastrar transação</h2>
            </div>

            <div className="form">
              <input placeholder="Nome" type="text" />
            </div>


          </div>

        </Modal>
    )
}