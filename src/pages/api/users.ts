import usersResponse from "@/fixtures/users.json";
import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log("GET /api/users");
  console.table(usersResponse.users);
  return res.status(200).json(usersResponse);
}
