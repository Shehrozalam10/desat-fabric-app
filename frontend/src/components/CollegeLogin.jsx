// import React, { useState } from "react";

// const CollegeLogin = ({ onLoggedIn }) => {
//   const [did, setDid] = useState("");

//   const handleLogin = async () => {
//     const res = await fetch("http://localhost:3001/api/college/login", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ did }),
//     });

//     const data = await res.json();
//     if (data.success) {
//       onLoggedIn(did);
//     } else {
//       alert("Login failed");
//     }
//   };

//   return (
//     <div>
//       <h2>🔐 College Login</h2>
//       <input placeholder="Enter DID" value={did} onChange={(e) => setDid(e.target.value)} />
//       <button onClick={handleLogin}>Login</button>
//     </div>
//   );
// };

// export default CollegeLogin;
// import React, { useState } from "react";

// const CollegeLogin = ({ onLoggedIn }) => {
//   const [did, setDid] = useState("");

//   const handleLogin = async () => {
//     try {
//       const res = await fetch("http://localhost:3001/api/college/login", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ did: did.trim() }),
//       });

//       const data = await res.json();

//       if (data.success) {
//         if (typeof onLoggedIn === "function") {
//           onLoggedIn(did.trim());
//         } else {
//           console.error("onLoggedIn is not a function");
//         }
//       } else {
//         alert("Login failed: " + (data.message || "Invalid DID"));
//       }
//     } catch (err) {
//       alert("Error connecting to server");
//       console.error(err);
//     }
//   };

//   return (
//     <div>
//       <h2>🔐 College Login</h2>
//       <input
//         placeholder="Enter DID"
//         value={did}
//         onChange={(e) => setDid(e.target.value)}
//       />
//       <button onClick={handleLogin}>Login</button>
//     </div>
//   );
// };

// export default CollegeLogin;


import React, { useState } from "react";

const CollegeLogin = ({ onLoggedIn }) => {
  const [did, setDid] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    if (!did.trim() || !password) {
      alert("Please enter both DID and password.");
      return;
    }

    try {
      const res = await fetch("http://localhost:3001/api/college/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          did: did.trim(),
          password: password,
        }),
      });

      const data = await res.json();

      if (data.success) {
        localStorage.setItem("collegeToken", data.token);
        localStorage.setItem("collegeInfo", JSON.stringify(data.college));
        if (typeof onLoggedIn === "function") {
          onLoggedIn(data.college);
        }
      } else {
        alert("Login failed: " + (data.message || "Invalid credentials"));
      }
    } catch (err) {
      alert("Error connecting to server.");
      console.error(err);
    }
  };

  return (
    <div className="p-4 rounded-lg shadow-md max-w-sm mx-auto mt-12 border">
      <h2 className="text-xl font-semibold mb-4 text-center">🔐 College Login</h2>
      <input
        type="text"
        placeholder="Enter DID"
        value={did}
        onChange={(e) => setDid(e.target.value)}
        className="w-full mb-3 p-2 border rounded"
      />
      <input
        type="password"
        placeholder="Enter Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full mb-3 p-2 border rounded"
      />
      <button
        onClick={handleLogin}
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
      >
        Login
      </button>
    </div>
  );
};

export default CollegeLogin;
