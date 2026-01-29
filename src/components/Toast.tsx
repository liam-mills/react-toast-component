import classes from './Toast.module.css'

export default function Toast({ index }: { index: Number }) {
    const style = {"--index": index} as React.CSSProperties

    return (
        <div 
            className={classes.toast}
            style={style}
        >
            <p className={classes.title}>Event Created</p>
            <p className={classes.description}>Monday, January 3rd at 6:00pm</p>
        </div>
    )
}