import { NextApiRequest, NextApiResponse } from "next";

const users = [
  {
    id: "a5c8978a-1e1e-4a04-bc9f-0ae2069413c1",
    firstName: "Ronald",
    lastName: "Baker",
    email: "ronald.baker@domain.com",
  },
  {
    id: "761e5dcf-c62b-43f9-8539-f0d1355e94c7",
    firstName: "Polly",
    lastName: "Jackson",
    email: "polly.jackson@domain.com",
  },
  {
    id: "3838f33c-2bd1-43c0-94c9-2e3e8a92cf55",
    firstName: "James",
    lastName: "Evans",
    email: "james.evans@domain.com",
  },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  return res.status(200).json({ users });
}
