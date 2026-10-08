import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Button, Typography } from "@mui/material";

import "./OrganizationDetails.css";

function formatDate(value) {
  if (!value) return "Not verified yet";

  return new Date(value).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric"
  });
}

function OrganizationDetails() {
  const { id } = useParams();

  const [organization, setOrganization] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchOrganization = async () => {
      setLoading(true);
      setError("");

      try {
        const response = await fetch(
          `http://localhost:5000/api/organizations/${id}`
        );

        if (!response.ok) {
          throw new Error("Organization not found");
        }

        const data = await response.json();
        setOrganization(data);
      } catch (err) {
        console.error("Error fetching organization:", err);
        setError("Could not load this organization.");
        setOrganization(null);
      } finally {
        setLoading(false);
      }
    };

    fetchOrganization();
  }, [id]);

  return (
    <main className="details-page">

      <section className="details-header">
        <p>ORGANIZATION DETAILS</p>
        <h1>Full organization information</h1>
        <span>
          Contact details, location and official links for this support centre.
        </span>
      </section>

      <section className="details-content">

        <Button
          component={Link}
          to="/organizations"
          variant="text"
          className="back-link"
        >
          ← Back to Organizations
        </Button>

        {loading && (
          <Typography>Loading organization...</Typography>
        )}

        {!loading && error && (
          <Typography color="error">{error}</Typography>
        )}

        {!loading && organization && (
          <article className="details-card">

            <span className="details-type">
              {organization.helpType}
            </span>

            <h2>{organization.name}</h2>

            <p className="details-district">
              📍 {organization.district}
            </p>

            <p className="details-description">
              {organization.description}
            </p>

            <div className="details-grid">

              <div className="details-item">
                <h3>Address</h3>
                <p>{organization.address}</p>
              </div>

              <div className="details-item">
                <h3>Contact</h3>
                <p>{organization.contact}</p>
              </div>

              <div className="details-item">
                <h3>Website</h3>
                {organization.website ? (
                  <a
                    href={organization.website}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {organization.website}
                  </a>
                ) : (
                  <p>Not available</p>
                )}
              </div>

              <div className="details-item">
                <h3>Source</h3>
                <p>{organization.source}</p>
              </div>

              <div className="details-item">
                <h3>Last Verified</h3>
                <p>{formatDate(organization.lastVerified)}</p>
              </div>

            </div>

            {organization.website && (
              <Button
                variant="contained"
                href={organization.website}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  mt: 3,
                  backgroundColor: "#4CAF50",
                  "&:hover": {
                    backgroundColor: "#43A047"
                  }
                }}
              >
                Open Official Website →
              </Button>
            )}

          </article>
        )}

      </section>

    </main>
  );
}

export default OrganizationDetails;
