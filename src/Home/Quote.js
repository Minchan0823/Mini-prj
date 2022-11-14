import React, { useState, useEffect } from 'react';
import Api from "../api/plannetApi";

const Quote = () => {
    const getRandom = Math.floor(Math.random() * 30 + 1);
    const [quoteText, setQuoteText] = useState('');
    
    useEffect(() => {
        const quote = async() => {
            try{
                const response = await Api.quoteRandom(String(getRandom));
                setQuoteText(response.data.quote);
            } catch(e){
                console.log(e);
            }
        }
        quote();
    },[]);

    return (
        <p>{quoteText}</p>
    );
};

export default Quote;