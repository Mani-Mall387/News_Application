import React, { useEffect, useState } from 'react'
import News from './News';
import Loder from './Loder';

const API_KEY = import.meta.env.VITE_NEWS_API;

const NewsBoard = ({type}) => {
    const [news, setNews] = useState([]);
    const[loading,setLoading]=useState(false);
  useEffect(() => {
    setLoading(true);
    const fetchNews = async () => {
      try {
        const res = await fetch(
          `https://newsapi.org/v2/top-headlines?country=us&category=${type}&apiKey=${API_KEY}`
        );

        const data = await res.json();
        setNews(data.articles || []);
        setLoading(true);
        // console.log(data.articles);
        
      } catch (err) {
        console.log("Error:", err);
      }
    };
    fetchNews()
  }, [type]);
  return (<>
    {loading ? <div className="news_container ">
      {news.length > 0 ? (news.map((item)=>{
        return  <News
        title={item.title}
        description={item.description}
        url={item.url}
        urlToImage={item.urlToImage}
        />
        }) ): (<Loder/>)
      }
    </div> : <Loder/>}
    </>
  )
}

export default NewsBoard
