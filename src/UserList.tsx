import { useEffect, useState } from "react";

type DataType = {
  id: string;
  name: string;
  email: string;
};

const UserList = () => {
  const [data, setData] = useState<DataType[]>([]);
  const [loading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!response.ok) throw new Error("Network is not responding");
        const data: DataType[] = await response.json();
        setData(data);
        setIsLoading(false); // Set loading to false once the data is fetched
      } catch (error) {
        setIsLoading(false); // Set loading to false even on error
        setError(error instanceof Error ? error.message : "An error occurred");
      }
    };
    fetchData();
  }, []);

  if (loading) return <h1>Loading....</h1>;
  if (error) return <h1>Error: {error}</h1>;

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {data.map((m) => (
            <tr key={m.id}>
              <td>{m.id}</td> {/* Render the ID here */}
              <td>{m.name}</td>
              <td>{m.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
