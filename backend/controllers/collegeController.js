const { generateDID } = require('../utils/didUtil'); // You write or mock this
const { generateDID } = require('../utils/didUtil');

const colleges = {}; // or use DB

exports.registerCollege = async (req, res) => {
  const { name, address, email, contact, university } = req.body;
  const did = await generateDID();
  colleges[did] = { name, address, email, contact, university, did };
  // Add to Fabric if needed
  res.json({ did });
};

exports.loginCollege = (req, res) => {
  const { did } = req.body;
  if (colleges[did]) res.json({ success: true });
  else res.json({ success: false });
};

exports.getCollegeProfile = (req, res) => {
  const { did } = req.params;
  res.json(colleges[did] || {});
};
