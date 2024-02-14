import { useEffect, useState } from "react";
import { db } from "../firebase";
import Tabs from "./Tabs";
import NewsItem from "./NewsItem";

interface NewsArticle {
  id: String;
  title: string;
  urlToImage: string;
  url: string;
  author: string | null;
  source: string;
  year: number;
  month: number;
  day: number;
}

const News = () => {
  const [data, setData] = useState<NewsArticle[]>([]);
  const [activeKeyword, setActiveKeyword] = useState("BTS");

  useEffect(() => {
    db.collection("news")
      .where("artist", "==", activeKeyword)
      .orderBy("publishedAt", "desc")
      .limit(20)
      .onSnapshot((snapshot) => {
        setData(snapshot.docs.map((doc) => doc.data() as NewsArticle));
      });
  }, [activeKeyword]);

  return (
    <div className="overflow-y-auto" style={{ height: '100vh' }}>
      <div className="bg-white text-left font-m-plus-rounded p-2 sticky top-0 z-50">
        <Tabs activeKeyword={activeKeyword} setActiveKeyword={setActiveKeyword} />
      </div>
      {data.map((item, index) => (
        <NewsItem key={index} item={item} />
      ))}
    </div>
  );
};

export default News;
