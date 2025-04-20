// // // // import React from 'react';
// // // // import VCUpload from '../components/VCUpload';
// // // // import SeatMatrixForm from '../components/SeatMatrixForm';
// // // // import AllotmentResult from '../components/AllotmentResult';

// // // // const StudentDashboard = () => (
// // // //   <div className="p-4">
// // // //     <h1 className="text-xl font-bold mb-4">Student Dashboard</h1>
// // // //     <VCUpload />
// // // //     <AllotmentResult />
// // // //   </div>
// // // // );

// // // // export default StudentDashboard;

// // // // src/routes/StudentDashboard.jsx
// // // // import React from 'react';

// // // // const StudentDashboard = () => {
// // // //   return (
// // // //     <div className="p-4">
// // // //       <h1 className="text-2xl font-bold mb-4">Student Dashboard</h1>
// // // //       <p>Welcome to the DeSAT student dashboard!</p>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default StudentDashboard;
// // // // src/routes/StudentDashboard.jsx


// // // // src/routes/StudentDashboard.jsx
// // // import React, { useState } from "react";

// // // const StudentDashboard = () => {
// // //   const [vc, setVC] = useState(null);
// // //   const [preference, setPreference] = useState("");
// // //   const [result, setResult] = useState(null);

// // //   const handleUpload = (e) => {
// // //     const file = e.target.files[0];
// // //     const reader = new FileReader();
// // //     reader.onload = () => setVC(JSON.parse(reader.result));
// // //     reader.readAsText(file);
// // //   };

// // //   const submitPreferences = async () => {
// // //     try {
// // //       const res = await fetch("http://localhost:3001/api/student/submit", {
// // //         method: "POST",
// // //         headers: { "Content-Type": "application/json" },
// // //         body: JSON.stringify({ vc, preference }),
// // //       });
// // //       const data = await res.json();
// // //       setResult(data.result);
// // //     } catch (err) {
// // //       console.error("Submission error:", err);
// // //     }
// // //   };

// // //   return (
// // //     <div style={{ padding: "2rem", maxWidth: "600px", margin: "auto" }}>
// // //       <h2>🎓 Student Dashboard</h2>
// // //       <input type="file" accept="application/json" onChange={handleUpload} />
// // //       <br /><br />
// // //       <input
// // //         type="text"
// // //         placeholder="Enter college preferences"
// // //         value={preference}
// // //         onChange={(e) => setPreference(e.target.value)}
// // //       />
// // //       <br /><br />
// // //       <button onClick={submitPreferences}>Submit Preferences</button>
// // //       {result && <div style={{ marginTop: "1rem", color: "green" }}>Seat Allotted: {result}</div>}
// // //     </div>
// // //   );
// // // };

// // // export default StudentDashboard;
// // // // src/routes/StudentDashboard.jsx

// // // import React, { useState } from "react";

// // // const StudentDashboard = () => {
// // //   const [formData, setFormData] = useState({
// // //     gateRegId: "",
// // //     gateYear: "",
// // //     gatePaper: "",
// // //     gateScore: "",
// // //     gateMarks: "",
// // //     name: "",
// // //     fatherName: "",
// // //     motherName: "",
// // //     dob: "",
// // //     gender: "",
// // //     category: "",
// // //     nationality: "",
// // //     mobile: "",
// // //     email: "",
// // //     address: "",
// // //     pincode: "",
// // //     aadhaar: "",
// // //     pwd: "",
// // //     degree: "",
// // //     degreeName: "",
// // //     stream: "",
// // //     yearPassing: "",
// // //     percentage: "",
// // //     degreeStatus: "",
// // //     resultStatus: "",
// // //     preparationMode: "",
// // //     accountName: "",
// // //     bankName: "",
// // //     accountNumber: "",
// // //     branchName: "",
// // //     ifsc: ""
// // //   });

// // //   const [documents, setDocuments] = useState({
// // //     gateScorecard: null,
// // //     markSheets: null,
// // //     categoryCert: null
// // //   });

// // //   const [preference, setPreference] = useState("");
// // //   const [result, setResult] = useState(null);

// // //   const handleChange = (e) => {
// // //     const { name, value } = e.target;
// // //     setFormData(prev => ({ ...prev, [name]: value }));
// // //   };

// // //   const handleFileChange = (e) => {
// // //     const { name, files } = e.target;
// // //     setDocuments(prev => ({ ...prev, [name]: files[0] }));
// // //   };

// // //   const submitForm = async () => {
// // //     const vc = { ...formData, preference };

// // //     try {
// // //       const res = await fetch("http://localhost:3001/api/student/submit", {
// // //         method: "POST",
// // //         headers: { "Content-Type": "application/json" },
// // //         body: JSON.stringify({ vc, preference }),
// // //       });

// // //       const data = await res.json();
// // //       setResult(data.result);
// // //     } catch (err) {
// // //       console.error("Submission error:", err);
// // //     }
// // //   };

// // //   return (
// // //     <div style={{ padding: "2rem", maxWidth: "900px", margin: "auto" }}>
// // //       <h2>🎓 Student Dashboard</h2>

// // //       <fieldset>
// // //         <legend><strong>GATE Details</strong></legend>
// // //         <input name="gateRegId" placeholder="GATE Registration ID" onChange={handleChange} />
// // //         <input name="gateYear" placeholder="GATE Exam Year" onChange={handleChange} />
// // //         <input name="gatePaper" placeholder="GATE Exam Paper" onChange={handleChange} />
// // //         <input name="gateScore" placeholder="GATE Score" onChange={handleChange} />
// // //         <input name="gateMarks" placeholder="GATE Marks" onChange={handleChange} />
// // //       </fieldset>

// // //       <fieldset>
// // //         <legend><strong>Personal Details</strong></legend>
// // //         <input name="name" placeholder="Name" onChange={handleChange} />
// // //         <input name="fatherName" placeholder="Father's Name" onChange={handleChange} />
// // //         <input name="motherName" placeholder="Mother's Name" onChange={handleChange} />
// // //         <input name="dob" placeholder="Date of Birth" onChange={handleChange} />
// // //         <input name="gender" placeholder="Gender" onChange={handleChange} />
// // //         <input name="category" placeholder="Category" onChange={handleChange} />
// // //         <input name="nationality" placeholder="Nationality" onChange={handleChange} />
// // //         <input name="mobile" placeholder="Mobile Number" onChange={handleChange} />
// // //         <input name="email" placeholder="Email" onChange={handleChange} />
// // //         <input name="address" placeholder="Address" onChange={handleChange} />
// // //         <input name="pincode" placeholder="Pin Code" onChange={handleChange} />
// // //         <input name="aadhaar" placeholder="Aadhaar (optional)" onChange={handleChange} />
// // //         <input name="pwd" placeholder="PwD Status (Yes/No)" onChange={handleChange} />
// // //       </fieldset>

// // //       <fieldset>
// // //         <legend><strong>Educational Details</strong></legend>
// // //         <input name="degree" placeholder="Degree (e.g. B.Tech)" onChange={handleChange} />
// // //         <input name="degreeName" placeholder="Degree Name" onChange={handleChange} />
// // //         <input name="stream" placeholder="Stream" onChange={handleChange} />
// // //         <input name="yearPassing" placeholder="Year of Passing" onChange={handleChange} />
// // //         <input name="percentage" placeholder="Percentage / CGPA" onChange={handleChange} />
// // //         <input name="degreeStatus" placeholder="Degree Status" onChange={handleChange} />
// // //         <input name="resultStatus" placeholder="Result Status" onChange={handleChange} />
// // //         <input name="preparationMode" placeholder="Preparation Mode" onChange={handleChange} />
// // //       </fieldset>

// // //       <fieldset>
// // //         <legend><strong>Bank Details</strong></legend>
// // //         <input name="accountName" placeholder="Account Holder's Name" onChange={handleChange} />
// // //         <input name="bankName" placeholder="Bank Name" onChange={handleChange} />
// // //         <input name="accountNumber" placeholder="Account Number" onChange={handleChange} />
// // //         <input name="branchName" placeholder="Bank Branch Name" onChange={handleChange} />
// // //         <input name="ifsc" placeholder="IFSC Code" onChange={handleChange} />
// // //       </fieldset>

// // //       <fieldset>
// // //         <legend><strong>Documents Upload</strong></legend>
// // //         <input type="file" name="gateScorecard" accept=".pdf,.jpg,.png" onChange={handleFileChange} />
// // //         <input type="file" name="markSheets" accept=".pdf,.jpg,.png" onChange={handleFileChange} />
// // //         <input type="file" name="categoryCert" accept=".pdf,.jpg,.png" onChange={handleFileChange} />
// // //       </fieldset>

// // //       <fieldset>
// // //         <legend><strong>College Preferences</strong></legend>
// // //         <input
// // //           type="text"
// // //           placeholder="Enter preferences (comma separated)"
// // //           value={preference}
// // //           onChange={(e) => setPreference(e.target.value)}
// // //         />
// // //       </fieldset>

// // //       <br />
// // //       <button onClick={submitForm}>Submit</button>
// // //       {result && <div style={{ marginTop: "1rem", color: "green" }}>Seat Allotted: {result}</div>}
// // //     </div>
// // //   );
// // // };

// // // export default StudentDashboard;


// // // import React, { useState } from "react";

// // // const StudentDashboard = () => {
// // //   const [formData, setFormData] = useState({
// // //     gateRegId: "",
// // //     gateYear: "",
// // //     gatePaper: "",
// // //     gateScore: "",
// // //     gateMarks: "",
// // //     name: "",
// // //     fatherName: "",
// // //     motherName: "",
// // //     dob: "",
// // //     gender: "",
// // //     category: "",
// // //     nationality: "",
// // //     mobile: "",
// // //     email: "",
// // //     address: "",
// // //     pincode: "",
// // //     aadhaar: "",
// // //     pwd: "",
// // //     degree: "",
// // //     degreeName: "",
// // //     stream: "",
// // //     yearPassing: "",
// // //     percentage: "",
// // //     degreeStatus: "",
// // //     resultStatus: "",
// // //     preparationMode: "",
// // //     accountName: "",
// // //     bankName: "",
// // //     accountNumber: "",
// // //     branchName: "",
// // //     ifsc: "",
// // //     branchPreference: "",
// // //     collegePreference: "",
// // //   });

// // //   const [documents, setDocuments] = useState({
// // //     gateScorecard: null,
// // //     markSheets: null,
// // //     categoryCert: null,
// // //   });

// // //   const [preference, setPreference] = useState("");
// // //   const [result, setResult] = useState(null);

// // //   const handleChange = (e) => {
// // //     const { name, value } = e.target;
// // //     setFormData((prev) => ({ ...prev, [name]: value }));
// // //   };

// // //   const handleFileChange = (e) => {
// // //     const { name, files } = e.target;
// // //     setDocuments((prev) => ({ ...prev, [name]: files[0] }));
// // //   };

// // //   const submitForm = async () => {
// // //     const vc = { ...formData, preference };

// // //     try {
// // //       const res = await fetch("http://localhost:3001/api/student/submit", {
// // //         method: "POST",
// // //         headers: { "Content-Type": "application/json" },
// // //         body: JSON.stringify({ vc, preference }),
// // //       });

// // //       const data = await res.json();
// // //       setResult(data.result);
// // //     } catch (err) {
// // //       console.error("Submission error:", err);
// // //     }
// // //   };

// // //   const renderInput = (name, label, type = "text", required = false) => (
// // //     <div style={{ marginBottom: "1rem" }}>
// // //       <label><strong>{label}</strong></label><br />
// // //       <input
// // //         type={type}
// // //         name={name}
// // //         value={formData[name]}
// // //         onChange={handleChange}
// // //         placeholder={label}
// // //         required={required}
// // //         style={{
// // //           width: "100%",
// // //           padding: "8px",
// // //           borderRadius: "4px",
// // //           border: "1px solid #ccc",
// // //           marginTop: "4px",
// // //         }}
// // //       />
// // //     </div>
// // //   );

// // //   const renderFileInput = (name, label) => (
// // //     <div style={{ marginBottom: "1rem" }}>
// // //       <label><strong>{label}</strong> ({name}.pdf/.jpg/.png)</label><br />
// // //       <input
// // //         type="file"
// // //         name={name}
// // //         accept=".pdf,.jpg,.png"
// // //         onChange={handleFileChange}
// // //         style={{
// // //           padding: "8px",
// // //           marginTop: "4px",
// // //         }}
// // //       />
// // //     </div>
// // //   );

// // //   return (
// // //     <div style={{ padding: "2rem", maxWidth: "900px", margin: "auto", fontFamily: "Arial" }}>
// // //       <h2 style={{ textAlign: "center", marginBottom: "2rem" }}>🎓 Student Dashboard</h2>

// // //       <form>
// // //         <fieldset style={{ border: "1px solid #ccc", padding: "1rem", marginBottom: "2rem" }}>
// // //           <legend><strong>GATE Details</strong></legend>
// // //           {renderInput("gateRegId", "GATE Registration ID")}
// // //           {renderInput("gateYear", "GATE Exam Year")}
// // //           {renderInput("gatePaper", "GATE Exam Paper")}
// // //           {renderInput("gateScore", "GATE Score")}
// // //           {renderInput("gateMarks", "Marks Obtained in GATE")}
// // //         </fieldset>

// // //         <fieldset style={{ border: "1px solid #ccc", padding: "1rem", marginBottom: "2rem" }}>
// // //           <legend><strong>Personal Details</strong></legend>
// // //           {renderInput("name", "Candidate's Name")}
// // //           {renderInput("fatherName", "Father's Name")}
// // //           {renderInput("motherName", "Mother's Name")}
// // //           {renderInput("dob", "Date of Birth", "date")}
// // //           {renderInput("gender", "Gender")}
// // //           {renderInput("category", "Category")}
// // //           {renderInput("nationality", "Nationality")}
// // //           {renderInput("mobile", "Mobile Number")}
// // //           {renderInput("email", "Email ID", "email")}
// // //           {renderInput("address", "Complete Address")}
// // //           {renderInput("pincode", "Pin Code")}
// // //           {renderInput("aadhaar", "Aadhaar Number (Optional)")}
// // //           {renderInput("pwd", "PwD Status (Yes/No)")}
// // //         </fieldset>

// // //         <fieldset style={{ border: "1px solid #ccc", padding: "1rem", marginBottom: "2rem" }}>
// // //           <legend><strong>Educational Details</strong></legend>
// // //           {renderInput("degree", "Qualifying Degree")}
// // //           {renderInput("degreeName", "Name of the Degree")}
// // //           {renderInput("stream", "Qualifying Stream")}
// // //           {renderInput("yearPassing", "Year of Passing")}
// // //           {renderInput("percentage", "CGPA / Percentage")}
// // //           {renderInput("degreeStatus", "Degree Status")}
// // //           {renderInput("resultStatus", "Result Status")}
// // //           {renderInput("preparationMode", "Preparation Mode")}
// // //         </fieldset>

// // //         <fieldset style={{ border: "1px solid #ccc", padding: "1rem", marginBottom: "2rem" }}>
// // //           <legend><strong>Bank Details</strong></legend>
// // //           {renderInput("accountName", "Account Holder's Name")}
// // //           {renderInput("bankName", "Bank Name")}
// // //           {renderInput("accountNumber", "Account Number")}
// // //           {renderInput("branchName", "Bank Branch Name")}
// // //           {renderInput("ifsc", "IFSC Code")}
// // //         </fieldset>

// // //         <fieldset style={{ border: "1px solid #ccc", padding: "1rem", marginBottom: "2rem" }}>
// // //           <legend><strong>Documents Upload</strong></legend>
// // //           {renderFileInput("gateScorecard", "GATE Scorecard")}
// // //           {renderFileInput("markSheets", "Mark Sheets")}
// // //           {renderFileInput("categoryCert", "Category Certificate (if applicable)")}
// // //         </fieldset>

// // //         <fieldset style={{ border: "1px solid #ccc", padding: "1rem", marginBottom: "2rem" }}>
// // //           <legend><strong>College Preferences</strong></legend>
// // //           <input
// // //             type="text"
// // //             placeholder="Enter preferences (comma separated)"
// // //             value={preference}
// // //             onChange={(e) => setPreference(e.target.value)}
// // //             style={{
// // //               width: "100%",
// // //               padding: "8px",
// // //               borderRadius: "4px",
// // //               border: "1px solid #ccc",
// // //               marginTop: "4px",
// // //             }}
// // //           />
// // //         </fieldset>

// // //         <button
// // //           type="button"
// // //           onClick={submitForm}
// // //           style={{
// // //             backgroundColor: "#4CAF50",
// // //             color: "white",
// // //             padding: "12px 20px",
// // //             border: "none",
// // //             borderRadius: "4px",
// // //             cursor: "pointer",
// // //             width: "100%",
// // //           }}
// // //         >
// // //           Submit
// // //         </button>

// // //         {result && (
// // //           <div style={{ marginTop: "1rem", color: "green", textAlign: "center" }}>
// // //             ✅ Seat Allotted: {result}
// // //           </div>
// // //         )}
// // //       </form>
// // //     </div>
// // //   );
// // // };

// // // export default StudentDashboard;
// // import React, { useState } from "react";

// // const StudentDashboard = () => {
// //   const [formData, setFormData] = useState({
// //     gateRegId: "",
// //     gateYear: "",
// //     gatePaper: "",
// //     gateScore: "",
// //     gateMarks: "",
// //     name: "",
// //     fatherName: "",
// //     motherName: "",
// //     dob: "",
// //     gender: "",
// //     category: "",
// //     nationality: "",
// //     mobile: "",
// //     email: "",
// //     address: "",
// //     pincode: "",
// //     aadhaar: "",
// //     pwd: "",
// //     degree: "",
// //     degreeName: "",
// //     stream: "",
// //     yearPassing: "",
// //     percentage: "",
// //     degreeStatus: "",
// //     resultStatus: "",
// //     preparationMode: "",
// //     accountName: "",
// //     bankName: "",
// //     accountNumber: "",
// //     branchName: "",
// //     ifsc: "",
// //     branchPreference: "",
// //     collegePreference: "",
// //   });

// //   const [documents, setDocuments] = useState({
// //     gateScorecard: null,
// //     markSheets: null,
// //     categoryCert: null,
// //   });

// //   const [preference, setPreference] = useState("");
// //   const [result, setResult] = useState(null);

// //   const branches = ["CSE", "ECE", "Mechanical", "Civil", "EEE", "IT"];
// //   const colleges = ["IIT Delhi", "IIT Bombay", "NIT Trichy", "NIT Warangal", "IIIT Hyderabad"];

// //   const handleChange = (e) => {
// //     const { name, value } = e.target;
// //     setFormData((prev) => ({ ...prev, [name]: value }));
// //   };

// //   const handleFileChange = (e) => {
// //     const { name, files } = e.target;
// //     setDocuments((prev) => ({ ...prev, [name]: files[0] }));
// //   };

// //   const submitForm = async () => {
// //     const vc = { ...formData, preference };

// //     try {
// //       const res = await fetch("http://localhost:3001/api/student/submit", {
// //         method: "POST",
// //         headers: { "Content-Type": "application/json" },
// //         body: JSON.stringify({ vc, preference }),
// //       });

// //       const data = await res.json();
// //       setResult(data.result);
// //     } catch (err) {
// //       console.error("Submission error:", err);
// //     }
// //   };

// //   const renderInput = (name, label, type = "text", required = false) => (
// //     <div style={{ marginBottom: "1rem" }}>
// //       <label><strong>{label}</strong></label><br />
// //       <input
// //         type={type}
// //         name={name}
// //         value={formData[name]}
// //         onChange={handleChange}
// //         placeholder={label}
// //         required={required}
// //         style={{
// //           width: "100%",
// //           padding: "8px",
// //           borderRadius: "4px",
// //           border: "1px solid #ccc",
// //           marginTop: "4px",
// //         }}
// //       />
// //     </div>
// //   );

// //   const renderFileInput = (name, label) => (
// //     <div style={{ marginBottom: "1rem" }}>
// //       <label><strong>{label}</strong> ({name}.pdf/.jpg/.png)</label><br />
// //       <input
// //         type="file"
// //         name={name}
// //         accept=".pdf,.jpg,.png"
// //         onChange={handleFileChange}
// //         style={{
// //           padding: "8px",
// //           marginTop: "4px",
// //         }}
// //       />
// //     </div>
// //   );

// //   return (
// //     <div style={{ padding: "2rem", maxWidth: "900px", margin: "auto", fontFamily: "Arial" }}>
// //       <h2 style={{ textAlign: "center", marginBottom: "2rem" }}>🎓 Student Dashboard</h2>

// //       <form>
// //         <fieldset style={{ border: "1px solid #ccc", padding: "1rem", marginBottom: "2rem" }}>
// //           <legend><strong>GATE Details</strong></legend>
// //           {renderInput("gateRegId", "GATE Registration ID")}
// //           {renderInput("gateYear", "GATE Exam Year")}
// //           {renderInput("gatePaper", "GATE Exam Paper")}
// //           {renderInput("gateScore", "GATE Score")}
// //           {renderInput("gateMarks", "Marks Obtained in GATE")}
// //         </fieldset>

// //         <fieldset style={{ border: "1px solid #ccc", padding: "1rem", marginBottom: "2rem" }}>
// //           <legend><strong>Personal Details</strong></legend>
// //           {renderInput("name", "Candidate's Name")}
// //           {renderInput("fatherName", "Father's Name")}
// //           {renderInput("motherName", "Mother's Name")}
// //           {renderInput("dob", "Date of Birth", "date")}
// //           {renderInput("gender", "Gender")}
// //           {renderInput("category", "Category")}
// //           {renderInput("nationality", "Nationality")}
// //           {renderInput("mobile", "Mobile Number")}
// //           {renderInput("email", "Email ID", "email")}
// //           {renderInput("address", "Complete Address")}
// //           {renderInput("pincode", "Pin Code")}
// //           {renderInput("aadhaar", "Aadhaar Number (Optional)")}
// //           {renderInput("pwd", "PwD Status (Yes/No)")}
// //         </fieldset>

// //         <fieldset style={{ border: "1px solid #ccc", padding: "1rem", marginBottom: "2rem" }}>
// //           <legend><strong>Educational Details</strong></legend>
// //           {renderInput("degree", "Qualifying Degree")}
// //           {renderInput("degreeName", "Name of the Degree")}
// //           {renderInput("stream", "Qualifying Stream")}
// //           {renderInput("yearPassing", "Year of Passing")}
// //           {renderInput("percentage", "CGPA / Percentage")}
// //           {renderInput("degreeStatus", "Degree Status")}
// //           {renderInput("resultStatus", "Result Status")}
// //           {renderInput("preparationMode", "Preparation Mode")}
// //         </fieldset>

// //         <fieldset style={{ border: "1px solid #ccc", padding: "1rem", marginBottom: "2rem" }}>
// //           <legend><strong>Bank Details</strong></legend>
// //           {renderInput("accountName", "Account Holder's Name")}
// //           {renderInput("bankName", "Bank Name")}
// //           {renderInput("accountNumber", "Account Number")}
// //           {renderInput("branchName", "Bank Branch Name")}
// //           {renderInput("ifsc", "IFSC Code")}
// //         </fieldset>

// //         <fieldset style={{ border: "1px solid #ccc", padding: "1rem", marginBottom: "2rem" }}>
// //           <legend><strong>Documents Upload</strong></legend>
// //           {renderFileInput("gateScorecard", "GATE Scorecard")}
// //           {renderFileInput("markSheets", "Mark Sheets")}
// //           {renderFileInput("categoryCert", "Category Certificate (if applicable)")}
// //         </fieldset>

// //         <fieldset style={{ border: "1px solid #ccc", padding: "1rem", marginBottom: "2rem" }}>
// //           <legend><strong>College Preferences</strong></legend>

// //           <div style={{ marginBottom: "1rem" }}>
// //             <label><strong>Select Preferred Branch</strong></label><br />
// //             <select
// //               name="branchPreference"
// //               value={formData.branchPreference}
// //               onChange={handleChange}
// //               style={{
// //                 width: "100%",
// //                 padding: "8px",
// //                 borderRadius: "4px",
// //                 border: "1px solid #ccc",
// //                 marginTop: "4px",
// //               }}
// //             >
// //               <option value="">-- Select Branch --</option>
// //               {branches.map((branch) => (
// //                 <option key={branch} value={branch}>{branch}</option>
// //               ))}
// //             </select>
// //           </div>

// //           <div style={{ marginBottom: "1rem" }}>
// //             <label><strong>Select Preferred College</strong></label><br />
// //             <select
// //               name="collegePreference"
// //               value={formData.collegePreference}
// //               onChange={handleChange}
// //               style={{
// //                 width: "100%",
// //                 padding: "8px",
// //                 borderRadius: "4px",
// //                 border: "1px solid #ccc",
// //                 marginTop: "4px",
// //               }}
// //             >
// //               <option value="">-- Select College --</option>
// //               {colleges.map((college) => (
// //                 <option key={college} value={college}>{college}</option>
// //               ))}
// //             </select>
// //           </div>

// //           <div>
// //             <label><strong>Other Preferences (comma separated)</strong></label><br />
// //             <input
// //               type="text"
// //               placeholder="e.g., IIT Kharagpur, NIT Calicut"
// //               value={preference}
// //               onChange={(e) => setPreference(e.target.value)}
// //               style={{
// //                 width: "100%",
// //                 padding: "8px",
// //                 borderRadius: "4px",
// //                 border: "1px solid #ccc",
// //                 marginTop: "4px",
// //               }}
// //             />
// //           </div>
// //         </fieldset>

// //         <button
// //           type="button"
// //           onClick={submitForm}
// //           style={{
// //             backgroundColor: "#4CAF50",
// //             color: "white",
// //             padding: "12px 20px",
// //             border: "none",
// //             borderRadius: "4px",
// //             cursor: "pointer",
// //             width: "100%",
// //           }}
// //         >
// //           Submit
// //         </button>

// //         {result && (
// //           <div style={{ marginTop: "1rem", color: "green", textAlign: "center" }}>
// //             ✅ Seat Allotted: {result}
// //           </div>
// //         )}
// //       </form>
// //     </div>
// //   );
// // };

// // export default StudentDashboard;

// import React, { useEffect, useState } from "react";

// const StudentDashboard = () => {
//   const [formData, setFormData] = useState({
//     gateRegId: "",
//     gateYear: "",
//     gatePaper: "",
//     gateScore: "",
//     gateMarks: "",
//     name: "",
//     fatherName: "",
//     motherName: "",
//     dob: "",
//     gender: "",
//     category: "",
//     nationality: "",
//     mobile: "",
//     email: "",
//     address: "",
//     pincode: "",
//     aadhaar: "",
//     pwd: "",
//     degree: "",
//     degreeName: "",
//     stream: "",
//     yearPassing: "",
//     percentage: "",
//     degreeStatus: "",
//     resultStatus: "",
//     preparationMode: "",
//     accountName: "",
//     bankName: "",
//     accountNumber: "",
//     branchName: "",
//     ifsc: "",
//   });

//   const [documents, setDocuments] = useState({
//     gateScorecard: null,
//     markSheets: null,
//     categoryCert: null,
//   });

//   const [colleges, setColleges] = useState([]);
//   const [branches, setBranches] = useState([]);
//   const [preferences, setPreferences] = useState([{ college: "", branch: "" }]);
//   const [result, setResult] = useState(null);

//   useEffect(() => {
//     const fetchOptions = async () => {
//       try {
//         const collegeRes = await fetch("http://localhost:3001/api/options/colleges");
//         const branchRes = await fetch("http://localhost:3001/api/options/branches");

//         const collegesData = await collegeRes.json();
//         const branchesData = await branchRes.json();

//         setColleges(collegesData);
//         setBranches(branchesData);
//       } catch (err) {
//         console.error("Error fetching options:", err);
//       }
//     };

//     fetchOptions();
//   }, []);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleFileChange = (e) => {
//     const { name, files } = e.target;
//     setDocuments((prev) => ({ ...prev, [name]: files[0] }));
//   };

//   const handlePreferenceChange = (index, field, value) => {
//     const updated = [...preferences];
//     updated[index][field] = value;
//     setPreferences(updated);
//   };

//   const addPreference = () => {
//     setPreferences([...preferences, { college: "", branch: "" }]);
//   };

//   const removePreference = (index) => {
//     const updated = preferences.filter((_, i) => i !== index);
//     setPreferences(updated);
//   };

//   const submitForm = async () => {
//     const vc = { ...formData, preferences };

//     try {
//       const res = await fetch("http://localhost:3001/api/student/submit", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(vc),
//       });

//       const data = await res.json();
//       setResult(data.result);
//     } catch (err) {
//       console.error("Submission error:", err);
//     }
//   };

//   const renderInput = (name, label, type = "text", required = false) => (
//     <div style={{ marginBottom: "1rem" }}>
//       <label><strong>{label}</strong></label><br />
//       <input
//         type={type}
//         name={name}
//         value={formData[name]}
//         onChange={handleChange}
//         placeholder={label}
//         required={required}
//         style={{
//           width: "100%",
//           padding: "8px",
//           borderRadius: "4px",
//           border: "1px solid #ccc",
//           marginTop: "4px",
//         }}
//       />
//     </div>
//   );

//   const renderFileInput = (name, label) => (
//     <div style={{ marginBottom: "1rem" }}>
//       <label><strong>{label}</strong> ({name}.pdf/.jpg/.png)</label><br />
//       <input
//         type="file"
//         name={name}
//         accept=".pdf,.jpg,.png"
//         onChange={handleFileChange}
//         style={{
//           padding: "8px",
//           marginTop: "4px",
//         }}
//       />
//     </div>
//   );

//   return (
//     <div style={{ padding: "2rem", maxWidth: "900px", margin: "auto", fontFamily: "Arial" }}>
//       <h2 style={{ textAlign: "center", marginBottom: "2rem" }}>🎓 Student Dashboard</h2>

//       <form>
//         <fieldset style={{ border: "1px solid #ccc", padding: "1rem", marginBottom: "2rem" }}>
//           <legend><strong>GATE Details</strong></legend>
//           {renderInput("gateRegId", "GATE Registration ID")}
//           {renderInput("gateYear", "GATE Exam Year")}
//           {renderInput("gatePaper", "GATE Exam Paper")}
//           {renderInput("gateScore", "GATE Score")}
//           {renderInput("gateMarks", "Marks Obtained in GATE")}
//         </fieldset>

//         <fieldset style={{ border: "1px solid #ccc", padding: "1rem", marginBottom: "2rem" }}>
//           <legend><strong>Personal Details</strong></legend>
//           {renderInput("name", "Candidate's Name")}
//           {renderInput("fatherName", "Father's Name")}
//           {renderInput("motherName", "Mother's Name")}
//           {renderInput("dob", "Date of Birth", "date")}
//           {renderInput("gender", "Gender")}
//           {renderInput("category", "Category")}
//           {renderInput("nationality", "Nationality")}
//           {renderInput("mobile", "Mobile Number")}
//           {renderInput("email", "Email ID", "email")}
//           {renderInput("address", "Complete Address")}
//           {renderInput("pincode", "Pin Code")}
//           {renderInput("aadhaar", "Aadhaar Number (Optional)")}
//           {renderInput("pwd", "PwD Status (Yes/No)")}
//         </fieldset>

//         <fieldset style={{ border: "1px solid #ccc", padding: "1rem", marginBottom: "2rem" }}>
//           <legend><strong>Educational Details</strong></legend>
//           {renderInput("degree", "Qualifying Degree")}
//           {renderInput("degreeName", "Name of the Degree")}
//           {renderInput("stream", "Qualifying Stream")}
//           {renderInput("yearPassing", "Year of Passing")}
//           {renderInput("percentage", "CGPA / Percentage")}
//           {renderInput("degreeStatus", "Degree Status")}
//           {renderInput("resultStatus", "Result Status")}
//           {renderInput("preparationMode", "Preparation Mode")}
//         </fieldset>

//         <fieldset style={{ border: "1px solid #ccc", padding: "1rem", marginBottom: "2rem" }}>
//           <legend><strong>Bank Details</strong></legend>
//           {renderInput("accountName", "Account Holder's Name")}
//           {renderInput("bankName", "Bank Name")}
//           {renderInput("accountNumber", "Account Number")}
//           {renderInput("branchName", "Bank Branch Name")}
//           {renderInput("ifsc", "IFSC Code")}
//         </fieldset>

//         <fieldset style={{ border: "1px solid #ccc", padding: "1rem", marginBottom: "2rem" }}>
//           <legend><strong>Documents Upload</strong></legend>
//           {renderFileInput("gateScorecard", "GATE Scorecard")}
//           {renderFileInput("markSheets", "Mark Sheets")}
//           {renderFileInput("categoryCert", "Category Certificate (if applicable)")}
//         </fieldset>

//         <fieldset style={{ border: "1px solid #ccc", padding: "1rem", marginBottom: "2rem" }}>
//           <legend><strong>College Preferences</strong></legend>
//           {preferences.map((pref, index) => (
//             <div key={index} style={{ display: "flex", gap: "1rem", marginBottom: "1rem" }}>
//               <select
//                 value={pref.college}
//                 onChange={(e) => handlePreferenceChange(index, "college", e.target.value)}
//                 style={{ flex: 1, padding: "8px", borderRadius: "4px", border: "1px solid #ccc" }}
//               >
//                 <option value="">Select College</option>
//                 {colleges.map((college) => (
//                   <option key={college} value={college}>{college}</option>
//                 ))}
//               </select>
//               <select
//                 value={pref.branch}
//                 onChange={(e) => handlePreferenceChange(index, "branch", e.target.value)}
//                 style={{ flex: 1, padding: "8px", borderRadius: "4px", border: "1px solid #ccc" }}
//               >
//                 <option value="">Select Branch</option>
//                 {branches.map((branch) => (
//                   <option key={branch} value={branch}>{branch}</option>
//                 ))}
//               </select>
//               <button type="button" onClick={() => removePreference(index)} style={{ background: "red", color: "white", borderRadius: "4px" }}>
//                 ❌
//               </button>
//             </div>
//           ))}
//           <button type="button" onClick={addPreference} style={{ padding: "8px", backgroundColor: "#007bff", color: "white", border: "none", borderRadius: "4px" }}>
//             ➕ Add Preference
//           </button>
//         </fieldset>

//         <button
//           type="button"
//           onClick={submitForm}
//           style={{
//             backgroundColor: "#4CAF50",
//             color: "white",
//             padding: "12px 20px",
//             border: "none",
//             borderRadius: "4px",
//             cursor: "pointer",
//             width: "100%",
//           }}
//         >
//           Submit
//         </button>

//         {result && (
//           <div style={{ marginTop: "1rem", color: "green", textAlign: "center" }}>
//             ✅ Seat Allotted: {result}
//           </div>
//         )}
//       </form>
//     </div>
//   );
// };

// export default StudentDashboard;

import React, { useEffect, useState } from "react";

const StudentDashboard = () => {
  const [formData, setFormData] = useState({
    gateRegId: "",
    gateYear: "",
    gatePaper: "",
    gateScore: "",
    gateMarks: "",
    name: "",
    fatherName: "",
    motherName: "",
    dob: "",
    gender: "",
    category: "",
    nationality: "",
    mobile: "",
    email: "",
    address: "",
    pincode: "",
    aadhaar: "",
    pwd: "",
    degree: "",
    degreeName: "",
    stream: "",
    yearPassing: "",
    percentage: "",
    degreeStatus: "",
    resultStatus: "",
    preparationMode: "",
    accountName: "",
    bankName: "",
    accountNumber: "",
    branchName: "",
    ifsc: "",
  });

  const [documents, setDocuments] = useState({
    gateScorecard: null,
    markSheets: null,
    categoryCert: null,
  });

  const [colleges, setColleges] = useState([]);
  const [branches, setBranches] = useState([]);
  const [preferences, setPreferences] = useState([{ college: "", branch: "" }]);
  const [result, setResult] = useState(null);

  useEffect(() => {
    const fetchOptions = async () => {
      try {
        const collegeRes = await fetch("http://localhost:3001/api/options/colleges");
        const branchRes = await fetch("http://localhost:3001/api/options/branches");

        const collegesData = await collegeRes.json();
        const branchesData = await branchRes.json();

        setColleges(collegesData);
        setBranches(branchesData);
      } catch (err) {
        console.error("Error fetching options:", err);
      }
    };

    fetchOptions();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setDocuments((prev) => ({ ...prev, [name]: files[0] }));
  };

  const handlePreferenceChange = (index, field, value) => {
    const updated = [...preferences];
    updated[index][field] = value;
    setPreferences(updated);
  };

  const addPreference = () => {
    setPreferences([...preferences, { college: "", branch: "" }]);
  };

  const removePreference = (index) => {
    const updated = preferences.filter((_, i) => i !== index);
    setPreferences(updated);
  };

  const submitForm = async () => {
    const payload = new FormData();
    payload.append("formData", JSON.stringify({ ...formData, preferences }));
  
    // Add files to form data
    Object.entries(documents).forEach(([key, file]) => {
      if (file) {
        payload.append(key, file);
      }
    });
  
    try {
      const res = await fetch("http://localhost:3001/api/student/submit", {
        method: "POST",
        body: payload,
      });
  
      const data = await res.json();
      if (data.did) {
        alert(`✅ Form submitted. DID: ${data.did}`);
        setResult(`DID: ${data.did}`);
      } else {
        alert("❌ Submission failed.");
      }
    } catch (err) {
      console.error("Submission error:", err);
      alert("❌ Error submitting form.");
    }
  };
  
  const renderInput = (name, label, type = "text", required = false) => (
    <div style={{ marginBottom: "1rem" }}>
      <label><strong>{label}</strong></label><br />
      <input
        type={type}
        name={name}
        value={formData[name]}
        onChange={handleChange}
        placeholder={label}
        required={required}
        style={{
          width: "100%",
          padding: "8px",
          borderRadius: "4px",
          border: "1px solid #ccc",
          marginTop: "4px",
        }}
      />
    </div>
  );

  const renderFileInput = (name, label) => (
    <div style={{ marginBottom: "1rem" }}>
      <label><strong>{label}</strong> ({name}.pdf/.jpg/.png)</label><br />
      <input
        type="file"
        name={name}
        accept=".pdf,.jpg,.png"
        onChange={handleFileChange}
        style={{
          padding: "8px",
          marginTop: "4px",
        }}
      />
    </div>
  );

  return (
    <div style={{ padding: "2rem", maxWidth: "900px", margin: "auto", fontFamily: "Arial" }}>
      <h2 style={{ textAlign: "center", marginBottom: "2rem" }}>🎓 Student Dashboard</h2>

      <form>
        <fieldset style={{ border: "1px solid #ccc", padding: "1rem", marginBottom: "2rem" }}>
          <legend><strong>GATE Details</strong></legend>
          {renderInput("gateRegId", "GATE Registration ID")}
          {renderInput("gateYear", "GATE Exam Year")}
          {renderInput("gatePaper", "GATE Exam Paper")}
          {renderInput("gateScore", "GATE Score")}
          {renderInput("gateMarks", "Marks Obtained in GATE")}
        </fieldset>

        <fieldset style={{ border: "1px solid #ccc", padding: "1rem", marginBottom: "2rem" }}>
          <legend><strong>Personal Details</strong></legend>
          {renderInput("name", "Candidate's Name")}
          {renderInput("fatherName", "Father's Name")}
          {renderInput("motherName", "Mother's Name")}
          {renderInput("dob", "Date of Birth", "date")}
          {renderInput("gender", "Gender")}
          {renderInput("category", "Category")}
          {renderInput("nationality", "Nationality")}
          {renderInput("mobile", "Mobile Number")}
          {renderInput("email", "Email ID", "email")}
          {renderInput("address", "Complete Address")}
          {renderInput("pincode", "Pin Code")}
          {renderInput("aadhaar", "Aadhaar Number (Optional)")}
          {renderInput("pwd", "PwD Status (Yes/No)")}
        </fieldset>

        <fieldset style={{ border: "1px solid #ccc", padding: "1rem", marginBottom: "2rem" }}>
          <legend><strong>Educational Details</strong></legend>
          {renderInput("degree", "Qualifying Degree")}
          {renderInput("degreeName", "Name of the Degree")}
          {renderInput("stream", "Qualifying Stream")}
          {renderInput("yearPassing", "Year of Passing")}
          {renderInput("percentage", "CGPA / Percentage")}
          {renderInput("degreeStatus", "Degree Status")}
          {renderInput("resultStatus", "Result Status")}
          {renderInput("preparationMode", "Preparation Mode")}
        </fieldset>

        <fieldset style={{ border: "1px solid #ccc", padding: "1rem", marginBottom: "2rem" }}>
          <legend><strong>Bank Details</strong></legend>
          {renderInput("accountName", "Account Holder's Name")}
          {renderInput("bankName", "Bank Name")}
          {renderInput("accountNumber", "Account Number")}
          {renderInput("branchName", "Bank Branch Name")}
          {renderInput("ifsc", "IFSC Code")}
        </fieldset>

        <fieldset style={{ border: "1px solid #ccc", padding: "1rem", marginBottom: "2rem" }}>
          <legend><strong>Documents Upload</strong></legend>
          {renderFileInput("gateScorecard", "GATE Scorecard")}
          {renderFileInput("markSheets", "Mark Sheets")}
          {renderFileInput("categoryCert", "Category Certificate (if applicable)")}
        </fieldset>

        <fieldset style={{ border: "1px solid #ccc", padding: "1rem", marginBottom: "2rem" }}>
          <legend><strong>College Preferences</strong></legend>
          {preferences.map((pref, index) => (
            <div key={index} style={{ display: "flex", gap: "1rem", marginBottom: "1rem" }}>
              <select
                value={pref.college}
                onChange={(e) => handlePreferenceChange(index, "college", e.target.value)}
                style={{ flex: 1, padding: "8px", borderRadius: "4px", border: "1px solid #ccc" }}
              >
                <option value="">Select College</option>
                {colleges.map((college) => (
                  <option key={college} value={college}>{college}</option>
                ))}
              </select>
              <select
                value={pref.branch}
                onChange={(e) => handlePreferenceChange(index, "branch", e.target.value)}
                style={{ flex: 1, padding: "8px", borderRadius: "4px", border: "1px solid #ccc" }}
              >
                <option value="">Select Branch</option>
                {branches.map((branch) => (
                  <option key={branch} value={branch}>{branch}</option>
                ))}
              </select>
              <button type="button" onClick={() => removePreference(index)} style={{ background: "red", color: "white", borderRadius: "4px" }}>
                ❌
              </button>
            </div>
          ))}
          <button type="button" onClick={addPreference} style={{ padding: "8px", backgroundColor: "#007bff", color: "white", border: "none", borderRadius: "4px" }}>
            ➕ Add Preference
          </button>
        </fieldset>

        <button
          type="button"
          onClick={submitForm}
          style={{
            backgroundColor: "#4CAF50",
            color: "white",
            padding: "12px 20px",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            width: "100%",
          }}
        >
          Submit
        </button>

        {result && (
          <div style={{ marginTop: "1rem", color: "green", textAlign: "center" }}>
            ✅ Seat Allotted: {result}
          </div>
        )}
      </form>
    </div>
  );
};

export default StudentDashboard;
