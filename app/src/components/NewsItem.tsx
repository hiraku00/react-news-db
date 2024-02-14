import React from "react";
import { format } from "date-fns"; // Import the format function from date-fns

interface NewsArticle {
  author: string | null;
  source: string;
  title: string;
  url: string;
  urlToImage: string;
  year: number;
  month: number;
  day: number;
}

interface NewsItemProps {
  item: NewsArticle;
}

const NewsItem: React.FC<NewsItemProps> = ({ item }) => {
  const date = new Date(item.year, item.month - 1, item.day);
  const now = new Date();
  const diffInHours = Math.abs(now.getTime() - date.getTime()) / 36e5;
  const authorOrSource = item.author || item.source;
  let publish_date = "";
  if (diffInHours < 24) {
    publish_date = `${authorOrSource}・${Math.floor(diffInHours)}時間前`;
  } else {
    publish_date = `${authorOrSource}・${format(date, "yyyy/MM/dd")}`;
  }

  return (
    <div
      onClick={() => window.open(item.url, "_blank")}
      className="h-auto w-full border border-gray-200 flex cursor-pointer rounded p-2 items-start"
    >
      <div className="w-1/4 min-w-[150px] mr-2">
        <img
          className="w-full h-[120px] object-contain"
          src={item.urlToImage}
          alt={item.title}
        />
      </div>
      <div className="flex-1 p-4 space-y-2 ml-2">
        <p className="text-lg text-left">{item.title}</p>
        <p className="text-sm text-gray-600 mt-2 text-left">{publish_date}</p>
      </div>
    </div>
  );
};

export default NewsItem;
