'use client'
import { useState ,useEffect, useCallback} from 'react';

interface ModalsProp {
    isOpen:boolean;
    onClose: ()=>void;
    onSubmit: ()=>void;
    title:String;
    body:React.ReactElement;
    footer:React.ReactElement;
    actionLabel:string;
    disabled:boolean;
    secondaryAction:()=>void;
     secondaryLabel:string;
}



const Modal:React.FC<ModalsProp> = ({
    isOpen,
    onClose,
    onSubmit,
    title,
    body,
    footer,
    actionLabel,
    disabled,
    secondaryAction,
    secondaryLabel
}) => {

    const  [showModal, setShowModal] = useState(isOpen);

    useEffect(() => {
      setShowModal(isOpen)
    }, [isOpen])
    
    const handleClose = useCallback(()=>{
        if(disabled){
            return;
        }

        setShowModal(false);
        setTimeout(() =>{
            onClose();
        })

    },[disabled,onClose])


    const handleSubmit = useCallback(() => {

        if(disabled){
            return;
        }
        onSubmit()
    },[disabled,onsubmit])

    const handleSecondaryAction = useCallback(() => {
         if(disabled || !secondaryAction){
            return;
         }
         secondaryAction();
    },[disabled,secondaryAction]);

    if(!open){
        return null;
    };

  return (
    <>
        <div className='flex justify-center items-center overflow-x-hidden overflow-y-hidden fixed inset-0 z-50 outline-none focus:outline-none bg-neutral-800/70'>
          <div className='relative w-full  md:w-4 lg:w-3/6 xl:w-2/5 my-6 mx-auto h-full lg:h-auto md:h-auto'>
          {/*CONTENT */}
            <div>
                
            </div>
          </div>
        </div>
    </>
  )
}

export default Modal