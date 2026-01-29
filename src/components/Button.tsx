import type { MouseEventHandler, ReactNode } from 'react'
import classes from './Button.module.css'

export default function Button({ onClick, children }: { onClick: MouseEventHandler, children: ReactNode }) {
    return (
        <button
            className={classes.button}
            onClick={onClick}
        >
            { children }
        </button>
    )
}