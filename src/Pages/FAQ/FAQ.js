import React from "react";
import Accordion from "react-bootstrap/Accordion";
const FAQ = () => {
  return (
    <div className="container mx-auto px-5">
      <div className="container p-3">
        <h4 style={{ color: "black", borderBottom: "5px solid black", marginBottom:'30px',width:'120px'}}>Course Advisement</h4>

        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Who should take an Online Course?</Accordion.Header>
            <Accordion.Body>
            Students join our online courses for a variety of reasons and come from diverse backgrounds, professions, and age groups. With online courses, you can
Advance your skill-set or begin a career change.
Take the next step in your formal education.
Ease the transition before entering a full-time academic program.
Enjoy learning a new topic.
Whatever the reason, our online courses are a flexible way of learning about the art world without disrupting your daily life.
            </Accordion.Body>
          </Accordion.Item>
          
          <Accordion.Item eventKey="1">
            <Accordion.Header>How do I select a course?</Accordion.Header>
            <Accordion.Body>
            Visit the course catalog to browse our offerings. In addition to searching by course duration and availability, you can also search by subject to ensure you find a course that reflects your interests. Though it is not required, we encourage those who have not studied art before to consider taking an art history course first to get a solid grounding in the discipline before exploring more specific disciplines. Our art history courses are the perfect first step before moving on to art market courses.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Can I take more than one course at a time?</Accordion.Header>
            <Accordion.Body>
            If you are new to online learning, we recommend that you begin with one course. As our courses are offered frequently throughout the year, you can always come back and continue your studies with one or more topics.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>Are there prerequisites or language requirements?</Accordion.Header>
            <Accordion.Body>
            There are no prerequisites. Our courses are open to students of all backgrounds who are 18 years of age and older.
All courses are conducted in English. Video lectures include English subtitles and the option to slow-down, pause, or replay lectures for better retention. Discussion boards are a critical component of each of our courses; therefore, we suggest students have a conversational knowledge of English when pursuing a Certificate of Completion. For any of the art writing courses, students need to be 100% proficient in written English.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header>How do I select a course?</Accordion.Header>
            <Accordion.Body>
            It is recommended that you begin your course promptly. If you do need to start the course a few days late, contact your instructor as soon as possible after the course has opened to discuss your options. Registration closes on the Friday after the course begins
            </Accordion.Body>
          </Accordion.Item>
         
        </Accordion>
      </div>
      <div className="container p-3">
        <h4 style={{ color: "black", borderBottom: "5px solid black", marginBottom:'30px',width:'120px'}}>Registration Process & Financial Considerations</h4>

        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>How do I register?</Accordion.Header>
            <Accordion.Body>
            Registration is available on our website. Just follow these simple steps:
Click the “Apply Now” button in the top right corner of your screen.
Select “Online Courses.”
Choose your course(s).
You will be asked for basic contact information and your credit card payment. We require full payment at the time of registration and all tuition is billed in US dollars. Be sure to check with your bank or credit card company, as your financial institution may charge a foreign transaction fee.
            </Accordion.Body>
          </Accordion.Item>
          
          <Accordion.Item eventKey="1">
            <Accordion.Header>When should I register?</Accordion.Header>
            <Accordion.Body>
            Visit the course catalog to browse our offerings. In addition to searching by course duration and availability, you can also search by subject to ensure you find a course that reflects your interests. Though it is not required, we encourage those who have not studied art before to consider taking an art history course first to get a solid grounding in the discipline before exploring more specific disciplines. Our art history courses are the perfect first step before moving on to art market courses.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>My payment did not go through. What do I do?</Accordion.Header>
            <Accordion.Body>
            We apologize for this inconvenience. We encourage you to reach out to your financial institution as further permissions may be needed to complete the payment. You are also welcome to write to online@sothebysinstitute.com for further guidance. Please wait a full 24 hours before trying again. A strong Internet connection and up-to-date browser are strongly recommended.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>Can I get a refund if I am unable to attend my Online Course?</Accordion.Header>
            <Accordion.Body>
            In order to be granted a full tuition refund, you must cancel your registration by sending an email to online@sothebysinstitute.com by 5:00 pm (your local time) 5 full business days before the course’s start date.  Please note we are unable to reimburse for any currency conversion fees charged by your credit-card issuer.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header>What are your Terms and Conditions?</Accordion.Header>
            <Accordion.Body>
            Visit our Terms and Conditions page for details.
            </Accordion.Body>
          </Accordion.Item>
         
        </Accordion>
      </div>
      {/* <div className="container p-3">
        <h4 style={{ color: "black", borderBottom: "5px solid black", marginBottom:'30px',width:'120px'}}>How It Works – The Online Learning Experience</h4>

        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Who should take an Online Course?</Accordion.Header>
            <Accordion.Body>
            Students join our online courses for a variety of reasons and come from diverse backgrounds, professions, and age groups. With online courses, you can
Advance your skill-set or begin a career change.
Take the next step in your formal education.
Ease the transition before entering a full-time academic program.
Enjoy learning a new topic.
Whatever the reason, our online courses are a flexible way of learning about the art world without disrupting your daily life.
            </Accordion.Body>
          </Accordion.Item>
          
          <Accordion.Item eventKey="1">
            <Accordion.Header>How do I select a course?</Accordion.Header>
            <Accordion.Body>
            Visit the course catalog to browse our offerings. In addition to searching by course duration and availability, you can also search by subject to ensure you find a course that reflects your interests. Though it is not required, we encourage those who have not studied art before to consider taking an art history course first to get a solid grounding in the discipline before exploring more specific disciplines. Our art history courses are the perfect first step before moving on to art market courses.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Can I take more than one course at a time?</Accordion.Header>
            <Accordion.Body>
            If you are new to online learning, we recommend that you begin with one course. As our courses are offered frequently throughout the year, you can always come back and continue your studies with one or more topics.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>Are there prerequisites or language requirements?</Accordion.Header>
            <Accordion.Body>
            There are no prerequisites. Our courses are open to students of all backgrounds who are 18 years of age and older.
All courses are conducted in English. Video lectures include English subtitles and the option to slow-down, pause, or replay lectures for better retention. Discussion boards are a critical component of each of our courses; therefore, we suggest students have a conversational knowledge of English when pursuing a Certificate of Completion. For any of the art writing courses, students need to be 100% proficient in written English.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header>How do I select a course?</Accordion.Header>
            <Accordion.Body>
            It is recommended that you begin your course promptly. If you do need to start the course a few days late, contact your instructor as soon as possible after the course has opened to discuss your options. Registration closes on the Friday after the course begins
            </Accordion.Body>
          </Accordion.Item>
         
        </Accordion>
      </div>
      <div className="container p-3">
        <h4 style={{ color: "black", borderBottom: "5px solid black", marginBottom:'30px',width:'120px'}}>Course Completion</h4>

        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Who should take an Online Course?</Accordion.Header>
            <Accordion.Body>
            Students join our online courses for a variety of reasons and come from diverse backgrounds, professions, and age groups. With online courses, you can
Advance your skill-set or begin a career change.
Take the next step in your formal education.
Ease the transition before entering a full-time academic program.
Enjoy learning a new topic.
Whatever the reason, our online courses are a flexible way of learning about the art world without disrupting your daily life.
            </Accordion.Body>
          </Accordion.Item>
          
          <Accordion.Item eventKey="1">
            <Accordion.Header>How do I select a course?</Accordion.Header>
            <Accordion.Body>
            Visit the course catalog to browse our offerings. In addition to searching by course duration and availability, you can also search by subject to ensure you find a course that reflects your interests. Though it is not required, we encourage those who have not studied art before to consider taking an art history course first to get a solid grounding in the discipline before exploring more specific disciplines. Our art history courses are the perfect first step before moving on to art market courses.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Can I take more than one course at a time?</Accordion.Header>
            <Accordion.Body>
            If you are new to online learning, we recommend that you begin with one course. As our courses are offered frequently throughout the year, you can always come back and continue your studies with one or more topics.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>Are there prerequisites or language requirements?</Accordion.Header>
            <Accordion.Body>
            There are no prerequisites. Our courses are open to students of all backgrounds who are 18 years of age and older.
All courses are conducted in English. Video lectures include English subtitles and the option to slow-down, pause, or replay lectures for better retention. Discussion boards are a critical component of each of our courses; therefore, we suggest students have a conversational knowledge of English when pursuing a Certificate of Completion. For any of the art writing courses, students need to be 100% proficient in written English.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header>How do I select a course?</Accordion.Header>
            <Accordion.Body>
            It is recommended that you begin your course promptly. If you do need to start the course a few days late, contact your instructor as soon as possible after the course has opened to discuss your options. Registration closes on the Friday after the course begins
            </Accordion.Body>
          </Accordion.Item>
         
        </Accordion>
      </div> */}
    </div>
  );
};

export default FAQ;
