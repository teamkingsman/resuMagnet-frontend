"use client";
import React, { useEffect, useState } from "react";
import CoverLetter from "./CoverLetter";
import { coverLetterFromGet } from "@/lib/BuilderAPI";
import useAuth from "@/hooks/useAuth";

const JoyTemplate = () => {
  const { user } = useAuth();
  const [coverLetter, setCoverLetter] = useState({});
//   console.log(coverLetter);
  useEffect(() => {
    coverLetterFromGet(user.email).then((res) => setCoverLetter(res));
  }, [user]);

  return (
    <div>
      <CoverLetter coverLetter={coverLetter}></CoverLetter>
    </div>
  );
};

export default JoyTemplate;
