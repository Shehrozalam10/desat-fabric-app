import generateDID from '../utils/didUtil.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import College from '../models/College.js';

dotenv.config();

// Register a new college
export async function registerCollege(req, res) {
  try {
    const { name, email, address, password } = req.body;
    if (!name || !email || !address || !password) {
      return res.status(400).json({ success: false, message: "All fields are required" });
    }

    const existing = await College.findOne({ email });
    if (existing) {
      return res.status(409).json({ success: false, message: "Email already registered" });
    }

    const did = await generateDID();
    const passwordHash = await bcrypt.hash(password, 10);

    const newCollege = new College({ name, email, address, passwordHash, did });
    await newCollege.save();

    console.log("New College Registered:", did);
    return res.status(201).json({ success: true, message: "College registered successfully", did });
  } catch (error) {
    console.error("Error in registerCollege:", error);
    return res.status(500).json({ success: false, message: "Server error" });
  }
}

// College login
export async function loginCollege(req, res) {
  try {
    const { did, password } = req.body;
    if (!did || !password) {
      return res.status(400).json({ success: false, message: "DID and password are required" });
    }

    const college = await College.findOne({ did });
    if (!college || !(await bcrypt.compare(password, college.passwordHash))) {
      return res.status(401).json({ success: false, message: "Invalid DID or password" });
    }

    const token = jwt.sign(
      { id: college._id, did: college.did },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    return res.json({
      success: true,
      message: "Login successful",
      token,
      college: {
        name: college.name,
        email: college.email,
        address: college.address,
        did: college.did
      }
    });
  } catch (error) {
    console.error("Error in loginCollege:", error);
    return res.status(500).json({ success: false, message: "Server error" });
  }
}

// Submit seat matrix
export async function submitMatrix(req, res) {
  try {
    const { seatMatrix,did } = req.body;
    // const did = req.college?.did;
    // console.log("kk",did,seatMatrix,"hello");


    if (!seatMatrix || !did) {
      return res.status(400).json({ success: false, message: "Seat matrix and DID are required" });
    }
    // console.log("hell0",did,seatMatrix,"hello");

    const college = await College.findOne({ did });
    if (!college) {
      return res.status(404).json({ success: false, message: "College not found" });
    }

    college.seatMatrix = seatMatrix;
    await college.save();

    return res.json({ success: true, message: "Seat matrix submitted successfully" });
  } catch (error) {
    console.error("Error in submitMatrix:", error);
    return res.status(500).json({ success: false, message: "Server error" });
  }
}

// Get seat matrix
export async function getMatrix(req, res) {
  try {
    const did = req.college?.did;

    const college = await College.findOne({ did });
    if (!college) {
      return res.status(404).json({ success: false, message: "College not found" });
    }

    return res.json({
      success: true,
      seatMatrix: college.seatMatrix || {},
    });
  } catch (error) {
    console.error("Error in getMatrix:", error);
    return res.status(500).json({ success: false, message: "Server error" });
  }
}
