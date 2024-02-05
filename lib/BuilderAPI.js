import axiosSecure from "."

export const resumeFromPost = async (resumeData) =>{
    const { data } = await axiosSecure.put(`/resume`, resumeData)
return data
}

export const resumeFromGet = async (email) =>{
    console.log(email);
    const { data } = await axiosSecure.get(`resume/${email}`)
    return data
}

export const coverLetterFromPost = async (coverLetterData) =>{
    const { data } = await axiosSecure.put(`/coverletter`, coverLetterData)
    return data
}

export const coverLetterFromGet = async (email) =>{
    const { data} = await axiosSecure.get(`/coverletter/${email}`)
    return data
}

export const cvFromPost = async (cvData) =>{
    const { data } = await axiosSecure.put(`/cv`, cvData)
    return data

}

export const cvFromGet = async (email) =>{
    const { data} = await axiosSecure.get(`/cv/${email}`)
    return data
} 