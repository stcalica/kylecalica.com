const FloatingInput = ({ className, labelClass, label, ...props }) => {
    return (
        <div className={className}>
            <input className="inline-block" placeholder="input" {...props} />
            <label className={labelClass}>{label}</label>
        </div>
    )
}

const FloatingTextarea = ({ className, labelClass, label, ...props }) => {
    return (
        <div className={className}>
            <textarea className="inline-block" placeholder="textarea" {...props} />
            <label className={labelClass}>{label}</label>
        </div>
    )
}

export { FloatingInput, FloatingTextarea }