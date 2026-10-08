const express = require("express");
const Organization = require("../models/Organization");

const router = express.Router();

// Get organizations
router.get("/", async (req, res) => {
  try {
    const { district, helpType } = req.query;

    let filter = {};

    if (district) {
      filter.district = district;
    }

    if (helpType) {
      filter.helpType = helpType;
    }

    const organizations = await Organization.find(filter);

    res.json(organizations);

  } catch (error) {

    console.error("Error fetching organizations:", error);

    res.status(500).json({
      message: "Failed to fetch organizations"
    });
  }
});

// Get one organization by id
router.get("/:id", async (req, res) => {
  try {
    const organization = await Organization.findById(req.params.id);

    if (!organization) {
      return res.status(404).json({
        message: "Organization not found"
      });
    }

    res.json(organization);

  } catch (error) {

    console.error("Error fetching organization:", error);

    res.status(500).json({
      message: "Failed to fetch organization"
    });
  }
});

// Add an organization
router.post("/", async (req, res) => {
  try {
    const organization = new Organization(req.body);

    const savedOrganization = await organization.save();

    res.status(201).json(savedOrganization);

  } catch (error) {

    console.error("Error adding organization:", error);

    res.status(400).json({
      message: "Failed to add organization"
    });
  }
});

module.exports = router;