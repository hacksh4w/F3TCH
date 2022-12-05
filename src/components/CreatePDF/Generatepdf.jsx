import React from "react";
import { useRef } from "react";
import ReportTemplate from "./Createpdf";
import jsPDF from "jspdf";
import { useState } from "react";

const Generatepdf = () => {
  const [age, setAge] = useState("");
  const [diag, setDiag] = useState("");
  const [med, setMed] = useState("");
  const [date, setDate] = useState("");

  const styles = {
    page: {
      marginLeft: "1rem",
      marginRight: "30rem",
      "page-break-after": "always",
      BackgroundColor: "white",
      color: "black",
    },

    columnLayout: {
      display: "flex",
      justifyContent: "space-between",
      margin: "2rem 0 3rem 0",
      gap: "1rem",
    },

    column: {
      display: "flex",
      flexDirection: "column",
    },

    spacer2: {
      height: "1rem",
    },

    fullWidth: {
      width: "100%",
    },

    marginb0: {
      marginBottom: 0,
    },
    introText: {
      fontSize: "1.5rem",
      fontWeight: "bold",
      color: "black",
      textAlign: "center",
      margin: "1rem 0 1rem 0",
    },
  };
  const [name1, setName1] = useState("");

  const [name, setName] = useState("");

  const reportTemplateRef = useRef(null);

  const handleGeneratePdf = () => {
    const doc = new jsPDF({
      format: [900, 700],
      unit: "px",
    });

    // Adding the fonts.
    doc.setFont("Inter-Regular", "normal");

    doc.html(reportTemplateRef.current, {
      async callback(doc) {
        await doc.save(name);
      },
    });
  };

  return (
    <div className="bg-slate-500">
      <input
        type="text"
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter Patient ID"
      />
      <button className="button" onClick={handleGeneratePdf}>
        Generate PDF
      </button>
      <div className="">
        <form className="form-submit">
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter Patient Name"
          />
          <input
            type="text"
            onChange={(e) => setAge(e.target.value)}
            placeholder="Enter Patient Age"
          />
          <input
            type="text"
            onChange={(e) => setDiag(e.target.value)}
            placeholder="Enter Patient Diagnosis"
          />
          <input
            type="text"
            onChange={(e) => setMed(e.target.value)}
            placeholder="Enter Patient Medication"
          />
          <input
            type="text"
            onChange={(e) => setDate(e.target.value)}
            placeholder="Enter Date"
          />
        </form>
        <div style={styles.page}>
          <div style={styles.spacer2}></div>
        </div>

        <div ref={reportTemplateRef} style={styles.page}>
          <div>
            <h2 style={styles.introText}>Medical Data</h2>
            <div>
              <h1 style={styles.introText}>{name}</h1>
              <p style={styles.introText}>age:{age}</p>
            </div>
          </div>

          <div style={styles.columnLayout}>
            <div style={styles.column}>
              <h4 style={styles.marginb0}>Subtitle One</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>

            <div style={styles.column}>
              <h4 style={styles.marginb0}>Subtitle Two</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>

          <div style={styles.columnLayout}>
            <div style={styles.column}>
              <h4 style={styles.marginb0}>Subtitle One</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>

            <div style={styles.column}>
              <h4 style={styles.marginb0}>Subtitle Two</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Generatepdf;
