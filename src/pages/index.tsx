import { User } from "@/types/user";
import { Inter } from "next/font/google";
import Head from "next/head";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

type UsersResponse = {
  users: User[];
};

export default function Home() {
  const [users, setUsers] = useState<User[]>([]);

  console.log("users", users);

  useEffect(() => {
    fetch("http://localhost:3005/api/users")
      .then((response) => response.json())
      .then((usersReponse: UsersResponse) => {
        setUsers(usersReponse.users);
      });
  }, []);

  return (
    <>
      <Head>
        <title>MSW Sample</title>
        <meta name="description" content="This is a sample how MSW works" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={inter.className}>
        <h1>Users</h1>
        <table border={1}>
          <thead>
            <tr>
              <th>First name</th>
              <th>Last name</th>
              <th>Email name</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </>
  );
}
