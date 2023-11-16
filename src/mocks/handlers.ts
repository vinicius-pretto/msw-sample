import { rest } from "msw";

export const handlers = [
  rest.get("*/api/users", (req, res, ctx) => {
    return res(
      ctx.json({
        users: [
          {
            id: "761e5dcf-c62b-43f9-8539-f0d1355e94c7",
            firstName: "Polly",
            lastName: "Jackson",
            email: "polly.jackson@domain.com",
          },
        ],
      })
    );
  }),
];
