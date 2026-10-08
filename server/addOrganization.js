const mongoose = require("mongoose");
require("dotenv").config();

const Organization = require("./models/Organization");

const organization = {
  name: "Takshashila Welfare Foundation",
  district: "Kolhapur",
  helpType: "Old Age Home",
  address:
    "524/2, First Floor, Gorambe, Gahininath Gaibi Pir Nagar, Gorambe, Kolhapur - 416216",
  contact: "Not currently verified",
  description:
    "Senior Citizens Home listed in the Government of India's Senior Citizens Homes directory.",
  website: "",
  source:
    "Government of India - Department of Social Justice and Empowerment",
  lastVerified: new Date()
};

mongoose
  .connect(process.env.MONGO_URI)
  .then(async () => {
    console.log("MongoDB connected");

    const savedOrganization = await Organization.create(organization);

    console.log("Organization added successfully:");
    console.log(savedOrganization);

    await mongoose.disconnect();
  })
  .catch((error) => {
    console.error("Error:", error);
  });