import React, { useState, useEffect } from "react";
import { Carousel, Card, Row, Col, Container } from "react-bootstrap";
import aman from "../assets/clients/aman.jpeg";
import ashutosh from "../assets/clients/ashutosh.jpeg";
import neelam from "../assets/clients/neelam.jpg";
import rijul from "../assets/clients/rijul.jpeg";
import rohit from "../assets/clients/rohit.jpeg";
import saurav from "../assets/clients/saurav.jpg";
import shoubhit from "../assets/clients/shoubhit.jpg";
import shruti from "../assets/clients/shruti.jpeg";

const clientReviews = [
  { 
    name: "Ashutosh Rai", 
    feedback: "The home loan process was smooth and hassle-free. The team provided clear guidance, handled everything professionally, and secured me a great interest rate. Highly recommend their services!",
    image: ashutosh,
    rating: 5
  },
  { 
    name: "Rijul Garg", 
    feedback: "The Vastu consultation was insightful and easy to follow. After making the recommended changes, I noticed improved positivity and balance at home. A truly beneficial experience!",
    image: rijul,
    rating: 4
  },
  { 
    name: "Aman Gupta", 
    feedback: "Their stock market insights were incredibly helpful. I learned investment strategies, minimized risks, and saw excellent returns. Great guidance for anyone looking to invest smartly!",
    image: aman,
    rating: 5
  },
  { 
    name: "Saurav Kumar", 
    feedback: "My home loan was approved quickly, thanks to their efficient process. They explained everything clearly and secured the best deal for me. Fantastic experience!",
    image: saurav,
    rating: 4
  },
  { 
    name: "Shoubhit Sharma", 
    feedback: "The Vastu consultation was well-explained and practical. Small adjustments brought noticeable improvements in harmony and energy. I'm very satisfied with the results!",
    image: shoubhit,
    rating: 5
  },
  { 
    name: "Neelam Bharadwaj", 
    feedback: "Their stock market tips helped me build a strong portfolio and increase returns. The advice was clear, well-researched, and easy to follow. Highly recommended!",
    image: neelam,
    rating: 4
  },
  { 
    name: "Rohit Vivekanand", 
    feedback: "The home loan team provided excellent support, ensuring a smooth approval process with great interest rates. Their professionalism and transparency made the experience stress-free!",
    image: rohit,
    rating: 4
  },
  { 
    name: "Shruti Pandey", 
    feedback: "Vastu guidance significantly improved my home’s energy and atmosphere. Their personalized recommendations made a real difference. Very grateful for their expertise!",
    image: shruti,
    rating: 5
  }
];

const chunkArray = (array, chunkSize) => {
  const result = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    result.push(array.slice(i, i + chunkSize));
  }
  return result;
};

const Client = () => {
  const [chunkSize, setChunkSize] = useState(4); // Default chunk size

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setChunkSize(1); // Show only one card in mobile view
      } else if (window.innerWidth < 992) {
        setChunkSize(2); // Show 2 cards on tablets
      } else {
        setChunkSize(4); // Show 4 cards on larger screens
      }
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize); // Listen for screen size changes
    return () => window.removeEventListener("resize", handleResize); // Cleanup event listener
  }, []);

  const groupedReviews = chunkArray(clientReviews, chunkSize);

  return (
    <div style={{ minHeight: "60vh", backgroundColor: "#333" }}>
          <Row className="align-items-center ">
    <Container className="mt-5 mb-5" >
      <h1 className="text-center" style={{ fontSize: "2.3rem", color: "white", marginBottom: "20px" }}>
        What Our Clients Say
      </h1>
      <Carousel interval={3000} controls={true} indicators={true}>
        {groupedReviews.map((group, idx) => (
          <Carousel.Item key={idx}>
            <Row className="justify-content-center">
              {group.map((review, index) => (
                <Col key={index} lg={3} md={6} sm={12} className="d-flex justify-content-center">
                  <Card className="text-center p-3 shadow-sm" style={{ width: "100%", minHeight: "280px" }}>
                    <div style={{ display: "flex", justifyContent: "center", marginBottom: "10px" }}>
                      <Card.Img 
                        variant="top" 
                        src={review.image} 
                        alt={review.name} 
                        style={{ 
                          width: "100px", 
                          height: "100px", 
                          borderRadius: "50%", 
                          objectFit: "cover", 
                          border: "3px solid #ddd"
                        }} 
                      />
                    </div>
                    <Card.Body>
                      <Card.Text style={{ fontSize: "1.1rem", fontStyle: "italic", color: "#333" }}>
                        "{review.feedback}"
                      </Card.Text>
                      <Card.Title style={{ fontSize: "1rem", fontWeight: "bold", marginTop: "10px" }}>
                        - {review.name}
                      </Card.Title>
                      <div>
                        {Array(review.rating).fill().map((_, i) => (
                          <span key={i} style={{ color: "gold", fontSize: "1.2rem" }}>⭐</span>
                        ))}
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
    </Row>
    </div>
  );
};

export default Client;
