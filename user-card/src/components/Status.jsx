export function Status({value,label,prop,id}) {
    return (
        <div className={id}>
            <div className={prop}>
                <p><span className="big-weight">{value}</span><br />
                {label}</p>
            </div>
        </div>
    )
}