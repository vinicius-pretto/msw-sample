import { http, HttpResponse } from "msw";
import usersResponse from "../fixtures/users.json";

export const handlers = [
  http.get("/api/users", () => {
    return HttpResponse.json(usersResponse);
  }),
];
