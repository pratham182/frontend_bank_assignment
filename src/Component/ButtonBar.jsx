import { Link } from "react-router-dom";

const ButtonBar = () => {
    return (
      
        <div style={styles.divbar}>
          <h2 style={styles.logo}>Portal</h2>
          <div>
            <Link to="/login" style={styles.link}>User Login</Link>
            <Link to="/register" style={styles.link}>Register</Link>
            <Link to="/adminLogin" style={styles.link}>Admin Login</Link>
          </div>
        </div>
    )
  };

  const styles = {
    divbar: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "10px 20px",
      backgroundColor: "#007bff",
      color: "white",
    },
    logo: {
      margin: 0,
    },
    link: {
      margin: "0 10px",
      color: "white",
      textDecoration: "none",
      fontSize: "16px",
      padding: "5px 10px",
      borderRadius: "5px",
      backgroundColor: "#0056b3",
    },
  };

  export default ButtonBar;