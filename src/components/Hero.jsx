import React, { useEffect, useLayoutEffect, useRef } from "react";
import { Toaster, toast } from 'sonner'

const Hero = () => {
  const titleRef = useRef(null);

  useEffect(() => {
    console.log("useEffect");
  }, []);

  useLayoutEffect(() => {
    console.log("useLayoutEffect");
  }, []);

  return (
    <div>

      <Toaster position="top-right" />
    </div>
  );
};

export default Hero;
