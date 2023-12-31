import React from 'react';
import { Card, CardContent, Typography, Stack } from '@mui/material';
import Navbar from './Navbar';

const faqsData = [
  {
    question: "What is an online e-visa processing system?",
    answer: <div>
    <p>
      An online e-visa processing system, also known as an electronic visa processing system, is a digital platform that allows travelers to apply for a visa to enter a foreign country through the internet. This system simplifies and expedites the visa application process, as it eliminates the need for applicants to visit a physical embassy or consulate in person. Instead, applicants can submit their visa applications and supporting documents online, pay the required fees electronically, and receive their e-visas via email or a secure online portal.
    </p>
    <p>
      The e-visa processing system typically involves the following steps:
    </p>
    <ol>
      <li>
        Application Submission: Travelers fill out an online visa application form with personal information, travel details, and any required supporting documents, such as passport scans and photographs.
      </li>
      <li>
        Payment: Applicants make the necessary visa processing fees electronically, often using credit cards or other online payment methods.
      </li>
      <li>
        Review and Approval: The immigration authorities of the destination country review the applications and supporting documents online. They may conduct security and background checks as part of the assessment process.
      </li>
      <li>
        Visa Issuance: Once the application is approved, the e-visa is issued electronically and sent to the applicant via email or made available for download through a secure portal. The visa will typically include relevant details such as the validity period and any travel restrictions.
      </li>
      <li>
        Travel: Travelers can print the e-visa and present it to immigration authorities upon arrival at their destination country, alongside their passport. The e-visa serves as proof of their authorization to enter the country.
      </li>
    </ol>
    <p>
      E-visas have become increasingly popular as they streamline the visa application process, reduce paperwork, and make it more convenient for travelers. However, not all countries offer e-visas, and the eligibility criteria, processing times, and requirements can vary from one country to another. Travelers should check with the embassy or official government website of the destination country to determine if e-visas are available and how to apply for them.
    </p>
  </div>
  },
];

function FAQComponent() {
  return (
    <div>
      <Navbar />
      <Stack spacing={2}>
        <h1>Frequently Asked Questions</h1>
        {faqsData.map((faq, index) => (
          <Card key={index}>
            <CardContent>
              <Typography variant="h6" component="div" className="faq-question">
                {faq.question}
              </Typography>
              <Typography variant="body1" className="faq-answer">
                {faq.answer}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Stack>
    </div>
  );
}

export default FAQComponent;