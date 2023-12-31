import React, { useState } from 'react';
import { Card, CardContent, Typography, Stack } from '@mui/material';
import Navbar from './Navbar';

// Define your FAQs as an array of objects
const faqsData = [
  {
    question: "Q1. Who is eligible for e-Visa Services?",
    answer: "Ans- The following are the eligibility conditions for availing e-Visa services - Nationals of countries listed on the e-Visa website...",
  },
  {
    question: "Q2. What is the procedure of applying for e-Visa?",
    answer: "Ans- For details regarding the procedure for applying, please visit our website: https://indianvisaonline.gov.in/evisa/",
  },
  {
    question: "Q3.  Is there any fee other than the processing fee?",
    answer: "Ans- No, there is no fee other than the processing fee for e-Visa application and it is non-refundable. Please visit our website to know the fee applicable for your country as it is country-specific.",
  },
  {
    question: "Q4.  Do I get a confirmation of submission of my e-Visa application?",
    answer: "Ans- Yes. Immediately after you submit your e-Visa application and make the payment, you will receive a confirmation of submission of your application on the email id provided by you while filling up your application form.",
  },
  {
    question: "Q5.  Can I check the status of my e-Visa application?",
    answer: "Ans- Yes, you may check the status of your e-Visa application by visiting our website: https://indianvisaonline.gov.in/evisa/ and clicking on 'Check your Visa Status' Tab provided on the website.",
  },
];

function FAQComponent() {
  const [expanded, setExpanded] = useState(null);

  const handleToggle = (index) => {
    if (expanded === index) {
      setExpanded(null);
    } else {
      setExpanded(index);
    }
  };

  return (
    <div>
        <Navbar/>
      <Stack spacing={2}>
        <h1>Frequently Asked Questions</h1>
        {faqsData.map((faq, index) => (
          <Card key={index}>
            <CardContent>
              <Typography
                variant="h6"
                component="div"
                className="faq-question"
                onClick={() => handleToggle(index)}
              >
                {faq.question}
              </Typography>
              {expanded === index && (
                <Typography variant="body1" className="faq-answer">
                  {faq.answer}
                </Typography>
              )}
            </CardContent>
          </Card>
        ))}
      </Stack>
    </div>
  );
}

export default FAQComponent;