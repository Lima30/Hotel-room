import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router';

const Details = () => {
    const { id } = useParams()
    const [details, setDetails] = useState([]);
    const [specificDetail, setSpecificDetail] = useState({});


    useEffect(() =>
        fetch(`http://localhost:5000/products/${id}`)
            // fetch("./people.JSON")
            .then(res => res.json())
            .then(data => setDetails(data))
        , [])


    useEffect(() => {
        if (details.length > 0) {
            const matchedData = details.find(detail => detail.key == id)
            console.log(matchedData);
        }

    }


        , [details])


    return (
        <div>
            <h2>This is Details Page and id is:{id}</h2>
            <h2>name:{specificDetail?.Roomname}</h2>
        </div>
    );
};


export default Details;