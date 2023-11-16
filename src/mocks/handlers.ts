import { http, HttpResponse } from "msw";

export const handlers = [
  http.get("/api/users", () => {
    return HttpResponse.json({
      users: [
        {
          id: "761e5dcf-c62b-43f9-8539-f0d1355e94c7",
          firstName: "Polly",
          lastName: "Jackson",
          email: "polly.jackson@domain.com",
        },
      ],
    });
  }),
];
