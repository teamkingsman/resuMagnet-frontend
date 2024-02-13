// "use client"
// import useAuth from '@/hooks/useAuth';
// import { allCoverLetter, allResume } from '@/lib/BuilderAPI';
// import Link from 'next/link';
// import React, { useEffect, useState } from 'react';

// const AllTemplate = () => {
//     const {user} = useAuth()
//     const [resume, setResume] = useState([]);
//     const [coverLetter, setCoverLetter] = useState([]);
//       useEffect(() => {
//           allResume(user.email).then((res) => setResume(res))
//           .catch((err) => console.log(err))
//         },[user.email])
//         console.log(resume);

//        useEffect(() =>{
//         allCoverLetter(user.email)
//         .then((res) =>setCoverLetter(res))
//         .catch((err) =>console.log(err))
//        },[user.email]) 
//        console.log(coverLetter);
//     return (
//         <div>
//              <div>
//             { resume.map((item, index) =>(
//                 <Link key={item._Id} href={`/dashboard/resume/${item._id}`}>
//                    <h2 className='text-2xl mt-8'>Resume template {index + 1}</h2>
//                 </Link>
//             ))  
//             }
//         </div>
//         <div>
//             {
//                 coverLetter.map((item, index) =>(
//                     <Link key={item._Id} href={`/dashboard/cover-letter/${item._id}`}>
//                    <h2 className='text-2xl mt-8'>Cover Letter template {index + 1}</h2>
//                 </Link>
//                 ))
//             }
//         </div>
//         </div>
//     );
// };

// export default AllTemplate;