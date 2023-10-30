//  { ReactComponent as PatternCard } from '/src/images/bg-pattern-card.svg';
import { Circle } from "./Circle";
import { Profile } from "./profile";
import { Status } from "./status";

export function Card({ pic }) {
    
    const user = {
        name: 'Vijaya Baskar',
        age: 21,
        place: 'Madurai',
    }

    const statu = [
        {value:'2k', label:'Follower', property:'box', id:'box-1 status'},
        {value:'20k', label:'Like', property:'box', id:'box-2 status'},
        {value:'6', label:'Post', property:'box', id:'box-3 status'},
    ]
    
    return (
        <div className="card">
            <Circle pic={pic}/>
            <Profile name={user.name} age={user.age} place={user.place}/>
            <div className="status-div">
                {statu.map(stat => (
                    <Status value={stat.value} label={stat.label} prop={stat.property} key={stat.id}/>
                ))}
            </div>
        </div>
    )
}