import { User } from "@/types/user";
import axios from "axios";
import { Inter } from "next/font/google";
import Head from "next/head";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

type UsersResponse = {
  users: User[];
};

export interface HomeProps {
  users: User[];
  isMocksEnabled: boolean;
}

export default function Home({ isMocksEnabled }: HomeProps) {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await axios.get<UsersResponse>(
        "http://localhost:3005/api/users"
      );
      setUsers(response.data.users);
    };

    if (isMocksEnabled) {
      import("../mocks/setupMocks")
        .then(({ setupMocks }) => setupMocks())
        .then(fetchUsers);
    } else {
      fetchUsers();
    }
  }, [isMocksEnabled]);

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

export const getServerSideProps = async () => {
  // const response = await axios.get<UsersResponse>(
  //   "http://localhost:3005/api/users"
  // );

  return {
    props: {
      isMocksEnabled: process.env.MSW_MOCKS === "enabled",
      // users: response.data.users,
    },
  };
};
