import React, { useState, useEffect } from "react";
import { Container, Row, Col, Table, Form } from "react-bootstrap";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { numberToWords } from "../components/Function/Numtoword";

const CompareEmi = () => {
  // State for bank names and interest rates
  const [bankInterestMap, setBankInterestMap] = useState({}); // Object to store bank names and interest rates

  // State for loan details and EMI results
  const [loanAmount, setLoanAmount] = useState(10000);
  const [loanTenure, setLoanTenure] = useState(4);
  const [emiResults, setEmiResults] = useState([]);
  const [totalInterest, setTotalInterest] = useState(0);

  // Fetch data from Google Sheet
  const fetchData = async () => {
    const scriptUrl =
      "https://script.google.com/macros/s/AKfycbxuNhaA8Mv1NnowJ7J1WXhEphA9Dk7fRPiqmvt9n9FcvNQMTkONOlzmEUvFtbT-7bjz/exec";
    try {
      const response = await axios.get(scriptUrl);
      const jsonData = response.data;

      // Ensure the data is in the expected format (array of objects)
      if (Array.isArray(jsonData) && jsonData.length > 0) {
        const firstRow = jsonData[0]; // Extract the first object in the array

        // Update state with bank names and interest rates
        setBankInterestMap(firstRow);

        // Initialize EMI results with bank names and interest rates
        const initialResults = Object.keys(firstRow).map((bankName) => ({
          bankName,
          interestRate: firstRow[bankName],
          emi: "N/A",
        }));
        setEmiResults(initialResults);
      } else {
        console.error("Unexpected data structure:", jsonData);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // Calculate EMI
  const calculateEMI = () => {
    if (loanAmount <= 0 || loanTenure <= 0) {
      alert("Please enter valid loan amount and tenure.");
      return;
    }

    let totalInterestPaid = 0;

    const results = Object.keys(bankInterestMap).map((bankName) => {
      const emi = calculateSingleEMI(bankInterestMap[bankName]);
      const totalPayment = emi * loanTenure;
      const interestPaid = totalPayment - loanAmount;
      totalInterestPaid += interestPaid;

      return {
        bankName,
        interestRate: bankInterestMap[bankName],
        emi: emi.toFixed(2),
        totalInterest: interestPaid.toFixed(2),
      };
    });

    setEmiResults(results); // Update state with new EMI results
    setTotalInterest(totalInterestPaid.toFixed(2)); // Update total interest
  };

  // Helper function to calculate EMI for a single bank
  const calculateSingleEMI = (rate) => {
    const monthlyRate = rate / 1200; // Convert annual rate to monthly
    const emi =
      rate > 0
        ? (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, loanTenure)) /
          (Math.pow(1 + monthlyRate, loanTenure) - 1)
        : 0;
    return emi; // Return EMI
  };

  // Fetch data on component mount
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Container fluid className="project-section" style={{ minHeight: "100vh", marginTop: "80px" }}>
      <Row className="justify-content-center">
        <Col md={8}>
          <h1 className="text-center mb-4">Bank EMI Calculator</h1>

          {/* Input Fields */}
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Loan Amount (₹)</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter loan amount"
                value={loanAmount}
                onChange={(e) => setLoanAmount(parseFloat(e.target.value))}
              />
              <div style={{ marginTop: "5px", color: "#343a40", fontSize: "14px" }}>
                              <strong>Amount in Words:</strong> {numberToWords(loanAmount)}
                            </div>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Loan Tenure (Months)</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter loan tenure in months"
                value={loanTenure}
                onChange={(e) => setLoanTenure(parseInt(e.target.value))}
              />
            </Form.Group>
            <button
              type="button"
              className="btn btn-primary"
              onClick={calculateEMI}
            >
              Calculate EMI
            </button>
          </Form>

          {/* EMI Results Table */}
          <Table striped bordered hover responsive className="mt-4">
            <thead>
              <tr>
                <th>Bank Name</th>
                <th>Interest Rate (% p.a.)</th>
                <th>Monthly EMI (₹)</th>
                <th>Total Interest Paid (₹)</th>
              </tr>
            </thead>
            <tbody>
              {emiResults.map((result, index) => (
                <tr key={index}>
                  <td>{result.bankName}</td>
                  <td>{result.interestRate}</td>
                  <td>{result.emi}</td>
                  <td>{result.totalInterest}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

export default CompareEmi;