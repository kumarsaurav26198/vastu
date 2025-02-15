import React, { useState, useEffect } from "react";
import { Container, Form, Table, Button, Row, Col } from "react-bootstrap";
import { numberToWords } from "../components/Function/Numtoword"; // Import the function

const Emicalculator = () => {
  // State variables
  const [loanAmount, setLoanAmount] = useState(100000); // Default loan amount
  const [tenure, setTenure] = useState(12); // Default tenure in months
  const [interestRate, setInterestRate] = useState(10.25); // Default interest rate
  const [extraPayments, setExtraPayments] = useState({}); // Extra payments for specific months
  const [emi, setEmi] = useState(0); // Calculated EMI
  const [totalInterest, setTotalInterest] = useState(0); // Total interest paid
  const [amortizationSchedule, setAmortizationSchedule] = useState([]); // EMI breakdown

  const formatNumber = (value) => {
    return parseFloat(value).toLocaleString("en-IN", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  };

  const calculateEmi = () => {
    const monthlyInterestRate = interestRate / 12 / 100;
    const emi =
      (loanAmount *
        monthlyInterestRate *
        Math.pow(1 + monthlyInterestRate, tenure)) /
      (Math.pow(1 + monthlyInterestRate, tenure) - 1);
    setEmi(emi.toFixed(2));

    // Calculate amortization schedule
    let balance = loanAmount;
    const schedule = [];
    let totalInterestPaid = 0;
    let loanFullyRepaid = false;

    for (let month = 1; month <= tenure; month++) {
      if (loanFullyRepaid) {
        // If the loan is already fully repaid, set all values to zero
        schedule.push({
          month,
          principal: formatNumber(0),
          interest: formatNumber(0),
          extraPayment: formatNumber(0),
          remainingBalance: formatNumber(0),
          totalPayment: formatNumber(0),
        });
        continue;
      }

      const interest = balance * monthlyInterestRate;
      const principal = emi - interest;
      const extraPayment = extraPayments[month] || 0;
      const totalPayment = principal + interest + extraPayment;

      // Check if the loan is fully repaid
      if (balance <= principal + extraPayment) {
        // Adjust the principal and extra payment to fully repay the loan
        const adjustedPrincipal = balance;
        const adjustedExtraPayment = 0;
        const adjustedTotalPayment = adjustedPrincipal + interest + adjustedExtraPayment;

        schedule.push({
          month,
          principal: formatNumber(adjustedPrincipal),
          interest: formatNumber(interest),
          extraPayment: formatNumber(adjustedExtraPayment),
          remainingBalance: formatNumber(0),
          totalPayment: formatNumber(adjustedTotalPayment),
        });

        // Update total interest paid
        totalInterestPaid += interest;

        // Mark the loan as fully repaid
        loanFullyRepaid = true;
        continue;
      }

      // Update the balance and total interest paid
      balance -= principal + extraPayment;
      totalInterestPaid += interest;

      schedule.push({
        month,
        principal: formatNumber(principal),
        interest: formatNumber(interest),
        extraPayment: formatNumber(extraPayment),
        remainingBalance: formatNumber(balance),
        totalPayment: formatNumber(totalPayment),
      });
    }

    setAmortizationSchedule(schedule);
    setTotalInterest(totalInterestPaid.toFixed(2));
  };

  // Function to handle extra payments
  const handleExtraPayment = (month, amount) => {
    const updatedExtraPayments = { ...extraPayments, [month]: amount };
    setExtraPayments(updatedExtraPayments);
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    calculateEmi();
  };

  // Function to handle loan amount input
  const handleLoanAmountChange = (e) => {
    const value = e.target.value.replace(/,/g, ""); // Remove commas for calculation
    if (value === "") {
      setLoanAmount(0); // Set to 0 if the input is cleared
    } else if (!isNaN(value)) {
      setLoanAmount(parseFloat(value));
    }
  };

  // Function to handle extra payment input
  const handleExtraPaymentInput = (month, value) => {
    if (value === "") {
      handleExtraPayment(month, 0); // Set to 0 if the input is cleared
    } else if (!isNaN(value)) {
      handleExtraPayment(month, parseFloat(value));
    }
  };

  // Calculate EMI on component mount and when inputs change
  useEffect(() => {
    calculateEmi();
  }, [loanAmount, tenure, interestRate, extraPayments]);

  return (
    <Container
      fluid
      style={{
        backgroundColor: "#f8f9fa",
        padding: "20px",
        borderRadius: "10px",
        minHeight: "100vh",
        fontFamily: "'Roboto Mono', monospace", // Apply the font here
      }}
    >
      <h2
        style={{
          color: "#343a40",
          textAlign: "center",
          marginBottom: "20px",
          fontWeight: "bold",
        }}
      >
        Loan EMI Calculator
      </h2>
      <Row>
        {/* Left Side: Input Fields */}
        <Col md={6} className="mb-4">
          <Form
            onSubmit={handleSubmit}
            style={{
              backgroundColor: "white",
              padding: "20px",
              borderRadius: "10px",
              marginTop: "50px",
            }}
          >
            {/* Loan Amount */}
            <Form.Group controlId="loanAmount" className="mb-3">
              <Form.Label style={{ color: "#343a40", fontWeight: "500" }}>
                Loan Amount (₹)
              </Form.Label>
              <Form.Control
                type="text"
                value={loanAmount === 0 ? "" : loanAmount.toLocaleString("en-IN")}
                onChange={handleLoanAmountChange}
                required
                style={{ fontFamily: "'Roboto Mono', monospace" }} // Apply font to input
              />
              <div style={{ marginTop: "5px", color: "#343a40", fontSize: "14px" }}>
                <strong>Amount in Words:</strong> {numberToWords(loanAmount)}
              </div>
            </Form.Group>

            {/* Tenure */}
            <Form.Group controlId="tenure" className="mb-3">
              <Form.Label style={{ color: "#343a40", fontWeight: "500" }}>
                Tenure (Months)
              </Form.Label>
              <Form.Control
                type="number"
                value={tenure}
                onChange={(e) => setTenure(parseInt(e.target.value))}
                required
                style={{ fontFamily: "'Roboto Mono', monospace" }} // Apply font to input
              />
            </Form.Group>

            {/* Interest Rate */}
            <Form.Group controlId="interestRate" className="mb-3">
              <Form.Label style={{ color: "#343a40", fontWeight: "500" }}>
                Interest Rate ({interestRate.toFixed(2)}%)
              </Form.Label>
              <Form.Range
                min="0"
                max="50"
                step="0.01"
                value={interestRate}
                onChange={(e) => setInterestRate(parseFloat(e.target.value))}
              />
              <Form.Control
                type="number"
                min="0"
                max="50"
                step="0.01"
                value={interestRate}
                onChange={(e) => setInterestRate(parseFloat(e.target.value))}
                style={{ marginTop: "10px", fontFamily: "'Roboto Mono', monospace" }} // Apply font to input
              />
            </Form.Group>
          </Form>

          {/* Results */}
          <div
            style={{
              backgroundColor: "white",
              padding: "20px",
              borderRadius: "10px",
              marginTop: "20px",
            }}
          >
            <h4
              style={{ color: "#343a40", marginBottom: "20px", fontWeight: "bold" }}
            >
              Results
            </h4>
            <p style={{ color: "#343a40", fontSize: "18px" }}>
              <strong>Monthly EMI:</strong> ₹{formatNumber(emi)}
            </p>
            <p style={{ color: "#343a40", fontSize: "18px" }}>
              <strong>Total Interest Paid:</strong> ₹{formatNumber(totalInterest)}
            </p>
          </div>
        </Col>

        {/* Right Side: Amortization Schedule */}
        <Col md={6}>
          <div
            style={{
              backgroundColor: "white",
              padding: "20px",
              borderRadius: "10px",
            }}
          >
            <h4
              style={{
                color: "#343a40",
                marginBottom: "20px",
                fontWeight: "bold",
              }}
            >
              Amortization Schedule
            </h4>
            <div style={{ overflowX: "auto" }}>
              <Table striped bordered hover responsive>
                <thead>
                  <tr>
                    <th>Month</th>
                    <th>Principal (₹)</th>
                    <th>Interest (₹)</th>
                    <th>Extra Payment (₹)</th>
                    <th>Remaining Balance (₹)</th>
                    <th>Total Payment-EMI (₹)</th>
                  </tr>
                </thead>
                <tbody>
                  {amortizationSchedule.map((entry) => (
                    <tr key={entry.month}>
                      <td>{entry.month}</td>
                      <td>{entry.principal}</td>
                      <td>{entry.interest}</td>
                      <td>
                        <Form.Control
                          type="number"
                          value={extraPayments[entry.month] || ""}
                          onChange={(e) =>
                            handleExtraPaymentInput(
                              entry.month,
                              e.target.value
                            )
                          }
                          style={{ width: "100px", fontFamily: "'Roboto Mono', monospace" }} // Apply font to input
                        />
                      </td>
                      <td>{entry.remainingBalance}</td>
                      <td>{entry.totalPayment}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Emicalculator;