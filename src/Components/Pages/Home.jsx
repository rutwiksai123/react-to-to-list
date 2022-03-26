import { Outlet, Link } from "react-router-dom";
// import "../../Models/
import "../CSS/Home.css"

const Home = () => {
  return (
    <>
      <nav>
        <ul>
          <li className="schedule-link">
            <Link to="/" className="  schedule text-decoration-none">SCHEDULE</Link>
          </li>
          <li className="category-link">
            <Link to="/category" className="  categogy text-decoration-none">CATEGORY</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  )
};

export default Home;
