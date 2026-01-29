import { useState, useEffect } from 'react'

import classes from './Toast.module.css'

export default function Toast({ index }: { index: Number }) {
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true);
    })

    const style = {"--index": index} as React.CSSProperties

    return (
        <div 
            className={classes.toast}
            style={style}
            data-mounted={mounted}
        >
            <p className={classes.title}>Event Created</p>
            <p className={classes.description}>Monday, January 3rd at 6:00pm</p>
        </div>
    )
}