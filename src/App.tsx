import { LoaderFunctionArgs, useLoaderData, Form } from "react-router-dom";
import axios from "axios";
import { z } from "zod";

const peopleSchema = z.object({
  name: z.string(),
  mass: z.string(),
  eye_color: z.string(),
  gender: z.string(),
});

export async function loader({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url);
  const peopleId = url.searchParams.get("peopleId");
  const res = await axios.get(
    `https://swapi.dev/api/people/${peopleId || "1"}`
  );
  const loaderData = peopleSchema.parse(res.data);
  return loaderData;
}

export const App = () => {
  const data = useLoaderData() as z.infer<typeof peopleSchema>;

  return (
    <div>
      <h1>App</h1>
      <p>Name : {data.name}</p>
      <pre>{JSON.stringify(data, null, 2)}</pre>

      <Form method="GET">
        <label htmlFor="peopleId">Enter People Id</label>
        <input type="tel" id="peopleId" name="peopleId" />
        <button type="submit">Submit</button>
      </Form>
    </div>
  );
};
