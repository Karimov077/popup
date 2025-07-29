import React, { useState } from 'react';
import PopapSignIn from '../components/PopapSignIn';

const SignIn = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="p-6">
      <button onClick={() => setOpen(true)} className="bg-blue-500 text-white px-4 py-2 rounded">
        Open Sign In
      </button>
      {open && <PopapSignIn onClose={() => setOpen(false)} />}
    </div>
  );
};

export default SignIn;
