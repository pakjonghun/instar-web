import { Helmet } from "react-helmet-async";
import { isLoggedIn, logUserOut } from "../apollo";

function Home() {
  return (
    <div>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <h1>Home</h1>
      <button onClick={logUserOut}>Logout</button>
    </div>
  );
}

export default Home;
