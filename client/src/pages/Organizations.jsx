import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

import {
  Button,
  Card,
  CardContent,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography
} from "@mui/material";

import "./Organizations.css";

const DISTRICTS = ["Kolhapur", "Sangli", "Pune", "Satara", "Nashik"];

const HELP_TYPES = [
  "Shelter / Ashram",
  "Old Age Home",
  "Mental Health / Rehabilitation",
  "Homeless Support",
  "Disability Support",
  "Women & Children Shelter"
];

function formatDate(value) {
  if (!value) return "Not verified yet";

  return new Date(value).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric"
  });
}

function Organizations() {
  const [searchParams, setSearchParams] = useSearchParams();

  const selectedDistrict = searchParams.get("district") || "";
  const selectedHelpType = searchParams.get("type") || "";

  const [organizations, setOrganizations] = useState([]);
  const [loading, setLoading] = useState(true);

  const updateFilter = (key, value) => {
    const nextParams = new URLSearchParams(searchParams);

    if (value) {
      nextParams.set(key, value);
    } else {
      nextParams.delete(key);
    }

    setSearchParams(nextParams);
  };

  useEffect(() => {
    const fetchOrganizations = async () => {
      setLoading(true);

      try {
        let url = "http://localhost:5000/api/organizations";

        const params = new URLSearchParams();

        if (selectedDistrict) {
          params.append("district", selectedDistrict);
        }

        if (selectedHelpType) {
          params.append("helpType", selectedHelpType);
        }

        if (params.toString()) {
          url = url + "?" + params.toString();
        }

        const response = await fetch(url);

        if (!response.ok) {
          throw new Error("Failed to fetch organizations");
        }

        const data = await response.json();

        setOrganizations(data);
      } catch (error) {
        console.error("Error fetching organizations:", error);
        setOrganizations([]);
      } finally {
        setLoading(false);
      }
    };

    fetchOrganizations();
  }, [selectedDistrict, selectedHelpType]);

  return (
    <main className="organizations-page">

      <section className="organizations-header">

        <p>COMMUNITY SUPPORT</p>

        <h1>Find an Organization</h1>

        <span>
          Explore organizations providing support
          in your community.
        </span>

        {(selectedDistrict || selectedHelpType) && (
          <div className="selected-search">

            <strong>
              Showing results for:
            </strong>

            {selectedDistrict && (
              <span>
                📍 {selectedDistrict}
              </span>
            )}

            {selectedHelpType && (
              <span>
                🤝 {selectedHelpType}
              </span>
            )}

          </div>
        )}

      </section>

      <section className="organizations-content">

        <div className="filter-bar">

          <FormControl sx={{ minWidth: 200 }}>
            <InputLabel>District</InputLabel>

            <Select
              value={selectedDistrict}
              label="District"
              onChange={(e) => updateFilter("district", e.target.value)}
            >
              <MenuItem value="">
                All Districts
              </MenuItem>

              {DISTRICTS.map((district) => (
                <MenuItem key={district} value={district}>
                  {district}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl sx={{ minWidth: 260 }}>
            <InputLabel>Help Type</InputLabel>

            <Select
              value={selectedHelpType}
              label="Help Type"
              onChange={(e) => updateFilter("type", e.target.value)}
            >
              <MenuItem value="">
                All Help Types
              </MenuItem>

              {HELP_TYPES.map((type) => (
                <MenuItem key={type} value={type}>
                  {type}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

        </div>

        {loading && (
          <Typography>
            Loading organizations...
          </Typography>
        )}

        {!loading && organizations.length === 0 && (
          <Typography>
            No organizations found.
          </Typography>
        )}

        {!loading && organizations.length > 0 && (
          <div className="organization-grid">

            {organizations.map((organization) => (

              <Card
                className="organization-card"
                key={organization._id}
              >

                <CardContent>

                  <div className="organization-icon">
                    🤝
                  </div>

                  <Typography
                    component="span"
                    className="organization-type"
                  >
                    {organization.helpType}
                  </Typography>

                  <Typography
                    variant="h2"
                    component="h2"
                  >
                    {organization.name}
                  </Typography>

                  <Typography
                    component="p"
                    className="district"
                  >
                    📍 {organization.district}
                  </Typography>

                  <Typography
                    component="p"
                    className="description"
                  >
                    {organization.description}
                  </Typography>

                  <Typography component="p">
                    📌 {organization.address}
                  </Typography>

                  <Typography component="p">
                    📞 {organization.contact}
                  </Typography>

                  {organization.website && (
                    <Typography component="p">
                      🌐{" "}
                      <a
                        className="org-link"
                        href={organization.website}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Visit Website
                      </a>
                    </Typography>
                  )}

                  <Typography
                    component="p"
                    className="meta-info"
                  >
                    📄 Source: {organization.source}
                  </Typography>

                  <Typography
                    component="p"
                    className="meta-info"
                  >
                    ✅ Last verified: {formatDate(organization.lastVerified)}
                  </Typography>

                  <Button
                    component={Link}
                    to={`/organizations/${organization._id}`}
                    variant="text"
                    className="view-button"
                  >
                    View Details →
                  </Button>

                </CardContent>

              </Card>

            ))}

          </div>
        )}

      </section>

    </main>
  );
}

export default Organizations;
