import axiosSecure from ".";

export const resumeFromPost = async (resumeData) => {
  const { data } = await axiosSecure.put(`/resume`, resumeData);
  return data;
};

export const resumeFromGetByEmail = async (email) => {
  const { data } = await axiosSecure.get(`/resume/${email}`);
  console.log(data);
  return data;
};
export const resumeFromGetById = async (id) => {
  console.log(id);
  const { data } = await axiosSecure.get(`/getresume/${id}`);

  return data;
};
export const resumeTemplateUpdate = async (id, template) => {
  console.log(id);
  const { data } = await axiosSecure.patch(`/resume/${id}/template`, template);

  return data;
};
export const coverLetterFromPost = async (coverLetterData) => {
  const { data } = await axiosSecure.put(`/coverletter`, coverLetterData);
  return data;
};

export const coverLetterFromGetByEmail = async (email) => {
  const { data } = await axiosSecure.get(`/coverletter/${email}`);
  return data;
};
export const coverLetterFromGetById = async (id) => {
  const { data } = await axiosSecure.get(`/get-coverletter/${id}`);
  return data;
};

export const cvFromPost = async (cvData) => {
  const { data } = await axiosSecure.put(`/cv`, cvData);
  return data;
};

export const cvFromGetbyEmail = async (email) => {
  const { data } = await axiosSecure.get(`/cv/${email}`);
  return data;
};
export const cvFromGetById = async (id) => {
  console.log(id);
  const { data } = await axiosSecure.get(`/getcv/${id}`);
  return data;
};

export const cvTemplateUpdate = async (id, template) => {
  console.log(id);
  const { data } = await axiosSecure.patch(`/cv/${id}/template`, template);

  return data;
};


export const allResume = async (email) =>{
  console.log(email);
  const { data } = await axiosSecure.get(`/all-resume/${email}`)
  return data
}
export const allCv = async (email) =>{
  console.log(email);
  const { data } = await axiosSecure.get(`/all-cv/${email}`)
  return data
}
export const allCoverLetter = async (email) =>{
  console.log(email);
  const { data } = await axiosSecure.get(`/all-coverletter/${email}`)
  return data
}

export const createPaymentIntent = async (price) =>{
  const {data} = await axiosSecure.post("/create-payment-intent", price)
  return data;
}
export const saveInfo = async (paymentInfo) => {
  const { data } = await axiosSecure.post("/payments", paymentInfo);
  return data;
};
export const ReviewsGet = async () =>{
  const {data} = await axiosSecure.get(`/reviews`)
  return data;
}
export const ReviewsofUser = async (Reviewdata) =>{
  const { data} = await axiosSecure.post("/reviews" , Reviewdata)
return data
}

export const updateStudentsUser = async (email) =>{
  const {data} = await axiosSecure.patch(`/users/student/${email}`,{})
  return data;
}
export const updateJobUser = async (email) =>{
  const {data} = await axiosSecure.patch(`/users/job/${email}`,{})
  return data;
}
export const updateProfessionalsUser = async (email) =>{
  const {data} = await axiosSecure.patch(`/users/professional/${email}`,{})
  return data;
}
export const User = async (email) =>{
  const {data} = await axiosSecure.get(`/users/${email}`)
  return data;
}