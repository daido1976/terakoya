import { NowRequest, NowResponse } from "@now/node";

export default (request: NowRequest, response: NowResponse) => {
  const { name = "terakoya!!!" } = request.query;
  response.status(200).send(`Hello ${name}!`);
};
