import { useEffect, useRef } from "react"
import { createPortal } from "react-dom"
export default function Modal({children,open,onClose,className=""}) // if the clasname is not set it gives emptystring
{
    const dialog = useRef();
    useEffect(()=>{
        const modal = dialog.current;
        if(open){
            modal.showModal(); // provided by dialog element.
        }

        return ()=>modal.close(); // cleanup function not important here but good to use
    },[open])
    return createPortal(<dialog ref={dialog} className={`modal ${className}`} onClose={onClose}>{children}</dialog>,document.getElementById('modal'))
}