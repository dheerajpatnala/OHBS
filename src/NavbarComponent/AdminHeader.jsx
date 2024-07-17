import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AdminHeader = () => {
  let navigate = useNavigate();

  const user = JSON.parse(sessionStorage.getItem("active-admin"));
  console.log(user);

  const adminLogout = () => {
    toast.success("logged out!!!", {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    sessionStorage.removeItem("active-admin");
    window.location.reload(true);
    navigate("/home");
  };

  return (
    <ul class="navbar-nav ms-auto mb-lg-0">
      <li className="nav-item">
        <Link
          to="/admin/add-location"
          className="nav-link active"
          aria-current="page" 
        >
          <button className="btn btn-sm btn-prime"
      style={{
        backgroundImage: 'linear-gradient(to right, #e052a0, #f15c41)',
        borderRadius: '2px',
        fontSize:"12px",
        color: "white"
      }}>Add Location</button>
        </Link>
      </li>

      <li className="nav-item">
        <Link
          to="/admin/add-facility"
          className="nav-link active"
          aria-current="page"
        >
          <button  className="btn btn-sm btn-prime"
      style={{
        backgroundImage: 'linear-gradient(to right, #e052a0, #f15c41)',
        borderRadius: '2px',
        fontSize:"12px",
        color:"white"
      }} >Add Facility</button>
        </Link>
      </li>

      <li className="nav-item">
        <Link
          to="/user/hotel/register"
          className="nav-link active"
          aria-current="page"
        >
          <button  className="btn btn-sm btn-prime"
      style={{
        backgroundImage: 'linear-gradient(to right, #e052a0, #f15c41)',
        borderRadius: '2px',
        fontSize:"12px",
        color:'white'
      }}>Register Hotel User</button>
        </Link>
      </li>

      <li className="nav-item">
        <Link
          to="/admin/hotel/register"
          className="nav-link active"
          aria-current="page"
        >
          <button  className="btn btn-sm btn-prime"
      style={{
        backgroundImage: 'linear-gradient(to right, #e052a0, #f15c41)',
        borderRadius: '2px',
        fontSize:"12px",
        color:"white"
      }}>Add Hotel</button>
        </Link>
      </li>

      <li className="nav-item">
        <Link
          to="user/admin/booking/all"
          className="nav-link active"
          aria-current="page"
        >
          <button  className="btn btn-sm btn-prime"
      style={{
        backgroundImage: 'linear-gradient(to right, #e052a0, #f15c41)',
        borderRadius: '2px',
        fontSize:"12px",
        color:"white"
      }}>View All Bookings</button>
        </Link>
      </li>

      <li class="nav-item">
        <Link
          to=""
          class="nav-link active"
          aria-current="page"
          onClick={adminLogout}
        >
          <button  className="btn btn-sm btn-prime"
      style={{
        backgroundImage: 'linear-gradient(to right, #e052a0, #f15c41)',
        borderRadius: '2px',
        fontSize:"12px",
        color:"white"
      }}>Logout</button>
        </Link>
        <ToastContainer />
      </li>
    </ul>
  );
};

export default AdminHeader;
