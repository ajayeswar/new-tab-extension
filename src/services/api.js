import { rword } from "rword";

export default function api() {
  return {
    wordsApi: function (word) {
      return fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/` + word, {
        method: "get",
      })
        .then((res) => res.json())
        .then((data) => {
          if (
            (data && data.title && data.title === "No Definitions Found") ||
            !data[0].meanings.length
          ) {
            return this.wordsApi(rword.generate());
          }

          return { word, definition: data[0].meanings };
        })
        .catch(console.log);
    },
  };
}
