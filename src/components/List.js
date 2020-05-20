import React, {useState} from 'react'
import {useSpring, a, config} from 'react-spring'

import './List.css'

const List = () => {
    const [data] = useState(['Juan', 'Pedro', 'Raul', 'Fernando', 'Antonio'])
    
    const animation1 = useSpring({
        from: {transform: 'scale(0)'},
        to: {transform: 'scale(1)'},
        config: config.wobbly
    })

    const animation2 = useSpring({
        from: {transform: 'translateX(-100%)'},
        to: {transform: 'translateX(0)'},
        config: config.wobbly
    })



    return (
        <div>
            {
                data.map((name, index) => {
                    return(
                        <ul className="list">
                            <a.li  style={animation2} key={index} className="item">{name}</a.li>
                        </ul>
                    )
                })
            }      
        </div>
    )
}

export default List