import { useState } from 'react'
import classes from './Toaster.module.css'
import Button from './Button'
import Toast from './Toast'

export default function Toaster() {
    const [toasts, setToasts] = useState(0)

    return (
        <div className={classes.wrapper}>
            <div className={classes.toaster}>
                {Array.from({ length: toasts }).map((_, i) => (
                    <Toast key={i} index={toasts - (i + 1)} />
                ))}
            </div>
            <Button
                onClick={() => {
                    setToasts(toasts + 1)
                }}
            >Add toast</Button>
        </div>
    )
}