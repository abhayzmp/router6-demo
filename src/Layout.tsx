import { Link, Outlet, useLoaderData } from "react-router-dom";

export async function loader() {
  return ["user1", "user2", "user3", "user4", "user5", "user6"];
}

export const Layout = () => {
  const data = useLoaderData() as string[];

  return (
    <div>
      <header>
        <h3>Users</h3>
        <nav>
          <ul>
            {data.map((u) => (
              <li key={u}>
                <Link to={u}>{u}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>Footer</footer>
    </div>
  );
};
