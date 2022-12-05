import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import useMultiStepForm from '../components/useMultiStepForm';
import FormOne from '../components/FormOne';
import FormTwo from '../components/FormTwo';
import FormThree from '../components/FormThree';

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

  const updateFields = fields => {
    setData(prev => ({ ...prev, ...fields }));
  };

  const { steps, step, currentStepIndex, isFirstStep, isLastStep, back, next } = useMultiStepForm([
    <FormOne {...data} updateFields={updateFields} />,
    <FormTwo {...data} updateFields={updateFields} />,
    <FormThree {...data} updateFields={updateFields} />,
  ]);

  const onSubmit = e => {
    e.preventDefault();
    if (!isLastStep) return next();
    // Fetch POST method - sends new data to an API
    return fetch('https://codebuddy.review/submit', {
      method: 'POST',
      body: JSON.stringify(data),
    })
      .then(response => response.json())
      .then(navigate('/posts'));
  };

  const onSave = e => {
    e.preventDefault();
    // eslint-disable-next-line
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
