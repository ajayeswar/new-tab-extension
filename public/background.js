/*global chrome*/
// chrome.bookmarks.getRecent(20, (data)=>{printBookmarks(data)});
//https://api.statvoo.com/favicon/?url=google.com

function getBookmarks(callback){
  chrome.bookmarks.getTree(function (bookmarks) {
    callback(bookmarks);
  });
}

chrome.runtime.onMessage.addListener(function (request, sender, response) {
  switch (request.operation) {
    case 'getBookmarks':
      getBookmarks(response);
      break;
    default:
      break;
  }
  return true;
})
