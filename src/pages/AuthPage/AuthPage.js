import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LoginForm from '../../components/LoginForm/LoginForm';
import { useState } from 'react';
// use curly braces to destructure setUser
export default function AuthPage( {setUser}) {
  const [showLogin, setShowLogin] = useState(true);
  return (
    <main>
      <div>
        <h1>Auth Page</h1>
        <button
          onClick={() => {
            setShowLogin(!showLogin);
          }}
        >
          {showLogin ? 'Sign Up' : 'Login'}
        </button>
      </div>
      {showLogin ? <LoginForm setUser={setUser} /> : <SignUpForm setUser={setUser} />}
    </main>
  );
}