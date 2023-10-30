export function Profile({name, age, place}) {
    return (
        <div className="profile">
            <div className="container">
                <p><span className="big-weight">{name}</span> {age} <br /><span>{place}</span></p>
        </div>
        </div>
    )
}