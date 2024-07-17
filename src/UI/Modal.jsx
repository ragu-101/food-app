import { useEffect, useRef } from "react"
import { createPortal } from "react-dom"
export default function Modal({children,open,className=""}) // if the clasname is not set it gives emptystring
{
    const dialog = useRef();
    useEffect(()=>{
        if(open){
            dialog.current.showModal(); // provided by dialog element.
        }
    },[open])
    return createPortal(<dialog ref={dialog} className={`modal ${className}`}>{children}</dialog>,document.getElementById('modal'))
}