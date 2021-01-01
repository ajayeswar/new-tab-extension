/*global chrome*/
console.log("hi");
// chrome.bookmarks.getRecent(20, (data)=>{printBookmarks(data)});
//https://api.statvoo.com/favicon/?url=google.com
chrome.bookmarks.getTree(function (bookmarks) {
  printBookmarks(bookmarks);
});

function printBookmarks(bookmarks) {
  bookmarks.forEach(function (bookmark) {
    console.log(bookmark.id + " - " + bookmark.title + " - " + bookmark.url);
    if (bookmark.children) printBookmarks(bookmark.children);
  });
}

chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
  chrome.tabs.sendMessage(
    tabs[0].id,
    { action: "open_dialog_box" },
    function (response) {}
  );
});
