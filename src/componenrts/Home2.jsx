import { useLocation } from "react-router-dom";

function Home2() {
const { user, token } = useLocation().state|| {};

  if (!user) return <p>No user info available.</p>;

  return (
    <div>
      <h2>User Info</h2>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
         <p><strong>Token:</strong> {token}</p>
      {/* add more fields as needed */}
    </div>
  );
}

export default Home2;