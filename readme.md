# 🎓 DeSAT: Decentralized Seat Allotment System

This project is a full-stack decentralized seat allotment system using:

- 🔗 Hyperledger Fabric (for blockchain)
- 🧠 ACA-Py (for verifiable credentials & DID)
- ⚙️ Node.js + Express (backend API)
- 🗃️ MongoDB (data persistence)
- 🧑‍🎓 React (student & college dashboards)

---

## 📦 Features

### Student Side

- Submit personal info, GATE score, and upload documents.
- Auto-generate a DID and Verifiable Credential (VC) via ACA-Py.
- VC is saved to blockchain using Fabric.
- Preferences for college selection can be submitted.
- Check seat allotment results via dashboard.

### College Side

- College registration and login using DIDs.
- Submit seat matrix via dashboard.
- Verify student VCs and documents.
- Issue GATE-based credentials if needed.

### Admin

- Trigger centralized seat allotment algorithm via smart contract.

---

## 📁 Folder Structure

desat-fabric-app/
├── backend/
│ ├── chaincode/
│ │ └── desat-contract/
│ │ ├── index.js
│ │ └── utils.js
│ ├── config/
│ │ └── db.js
│ ├── controllers/
│ │ ├── college.controller.js
│ │ ├── collegeController.js
│ │ └── student.controller.js
│ ├── crypto-config/ # (if present, for Fabric crypto materials)
│ ├── fabric-gateway/
│ │ └── wallet/ # Wallet to store identities
│ │ └── desat.contract.js
│ ├── fabric-network/
│ │ ├── connection.json
│ │ ├── connection-org1.json
│ │ ├── desatcc.tar.gz
│ │ └── fabric-samples/
│ ├── gateway/
│ │ ├── connect.js
│ │ └── fabricService.js
│ ├── middleware/
│ │ └── auth.js
│ ├── models/
│ │ ├── College.js
│ │ └── student.js
│ ├── routes/
│ │ ├── admin.js
│ │ ├── auth.js
│ │ ├── college.js
│ │ ├── college.routes.js
│ │ ├── FabricRoutes.js
│ │ └── student.routes.js
│ ├── scripts/ # (if present, for seeding, etc.)
│ ├── uploads/ # File uploads (VCs etc.)
│ ├── utils/
│ │ ├── didHelper.mjs
│ │ └── didUtil.js
│ ├── wallet/ # (if separate wallet folder)
│ ├── .env
│ ├── aca-py-client.js
│ ├── connection-profile.json
│ ├── desatcc.tar.gz
│ ├── Dockerfile
│ ├── package.json
│ ├── package-lock.json
│ ├── server.js
│ └── testDbConnection.js
│
├── frontend/
│ ├── public/
│ │ ├── favicon.ico
│ │ ├── index.html
│ │ ├── logo192.png
│ │ ├── logo512.png
│ │ ├── manifest.json
│ │ └── robots.txt
│ ├── src/
│ │ ├── api/
│ │ │ └── api.js
│ │ ├── components/
│ │ │ ├── AllotmentResult.jsx
│ │ │ ├── AssetViewer.jsx
│ │ │ ├── CollegeDashboard.jsx
│ │ │ ├── CollegeLogin.jsx
│ │ │ ├── CollegeRegister.jsx
│ │ │ ├── SeatMatrixForm.jsx
│ │ │ ├── Student.jsx
│ │ │ └── VCUpload.jsx
│ │ ├── routes/
│ │ │ ├── AdminDashboard.jsx
│ │ │ ├── CollegeDashboard.jsx
│ │ │ ├── seatMatrix.json
│ │ │ └── StudentDashboard.jsx
│ │ ├── App.css
│ │ ├── App.js
│ │ ├── App.test.js
│ │ ├── index.css
│ │ ├── index.js
│ │ ├── logo.svg
│ │ ├── reportWebVitals.js
│ │ └── setupTests.js
│ ├── .gitignore
│ ├── package.json
│ ├── package-lock.json
│ └── README.md
│
├── README.md (root level)

🧩 Prerequisites
Before running the system, ensure the following tools are installed globally:
Tool Version Why it’s needed
Node.js v16.x or later Backend and frontend JavaScript runtime
MongoDB 6.x or later NoSQL database for student/college data
Go v1.20+ Required for Hyperledger Fabric chaincode
Hyperledger Fabric Binaries v2.5+ For running local Fabric network
Python 3.8+ Required by ACA-Py agent

1. 📦 Clone the Repository
   git clone https://github.com/Shehrozalam10/desat-fabric-app.git
   cd desat-fabric-app
2. ⚙️ Backend Setup (/backend)
   cd backend
   npm install
   Make sure your MongoDB server is running on mongodb://localhost:27017/desat or change the URL in .env.

   PORT=5000
   MONGO_URI=mongodb://localhost:27017/desat
   JWT_SECRET=yourSecretKey
   ACA_PY_URL=http://localhost:8031
   FABRIC_WALLET_PATH=./fabric-gateway/wallet

npm start

3. 🧱 Fabric Chaincode Setup (Optional)
   If you're running Fabric locally without Docker Compose:

   # Navigate to fabric-network/fabric-samples

   cd backend/fabric-network/fabric-samples/test-network

   # Start network

   ./network.sh up createChannel -c mychannel -ca

   # Package and install chaincode

   cd ../../../chaincode/desat-contract
   peer lifecycle chaincode package desatcc.tar.gz --path . --lang node --label desat_1
   🔁 You must install, approve and commit this chaincode using CLI or script manually.

4. 🤖 Aries ACA-Py Agent
   Start Aries agent with Docker:

   docker run --rm -it \
   -p 8030:8030 -p 8031:8031 \
   --name acapy \
   bcgovimages/aries-cloudagent:py36-1.16-1_0.7.2 \
   start --admin 0.0.0.0 8031 \
   --inbound-transport http 0.0.0.0 8030 \
   --outbound-transport http \
   --genesis-url https://raw.githubusercontent.com/hyperledger/aries-cloudagent-python/main/demo/docker/genesis.txn \
   --wallet-type indy \
   --wallet-name desat_wallet \
   --wallet-key desat123 \
   --auto-provision \
   --seed 000000000000000000000000Desat001 \
   --label desat-acapy \
   --auto-accept-invites \
   --auto-accept-requests

5. 🌐 Frontend Setup (/frontend)
   cd frontend
   npm install
   Run Frontend
   bash
   Copy
   Edit
   npm start
   Frontend will be available at http://localhost:3000
