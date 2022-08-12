import React from 'react';
import './Modal.css';
import { ModalItem } from '..';
import { AppContext } from '../../contexts/AppContext';
const Modal = ({setOpen}) => {
    const {language} = React.useContext(AppContext);
    const [inner,setInner] = React.useState(false)
    const texts = [
        language.modal1,
        language.modal2,
        language.modal3,
        language.modal4,
        language.modal5,
        language.modal6,
        language.modal7,
        language.modal8,
        language.modal9,
        language.modal10,
        language.modal11,
        language.modal12,
        language.modal13,
        language.modal14,
        language.modal15,
        language.modal16,
        language.modal17,
        language.modal18,
        language.modal19,
        language.modal20,

    ] 
    const secondText = [
        language.modali1,
        language.modali2,
        language.modali3,
        language.modali4,
        language.modali5,
        language.modali6,
        language.modali7,
        language.modali8,
        language.modali9,
        language.modali10,
        language.modali11,
        language.modali12,
        language.modali13,
    ]
    const closeModal = () => {
        setOpen(false);
        document.body.style.overflow = "auto";

    }
    return (
        <div onClick={closeModal} className='modal' style={{cursor:'pointer'}}>
            <div onClick={(e)=>(e.stopPropagation())} className='modal-item'>
                <ul className='modal-list'>
                    {texts.map((e,i)=>(<ModalItem key={i} setInner={setInner} text={e} />))}
                </ul>
                {
                inner && 
                <div className='modal-iiners'>
                    <button onClick={()=>(setInner(false))} className='modal-btn'> {`${language.modalLink1} {`} </button>
                    <a className='modal-links' href="#">{language.modalLink2}</a>
                    <ul className='modal-iiner'>
                    {secondText.map((e,i)=>(<ModalItem key={i} text={e} />))}
                    </ul>
                </div>
                }
            </div>
        </div>
    );
};

export default Modal;