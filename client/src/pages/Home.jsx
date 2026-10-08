import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem
} from "@mui/material";

import "./Home.css";

function Home() {
  const navigate = useNavigate();

  const [district, setDistrict] = useState("");
  const [helpType, setHelpType] = useState("");

  const handleSearch = () => {
    if (!district || !helpType) {
      alert("Please select district and help type.");
      return;
    }

    const url =
      "/organizations?district=" +
      encodeURIComponent(district) +
      "&type=" +
      encodeURIComponent(helpType);

    navigate(url);
  };

  return (
    <main>

      {/* HERO SECTION */}
      <section className="hero">

        <div className="hero-image">
          <img
            src="/images/pexels-swastikarora-10619292.jpg"
            alt="Community members receiving support"
          />
        </div>

        <div className="hero-content">

          <p className="hero-label">
            COMMUNITY SUPPORT INFORMATION PORTAL
          </p>

          <h1>
            Find help.
            <br />
            Give help.
            <br />
            Support your community.
          </h1>

          <p className="hero-description">
            Find shelters, NGOs, medical support and
            community organizations in your district.
          </p>

          {/* SEARCH BOX */}
          <div className="search-box">

            {/* DISTRICT */}
            <div className="search-field">

              <FormControl fullWidth>
                <InputLabel>District</InputLabel>

                <Select
                  value={district}
                  label="District"
                  onChange={(e) => setDistrict(e.target.value)}
                >
                  <MenuItem value="">
                    Select District
                  </MenuItem>

                  <MenuItem value="Kolhapur">
                    Kolhapur
                  </MenuItem>

                  <MenuItem value="Sangli">
                    Sangli
                  </MenuItem>

                  <MenuItem value="Pune">
                    Pune
                  </MenuItem>

                  <MenuItem value="Satara">
                    Satara
                  </MenuItem>

                  <MenuItem value="Nashik">
                    Nashik
                  </MenuItem>
                </Select>
              </FormControl>

            </div>

            {/* HELP TYPE */}
            <div className="search-field">

              <FormControl fullWidth>
                <InputLabel>Help Type</InputLabel>

                <Select
                  value={helpType}
                  label="Help Type"
                  onChange={(e) => setHelpType(e.target.value)}
                >
                  <MenuItem value="">
                    Select Help Type
                  </MenuItem>

                  <MenuItem value="Shelter / Ashram">
                    Shelter / Ashram
                  </MenuItem>

                  <MenuItem value="Old Age Home">
                    Old Age Home
                  </MenuItem>

                  <MenuItem value="Mental Health / Rehabilitation">
                    Mental Health / Rehabilitation
                  </MenuItem>

                  <MenuItem value="Homeless Support">
                    Homeless Support
                  </MenuItem>

                  <MenuItem value="Disability Support">
                    Disability Support
                  </MenuItem>

                  <MenuItem value="Women & Children Shelter">
                    Women & Children Shelter
                  </MenuItem>
                </Select>
              </FormControl>

            </div>

            {/* FIND SUPPORT BUTTON */}
            <Button
              variant="contained"
              onClick={handleSearch}
              sx={{
                backgroundColor: "#4CAF50",
                "&:hover": {
                  backgroundColor: "#43A047"
                }
              }}
            >
              Find Support
            </Button>

          </div>

        </div>

      </section>

      {/* HELP CATEGORIES */}
      <section className="services">

        <div className="section-title">

          <p>FIND THE RIGHT SUPPORT</p>

          <h2>
            Find an organization for your needs
          </h2>

          <span>
            Explore shelters, care homes and support centres
            available in your district.
          </span>

        </div>

        <div className="service-grid">

          {/* SERVICE CARD 1 */}
          <div className="service-card">

            <div className="service-icon">
              🏠
            </div>

            <h3>
              Shelter & Ashram
            </h3>

            <p>
              Find shelters and ashrams providing
              accommodation, care and basic support.
            </p>

            <Button
              variant="text"
              className="service-button"
              onClick={() =>
                navigate(
                  "/organizations?type=" +
                    encodeURIComponent("Shelter / Ashram")
                )
              }
            >
              Explore →
            </Button>

          </div>

          {/* SERVICE CARD 2 */}
          <div className="service-card">

            <div className="service-icon">
              👴
            </div>

            <h3>
              Old Age Home
            </h3>

            <p>
              Find organizations providing care,
              accommodation and support for elderly people.
            </p>

            <Button
              variant="text"
              className="service-button"
              onClick={() =>
                navigate(
                  "/organizations?type=" +
                    encodeURIComponent("Old Age Home")
                )
              }
            >
              Explore →
            </Button>

          </div>

          {/* SERVICE CARD 3 */}
          <div className="service-card">

            <div className="service-icon">
              🧠
            </div>

            <h3>
              Mental Health & Rehabilitation
            </h3>

            <p>
              Find rehabilitation centres and organizations
              providing care and support.
            </p>

            <Button
              variant="text"
              className="service-button"
              onClick={() =>
                navigate(
                  "/organizations?type=" +
                    encodeURIComponent("Mental Health / Rehabilitation")
                )
              }
            >
              Explore →
            </Button>

          </div>

          {/* SERVICE CARD 4 */}
          <div className="service-card">

            <div className="service-icon">
              🤝
            </div>

            <h3>
              Homeless Support
            </h3>

            <p>
              Find organizations helping people experiencing
              homelessness with shelter and care.
            </p>

            <Button
              variant="text"
              className="service-button"
              onClick={() =>
                navigate(
                  "/organizations?type=" +
                    encodeURIComponent("Homeless Support")
                )
              }
            >
              Explore →
            </Button>

          </div>

          {/* SERVICE CARD 5 */}
          <div className="service-card">

            <div className="service-icon">
              ♿
            </div>

            <h3>
              Disability Support
            </h3>

            <p>
              Find centres and organizations providing
              support and care for people with disabilities.
            </p>

            <Button
              variant="text"
              className="service-button"
              onClick={() =>
                navigate(
                  "/organizations?type=" +
                    encodeURIComponent("Disability Support")
                )
              }
            >
              Explore →
            </Button>

          </div>

          {/* SERVICE CARD 6 */}
          <div className="service-card">

            <div className="service-icon">
              👩‍👧
            </div>

            <h3>
              Women & Children Shelter
            </h3>

            <p>
              Find shelters and organizations providing
              safety, accommodation and care.
            </p>

            <Button
              variant="text"
              className="service-button"
              onClick={() =>
                navigate(
                  "/organizations?type=" +
                    encodeURIComponent("Women & Children Shelter")
                )
              }
            >
              Explore →
            </Button>

          </div>

        </div>

      </section>

      {/* COMMUNITY SUPPORT SECTION */}
      <section className="support-section">

        <div className="support-image">

          <img
            src="/images/pexels-swastikarora-12911837.jpg"
            alt="Community support activity"
          />

        </div>

        <div className="support-content">

          <p className="hero-label">
            COMMUNITY MATTERS
          </p>

          <h2>
            Small acts of help can make a big difference.
          </h2>

          <p>
            Our platform helps people discover organizations,
            shelters and community services that provide
            support to people who need it.
          </p>

          <p>
            You can find useful information about available
            services according to your district and help type.
          </p>

          <Button
            variant="contained"
            className="learn-button"
            onClick={() => navigate("/organizations")}
            sx={{
              backgroundColor: "#4CAF50",
              "&:hover": {
                backgroundColor: "#43A047"
              }
            }}
          >
            Explore Organizations →
          </Button>

        </div>

      </section>

      {/* HOW IT WORKS */}
      <section className="how-section">

        <div className="how-content">

          <p className="hero-label">
            HOW IT WORKS
          </p>

          <h2>
            Finding support is simple.
          </h2>

          <p className="how-description">
            Find suitable organizations in just a few simple
            steps.
          </p>

          <div className="steps">

            <div className="step">

              <span>
                01
              </span>

              <h3>
                Select District
              </h3>

              <p>
                Choose the district where support is required.
              </p>

            </div>

            <div className="step">

              <span>
                02
              </span>

              <h3>
                Select Help Type
              </h3>

              <p>
                Choose the type of support you are looking for.
              </p>

            </div>

            <div className="step">

              <span>
                03
              </span>

              <h3>
                Find Support
              </h3>

              <p>
                View organizations and their available services.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* FOOTER MESSAGE */}
      <section className="bottom-message">

        <h2>
          Everyone deserves access to support.
        </h2>

        <p>
          Find help. Connect with organizations.
          Support your community.
        </p>

      </section>

    </main>
  );
}

export default Home;