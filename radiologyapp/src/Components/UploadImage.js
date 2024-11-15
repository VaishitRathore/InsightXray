import React, { useState } from "react";
import axios from "axios";
import MedicalReport from "./MedicalReport";
import { useNavigate, Link } from "react-router-dom";
import { Card, Image, Form, Button } from "react-bootstrap";
import "../uploadimage.css";
export default function UploadImage() {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("image", file);
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/xray/",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setResult(response.data.description);
      navigate("/medical-report", {
        state: { results: response.data.description, xray: file },
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      {/* Left Side - Display Image with Gradient Overlay */}
      <div className="uploadimagecontainer"
        style={{
          flex: 1,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#fff",
          fontSize: "1.5rem",
          fontWeight: "bold",
          padding: "1rem",
        }}
      ></div>

      {/* Right Side - Upload Form with Colored Background */}
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "2rem",
          backgroundColor: "#e3f2fd",
          borderTopLeftRadius: "20px",
          borderBottomLeftRadius: "20px",
          boxShadow: "-10px 0px 20px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h1
          style={{
            color: "#040d14",
            fontSize: "2rem",
            fontWeight: "700",
            textAlign: "center",
            marginBottom: "1rem",
          }}
        >
          Upload X-ray Image
        </h1>

        <Form onSubmit={handleSubmit} style={{ width: "80%" }}>
          <Form.Group controlId="image" style={{ marginBottom: "1rem" }}>
            <Form.Label
              style={{ color: "#333", fontWeight: "500", fontSize: "1rem" }}
            >
              Select an X-ray image to upload:
            </Form.Label>
            <Form.Control
              type="file"
              name="image"
              onChange={handleFileChange}
              style={{
                borderColor: "#5151E5",
                padding: "0.6rem",
                borderRadius: "8px",
              }}
            />
          </Form.Group>
          <Button
            type="submit"
            style={{
              marginTop: "1rem",
              background: "linear-gradient(135deg, #72EDF2 10%, #5151E5 100%)",
              border: "none",
              width: "100%",
              padding: "0.75rem",
              fontWeight: "bold",
              fontSize: "1rem",
              color: "#fff",
              borderRadius: "8px",
              transition: "0.3s",
            }}
          >
            Submit
          </Button>
        </Form>

        {result && (
          <div style={{ marginTop: "1.5rem", width: "100%" }}>
            <Card
              style={{
                backgroundColor: "#EFF3F8",
                border: "none",
                boxShadow: "0px 6px 12px rgba(0, 0, 0, 0.15)",
                borderRadius: "12px",
                padding: "1rem",
              }}
            >
              <Card.Body>
                <MedicalReport results={result} xray={file} />
              </Card.Body>
            </Card>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "1rem",
              }}
            >
              <Button
                as={Link}
                to="/print-medical-report"
                target="_blank"
                style={{
                  background: "#5151E5",
                  border: "none",
                  padding: "0.5rem 1.5rem",
                  fontWeight: "bold",
                  fontSize: "1rem",
                  color: "#fff",
                  borderRadius: "8px",
                  transition: "0.3s",
                  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.15)",
                }}
              >
                View Printable Report
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
