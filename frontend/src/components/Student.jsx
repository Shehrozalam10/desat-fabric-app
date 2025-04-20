// import React, { useState } from "react";
// import Register from "./CollegeRegister";
// import Login from "./CollegeLogin";
// import Dashboard from "./CollegeDashboard";

// const Student = () => {
//   const [step, setStep] = useState("register"); // 'register', 'login', or 'dashboard'
//   const [did, setDid] = useState("");

//   const handleRegistration = (generatedDid) => {
//     setDid(generatedDid);
//     setStep("login");
//   };

//   const handleLogin = (enteredDid) => {
//     setDid(enteredDid);
//     setStep("dashboard");
//   };

//   return (
//     <div>
//       {step === "register" && <Register onRegister={handleRegistration} />}
//       {step === "login" && <Login onLogin={handleLogin} />}
//       {step === "dashboard" && <Dashboard did={did} />}
//     </div>
//   );
// };

// export default Student;

import React, { useState } from "react";
import CollegeRegister from './CollegeRegister'; // Same folder
import CollegeLogin from './CollegeLogin';       // Same folder
import CollegeDashboard from '../routes/CollegeDashboard'; // Go up one level to reach 'routes'


function Student() {
  const [did, setDid] = useState(null); // Store logged in DID
  const [view, setView] = useState("register"); // Can be "register", "login", or "dashboard"

  const handleRegistered = (did) => {
    setDid(did);
    setView("login"); // After registration, go to login
  };

  const handleLoggedIn = (did) => {
    setDid(did);
    setView("dashboard"); // Go to dashboard after login
  };

  return (
    <div>
      {view === "register" && <CollegeRegister onRegister={handleRegistered} />}
      {view === "login" && <CollegeLogin onLoggedIn={handleLoggedIn} />}
      {view === "dashboard" && <CollegeDashboard did={did} />}
      <div style={{ marginTop: "20px" }}>
        {view !== "register" && (
          <button onClick={() => setView("register")}>Go to Register</button>
        )}
        {view !== "login" && (
          <button onClick={() => setView("login")}>Go to Login</button>
        )}
      </div>
    </div>
  );
}

export default Student;
