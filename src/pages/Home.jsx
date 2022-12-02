import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import useMultiStepForm from '../components/useMultiStepForm';
import FormOne from '../components/FormOne';
import FormTwo from '../components/FormTwo';
import FormThree from '../components/FormThree';
import { useNavigate } from 'react-router-dom';

const INITIAL_DATA = {
  email: '',
  password: '',
  firstName: '',
  lastname: '',
  address: '',
  countryCode: '',
  phoneNumber: '',
  acceptTermsAndCondition: '',
};

const Home = () => {
  const navigate = useNavigate();
  const [data, setData] = useState(INITIAL_DATA);

  function updateFields(fields) {
    setData(prev => ({ ...prev, ...fields }));
  }

  const { steps, step, currentStepIndex, isFirstStep, isLastStep, back, next } = useMultiStepForm([
    <FormOne {...data} updateFields={updateFields} />,
    <FormTwo {...data} updateFields={updateFields} />,
    <FormThree {...data} updateFields={updateFields} />,
  ]);

  const onSubmit = e => {
    e.preventDefault();
    if (!isLastStep) return next();
    // Fetch POST method - sends new data to an API
    console.log(JSON.stringify(data));
    fetch('https://codebuddy.review/submit', {
      method: 'POST',
      body: JSON.stringify(data),
    })
      .then(response => response.json())
      .then(response => console.log(JSON.stringify(response)))
      .then(navigate('/posts'));
  };

  const onSave = e => {
    e.preventDefault();
    alert('This app automatically saves your data as you type-in 😎');
  };

  return (
    <main>
      <div className="container">
        <div className="step-wrap">
          {currentStepIndex + 1}/{steps.length}
        </div>
        <Form onSubmit={onSubmit}>
          {step}
          {isFirstStep && (
            <Button className="back-btn" variant="primary" onClick={back} type="button">
              Back
            </Button>
          )}
          <Button onClick={onSave} className="back-btn" variant="primary" type="button">
            Save
          </Button>
          <Button variant="primary" type="submit">
            {isLastStep ? 'Submit' : 'Save and Next'}
          </Button>
        </Form>
      </div>
    </main>
  );
};

export default Home;
