import React,{useState} from 'react';
import { SignupForm } from '../components/SignupForm/SignupForm';
import LoginPage from '@/components/LoginForm/LoginPage';

const SignUpPage: React.FC = () => {
  const [subPage, setSubPage] = useState('Signup');
  return (
    <div>
      {subPage==='Signup' && <SignupForm setpage={setSubPage} />}
      {subPage==='Login' && <LoginPage setpage={setSubPage} />}
    </div>
  );
};

export default SignUpPage;
