import { useNavigate } from "react-router-dom";
import Logo from "../../assets/logo.png";
export default function Header() {
  const location = useNavigate();
  return (
    <>
      <header>
        <div className="left">
          <div className="logo" onClick={() => location("/")}>
            <img src={Logo} />
          </div>
        </div>
        <div className="right">
          <button className="btn" onClick={() => location("/register")}>
            Register
          </button>
          <button className="btn" onClick={() => location("/changeBatch")}>
            Change Batch
          </button>
        </div>
      </header>
    </>
  );
}
