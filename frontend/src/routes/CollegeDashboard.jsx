// // // import React, { useState } from "react";

// // // const CollegeDashboard = () => {
// // //   const [seatMatrix, setSeatMatrix] = useState("");
// // //   const [vcToVerify, setVcToVerify] = useState(null);

// // //   const handleVCUpload = (e) => {
// // //     const file = e.target.files[0];
// // //     const reader = new FileReader();
// // //     reader.onload = () => setVcToVerify(JSON.parse(reader.result));
// // //     reader.readAsText(file);
// // //   };

// // //   const submitSeatMatrix = async () => {
// // //     try {
// // //       await fetch("http://localhost:3001/api/college/submitMatrix", {
// // //         method: "POST",
// // //         headers: { "Content-Type": "application/json" },
// // //         body: JSON.stringify({ seatMatrix }),
// // //       });
// // //       alert("Seat matrix submitted");
// // //     } catch (err) {
// // //       console.error("Matrix submission failed:", err);
// // //     }
// // //   };

// // //   const verifyVC = async () => {
// // //     try {
// // //       const res = await fetch("http://localhost:3001/api/college/verifyVC", {
// // //         method: "POST",
// // //         headers: { "Content-Type": "application/json" },
// // //         body: JSON.stringify({ vc: vcToVerify }),
// // //       });
// // //       const result = await res.json();
// // //       alert("Verification result: " + JSON.stringify(result));
// // //     } catch (err) {
// // //       console.error("Verification failed:", err);
// // //     }
// // //   };

// // //   return (
// // //     <div style={{ padding: "2rem", maxWidth: "600px", margin: "auto" }}>
// // //       <h2>🏫 College Dashboard</h2>
// // //       <textarea
// // //         rows={5}
// // //         placeholder="Paste seat matrix JSON"
// // //         value={seatMatrix}
// // //         onChange={(e) => setSeatMatrix(e.target.value)}
// // //         style={{ width: "100%" }}
// // //       />
// // //       <br /><br />
// // //       <button onClick={submitSeatMatrix}>Submit Matrix</button>
// // //       <br /><br />
// // //       <input type="file" accept="application/json" onChange={handleVCUpload} />
// // //       <br /><br />
// // //       <button onClick={verifyVC}>Verify VC</button>
// // //     </div>
// // //   );
// // // };

// // // export default CollegeDashboard;

// // import React, { useEffect, useState } from "react";
// // import seatMatrixData from "./seatMatrix.json"; // Updated path

// // const AdminDashboard = () => {
// //   const [seatMatrix, setSeatMatrix] = useState(seatMatrixData);
// //   const [applicants, setApplicants] = useState([]);
// //   const [selectedStudent, setSelectedStudent] = useState(null);

// //   const handleSeatSubmit = async () => {
// //     try {
// //       const res = await fetch("http://localhost:3001/api/admin/seat-matrix", {
// //         method: "POST",
// //         headers: { "Content-Type": "application/json" },
// //         body: JSON.stringify(seatMatrix),
// //       });
// //       const data = await res.json();
// //       alert("✅ Seat matrix submitted successfully!");
// //     } catch (err) {
// //       console.error("Seat matrix submission error:", err);
// //     }
// //   };

// //   const fetchApplicants = async () => {
// //     try {
// //       const res = await fetch("http://localhost:3001/api/admin/applicants");
// //       const data = await res.json();
// //       setApplicants(data);
// //     } catch (err) {
// //       console.error("Fetching applicants error:", err);
// //     }
// //   };

// //   const viewVC = async (studentId) => {
// //     try {
// //       const res = await fetch(`http://localhost:3001/api/admin/student/${studentId}`);
// //       const data = await res.json();
// //       setSelectedStudent(data);
// //     } catch (err) {
// //       console.error("Fetching VC error:", err);
// //     }
// //   };

// //   useEffect(() => {
// //     fetchApplicants();
// //   }, []);

// //   return (
// //     <div style={{ padding: "2rem", fontFamily: "Arial" }}>
// //       <h2>🏫 College Admin Dashboard</h2>

// //       <section style={{ marginTop: "2rem" }}>
// //         <h3>1️⃣ Upload Seat Matrix</h3>
// //         <pre style={{ backgroundColor: "#f8f8f8", padding: "1rem" }}>
// //           {JSON.stringify(seatMatrix, null, 2)}
// //         </pre>
// //         <button onClick={handleSeatSubmit} style={{ padding: "0.5rem 1rem", marginTop: "1rem", background: "green", color: "white" }}>
// //           📤 Submit Seat Matrix
// //         </button>
// //       </section>

// //       <section style={{ marginTop: "3rem" }}>
// //         <h3>2️⃣ View Applicants Who Chose This College</h3>
// //         <table border="1" cellPadding="10" style={{ width: "100%", marginTop: "1rem", borderCollapse: "collapse" }}>
// //           <thead>
// //             <tr>
// //               <th>DID</th>
// //               <th>Score</th>
// //               <th>Preference Rank</th>
// //               <th>Status</th>
// //               <th>🔍 VC</th>
// //             </tr>
// //           </thead>
// //           <tbody>
// //             {applicants.map((app, index) => (
// //               <tr key={index}>
// //                 <td>{app.did}</td>
// //                 <td>{app.score}</td>
// //                 <td>{app.preferenceRank}</td>
// //                 <td>{app.status}</td>
// //                 <td>
// //                   <button onClick={() => viewVC(app.did)} style={{ background: "#007bff", color: "white", padding: "5px 10px", borderRadius: "4px" }}>
// //                     View VC
// //                   </button>
// //                 </td>
// //               </tr>
// //             ))}
// //           </tbody>
// //         </table>
// //       </section>

// //       {selectedStudent && (
// //         <section style={{ marginTop: "3rem", background: "#f0f8ff", padding: "1rem", borderRadius: "8px" }}>
// //           <h3>🛡️ VC Verification - {selectedStudent.name}</h3>
// //           <p><strong>Issued By:</strong> {selectedStudent.issuer}</p>
// //           <p><strong>Blockchain Txn:</strong> {selectedStudent.txHash}</p>
// //           <p><strong>Status:</strong> {selectedStudent.vcStatus}</p>

// //           <h4>📄 VC Proof</h4>
// //           <pre style={{ background: "#fff", padding: "1rem", maxHeight: "300px", overflow: "auto" }}>
// //             {JSON.stringify(selectedStudent.vcData, null, 2)}
// //           </pre>
// //         </section>
// //       )}
// //     </div>
// //   );
// // };

// // export default AdminDashboard;


// // import React, { useState } from "react";

// // const CollegeDashboard = () => {
// //   const [step, setStep] = useState("register"); // 'register', 'login', or 'dashboard'
// //   const [form, setForm] = useState({ name: "", email: "", address: "", did: "" });
// //   const [seatMatrix, setSeatMatrix] = useState("");

// //   const handleChange = (e) => {
// //     setForm({ ...form, [e.target.name]: e.target.value });
// //   };

// //   const register = async () => {
// //     const res = await fetch("http://localhost:3001/api/college/register", {
// //       method: "POST",
// //       headers: { "Content-Type": "application/json" },
// //       body: JSON.stringify(form),
// //     });
// //     const data = await res.json();
// //     if (data.success) {
// //       alert("DID assigned: " + data.did);
// //       setForm({ ...form, did: data.did });
// //       setStep("login");
// //     }
// //   };

// //   const login = async () => {
// //     const res = await fetch("http://localhost:3001/api/college/login", {
// //       method: "POST",
// //       headers: { "Content-Type": "application/json" },
// //       body: JSON.stringify({ did: form.did }),
// //     });
// //     const data = await res.json();
// //     if (data.success) {
// //       alert("Login successful for: " + data.college.name);
// //       setStep("dashboard");
// //     } else {
// //       alert("Login failed. Check your DID.");
// //     }
// //   };

// //   const submitMatrix = async () => {
// //     const res = await fetch("http://localhost:3001/api/college/submitMatrix", {
// //       method: "POST",
// //       headers: { "Content-Type": "application/json" },
// //       body: JSON.stringify({ did: form.did, seatMatrix }),
// //     });
// //     const data = await res.json();
// //     alert(data.message);
// //   };

// //   return (
// //     <div style={{ padding: "2rem", maxWidth: "600px", margin: "auto" }}>
// //       <h2>🏫 College Dashboard</h2>

// //       {step === "register" && (
// //         <>
// //           <h3>Register College</h3>
// //           <input name="name" placeholder="College Name" value={form.name} onChange={handleChange} /><br /><br />
// //           <input name="email" placeholder="Email" value={form.email} onChange={handleChange} /><br /><br />
// //           <input name="address" placeholder="Address" value={form.address} onChange={handleChange} /><br /><br />
// //           <button onClick={register}>Register & Get DID</button>
// //         </>
// //       )}

// //       {step === "login" && (
// //         <>
// //           <h3>Login with DID</h3>
// //           <input name="did" placeholder="Enter your DID" value={form.did} onChange={handleChange} /><br /><br />
// //           <button onClick={login}>Login</button>
// //         </>
// //       )}

// //       {step === "dashboard" && (
// //         <>
// //           <h3>📥 Submit Seat Matrix</h3>
// //           <textarea
// //             rows={8}
// //             style={{ width: "100%" }}
// //             placeholder="Paste seat matrix JSON"
// //             value={seatMatrix}
// //             onChange={(e) => setSeatMatrix(e.target.value)}
// //           />
// //           <br /><br />
// //           <button onClick={submitMatrix}>Submit Matrix</button>
// //         </>
// //       )}
// //     </div>
// //   );
// // };

// // export default CollegeDashboard;

// import React, { useState } from "react";

// const CollegeDashboard = ({ did }) => {
//   const [matrixData, setMatrixData] = useState(null);

//   const handleFileUpload = (e) => {
//     const file = e.target.files[0];
//     const reader = new FileReader();

//     reader.onload = (event) => {
//       try {
//         const json = JSON.parse(event.target.result);
//         setMatrixData(json);
//       } catch (err) {
//         alert("Invalid JSON file");
//       }
//     };

//     if (file) reader.readAsText(file);
//   };

//   const handleSubmit = async () => {
//     if (!matrixData) {
//       alert("Upload seat matrix JSON first.");
//       return;
//     }

//     const res = await fetch("http://localhost:3001/api/college/submit-seats", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ did, matrix: matrixData }),
//     });

//     const data = await res.json();
//     alert(data.message);
//   };

//   return (
//     <div>
//       <h2>🎓 College Dashboard</h2>
//       <p><strong>DID:</strong> {did}</p>
//       <input type="file" accept=".json" onChange={handleFileUpload} />
//       <button onClick={handleSubmit}>Submit Seat Matrix</button>
//     </div>
//   );
// };

// export default CollegeDashboard;

import React, { useState } from "react";

const CollegeDashboard = () => {
  const [collegeId, setCollegeId] = useState("");
  const [seatMatrix, setSeatMatrix] = useState("");
  const [studentId, setStudentId] = useState("");
  const [gateScore, setGateScore] = useState("");
  const [vcToVerify, setVcToVerify] = useState(null);
  const [vcResult, setVcResult] = useState(null);

  const handleSeatMatrixChange = (e) => setSeatMatrix(e.target.value);
  const handleVCUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = () => setVcToVerify(JSON.parse(reader.result));
    reader.readAsText(file);
  };

  const submitSeatMatrix = async () => {
    try {
      const res = await fetch("http://localhost:3001/api/college/submit-seats", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ did:collegeId, seatMatrix: JSON.parse(seatMatrix) }),
      });
    //   console.log(data);
      const data = await res.json();
    //   console.log(data);
      alert(data,"✅ Seat matrix submitted successfully");
      console.log(data);
    } catch (err) {
      console.error("Error submitting seat matrix:", err);
      alert("❌ Error submitting seat matrix");
    }
  };

  const issueGateVC = async () => {
    try {
      const res = await fetch("http://localhost:3001/api/college/issue-gate-vc", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ studentId, gateScore }),
      });
      const data = await res.json();
      alert("🎓 GATE VC issued successfully");
      console.log(data);
    } catch (err) {
      console.error("Error issuing VC:", err);
      alert("❌ Error issuing VC");
    }
  };

  const verifyVC = async () => {
    try {
      const res = await fetch(`http://localhost:3001/api/student/${studentId}/verify-vc`, {
        method: "GET",
      });
      const data = await res.json();
      setVcResult(data.verificationResult);
      alert("✅ VC verified");
    } catch (err) {
      console.error("Error verifying VC:", err);
      alert("❌ VC verification failed");
    }
  };

  return (
    <div style={{ padding: "2rem", maxWidth: "700px", margin: "auto" }}>
      <h2>🏫 College Dashboard</h2>

      <div style={{ marginBottom: "2rem" }}>
        <h4>🔑 College ID</h4>
        <input
          type="text"
          name="collegeId"
          value={collegeId}
          onChange={(e) => setCollegeId(e.target.value)}
          placeholder="Enter your College ID (DID)"
          style={{ width: "100%", padding: "0.5rem" }}
        />
      </div>

      <div style={{ marginBottom: "2rem" }}>
        <h4>🪑 Submit Seat Matrix (JSON)</h4>
        <textarea
          rows={6}
          placeholder='{"CSE": 30, "ECE": 20}'
          value={seatMatrix}
          onChange={handleSeatMatrixChange}
          style={{ width: "100%", padding: "1rem", fontFamily: "monospace" }}
        />
        <button onClick={submitSeatMatrix} style={{ marginTop: "1rem" }}>
          📤 Submit Seat Matrix
        </button>
      </div>

      <div style={{ marginBottom: "2rem" }}>
        <h4>🎓 Issue GATE VC</h4>
        <input
          type="text"
          placeholder="Student ID (DID)"
          value={studentId}
          onChange={(e) => setStudentId(e.target.value)}
          style={{ width: "100%", padding: "0.5rem", marginBottom: "0.5rem" }}
        />
        <input
          type="text"
          placeholder="GATE Score"
          value={gateScore}
          onChange={(e) => setGateScore(e.target.value)}
          style={{ width: "100%", padding: "0.5rem" }}
        />
        <button onClick={issueGateVC} style={{ marginTop: "1rem" }}>
          🧾 Issue GATE VC
        </button>
      </div>

      <div style={{ marginBottom: "2rem" }}>
        <h4>🛡️ Verify Student VC</h4>
        <input
          type="text"
          placeholder="Student ID (DID)"
          value={studentId}
          onChange={(e) => setStudentId(e.target.value)}
          style={{ width: "100%", padding: "0.5rem", marginBottom: "0.5rem" }}
        />
        <button onClick={verifyVC}>🔍 Verify VC</button>
        {vcResult && (
          <pre style={{ background: "#eee", padding: "1rem", marginTop: "1rem", maxHeight: "200px", overflow: "auto" }}>
            {JSON.stringify(vcResult, null, 2)}
          </pre>
        )}
      </div>

      <div>
        <h4>📂 Upload VC for Verification (local file)</h4>
        <input type="file" accept="application/json" onChange={handleVCUpload} />
        {vcToVerify && (
          <pre style={{ background: "#f0f0f0", padding: "1rem", marginTop: "1rem", maxHeight: "200px", overflow: "auto" }}>
            {JSON.stringify(vcToVerify, null, 2)}
          </pre>
        )}
      </div>
    </div>
  );
};

export default CollegeDashboard;
