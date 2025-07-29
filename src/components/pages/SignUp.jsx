import React, { useState } from 'react';
import PopapSignUp from '../components/PopapSignUp';

const SignUp = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="p-6">
      <button onClick={() => setOpen(true)} className="bg-green-500 text-white px-4 py-2 rounded">
        Open Sign Up
      </button>
      {open && <PopapSignUp onClose={() => setOpen(false)} />}
    </div>
  );
};

export default SignUp;
