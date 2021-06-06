// import React, { useCallback, useReducer } from 'react';
// import axios from 'axios';
// import {NewsList} from './newsView';
// import {reducer, initialState} from './newsReducer'



// const API_KEY = '06d83908658846e19a9fede72c374b77'

// const News = () => {
//     const [state, dispatch] = useReducer(reducer, initialState);

//     const getNews = async () => {
//         const url = `http://newsapi.org/v2/everything?q=${seachQuery}&aoiKey=${API_KEY}`

//         let {data} = await axios.get(url);
// dispatch({
//     type: 'setNews', payload: {
//         news: data.articles
//     }
// })
//     }
// const changeSearchQuery = useCallback ((event) => {
//     dispatch({
//         type: 'changeSearchQuery', payload: {
//             searchQuery: event.target.value
//         }
//     })
// }, [])

// return (
    
// )

// }

// const NewsView = () => (
//     <>
//     <input value={state.seachQuery} onChange={changeSearchQuery} />
//     <button onClick={getNews}>Find news</button>
//     <NewsList news={state.news} />
//         </>
// )

// export default News






