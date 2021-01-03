/*global chrome*/
import React from "react";
import { useEffect, useState } from "react";

import BookMark from "./components/BookMark/BookMark";
import "./Shortcut.scss";

function Shortcut() {
  const [bookmarks, setBookMarks] = useState([]);

  var setReceivedBookMarks = (bookmarksArray) => {
    bookmarksArray.forEach(function (bookmark) {
      if (bookmark.children) setReceivedBookMarks(bookmark.children);
      else setBookMarks(prevValues => [...prevValues, bookmark])
    });
  };

  useEffect(() => {
    chrome.runtime.sendMessage({ operation: "getBookmarks" }, function (resp) {
        setReceivedBookMarks(resp);
    });
  }, []);

  return (
    <div className="shortcut-wrapper">
      {bookmarks.map((bookmark) => (
          <BookMark title={bookmark.title} url={bookmark.url} id={bookmark.id}/>
        ))}
    </div>
  );
}

export default Shortcut;
