import React from 'react';
import Card from './Card';
import Listarr from './Listarr';

const List = () => {
    return (
        <>        
        <h1 className="heading_style">List of top 5 Netflix Series</h1>
        {
            Listarr.map((val, index) => {
                    return (
                        <Card
                                key={val.id}
                                imgsrc={val.imgsrc} 
                                title={val.title} 
                                sname={val.sname} 
                                links ={val.links}
                        />
                    )
            })
        }
        </>
    )
}

export default List;