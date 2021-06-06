import React, {useState, useEffect } from 'react';
import axios from 'axios';
import { Divider, Button } from 'antd';

export const Quotes = () => {
  const [quoteText, setText] = useState('Loading...');
  const [authorName, setAuthor] = useState('');

  useEffect(() => {
    getQuotes();
  }, []);

  const getQuotes = () => {
    axios.get('https://api.quotable.io/random').then((res) => {
      setText(res.data.content);
      setAuthor(res.data.author);
    });
  }; 

  return <QuotesView quoteText={quoteText} authorName={authorName} getQuotes={getQuotes} />
};

  
  const QuotesView = ({quoteText, authorName, getQuotes}) => {
    return (
      <div className='quotes'>
        <p>{quoteText}</p>
        <Divider orientation='right'>{authorName}</Divider>
        <Button onClick={getQuotes}>↺</Button>
      </div>
    );
  }; 
  
  

export default Quotes;
