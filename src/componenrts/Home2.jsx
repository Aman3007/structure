import { useLocation } from "react-router-dom";

function Home2() {
const { user, token } = useLocation().state|| {};

  if (!user) return <p>No user info available.</p>;

  return (
    <>
<div className="userinfo">
<h2>User-Info</h2>
  <div class="card">
  <label class="avatar"></label>
  <label class="info">
    <span class="info-1">{user.name}</span>
    <span class="info-2"> {user.email}</span>
  </label>
  <div class="content-1"><p>"You can trust us with your secrets, no need to worry."</p></div>
  <div class="content-2">
    <a>Add Your's</a>
  </div>
</div>
</div>




    </>
   
  );
}

export default Home2;
