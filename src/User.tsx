import {
  Link,
  LoaderFunctionArgs,
  useLoaderData,
  useParams,
} from "react-router-dom";

export async function loader({ params }: LoaderFunctionArgs) {
  return { msg: `Welcome to ${params.userId}` };
}

export const User = () => {
  const { userId } = useParams();
  const { msg } = useLoaderData() as Awaited<ReturnType<typeof loader>>;

  return (
    <div>
      <h1>User Page</h1>
      <p>This is {userId} page</p>
      <p>{msg}</p>
      <Link to="/home">Go back to home</Link>
    </div>
  );
};
