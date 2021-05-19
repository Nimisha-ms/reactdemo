import React from 'react';
import ReactDOM from 'react-dom';
import Card from './components/Card';

const List = () => {
    return (
        <>
        <Card imgsrc="https://wallpapercave.com/wp/wp4056410.jpg" 
            title="A Netflix Original Series" sname='DARK' 
            links = "https://www.netflix.com/in/title/80100172"
        />

        <Card imgsrc="https://wallpapercave.com/wp/wp7418473.jpg" 
            title="A Netflix Original Series" sname='Extra curricular' 
            links = "https://www.netflix.com/in/title/80990668"
        />

        <Card imgsrc="https://wallpapercave.com/wp/wp5393508.jpg"
            title="A Netflix Original Series" sname='Stranger Things' 
            links = "https://www.netflix.com/in/title/80990668"
        />
        </>
    )
}

export default List;