import React from "react"

export default function Button({children,size, ...rest}) {
    
    return (
        <button {...rest} className={size == 'lg' ? 'button-large' : 'button-small'}>
            {children}
        </button>
    )
}