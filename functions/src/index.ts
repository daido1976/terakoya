import * as functions from "firebase-functions";
import axios from "axios";

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//

export const helloWorld = functions.https.onRequest((request, response) => {
  axios.get("https://connpass.com/api/v1/event/?keyword=python").then(res => {
    return response.send(res.data);
  });
});
