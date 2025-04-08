import LogoWhite from "../images/LP_logo_white.svg";
import "./login.css";

export default function LoginLandingPage() {
  return (

      <div className="h-screen w-1/3 md:w-1/3 relative">
        <div className="sidebar-sticky login-page-sidebar sticky top-0 h-full bg-gray-800">
          <img
            src={LogoWhite}
            alt="LongevityPartners | BIU"
            className="absolute bottom-0 right-0 w-1/2 mr-2"
            style={{ height: "100px" }}
          />
        </div>
      </div>

      
  );
}
