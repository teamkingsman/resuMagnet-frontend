import axiosSecure from "."

export const resumeFromPost = async (resumeData) =>{
    const { data } = await axiosSecure.put(`/resume`, resumeData)
return data
}

export const resumeFromGet = async (email) =>{
    const { data } = await axiosSecure.get(`/resume/${email}`)
    console.log(data);

    return data
}
export const resumeFromGetById = async (id) =>{
    console.log(id);
    const { data } = await axiosSecure.get(`/getresume/${id}`)

    return data
}
export const resumeTemplateUpdate = async (id,template) =>{
    console.log(id);
    const { data } = await axiosSecure.patch(`/resume/${id}/template`, template)

    return data
}
export const allResume = async (email) =>{
    console.log(email);
    const { data } = await axiosSecure.get(`all-resume/${email}`)
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
export const allCoverLetter = async (email) =>{
    console.log(email);
    const { data } = await axiosSecure.get(`all-coverletter/${email}`)
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
export const cvFromGetById = async (id) =>{
    console.log(id);
    const { data} = await axiosSecure.get(`/getcv/${id}`)
    return data
} 
export const cvTemplateUpdate = async (id,template) =>{
    console.log(id);
    const { data } = await axiosSecure.patch(`/cv/${id}/template`, template)

    return data
}
export const allCv = async (email) =>{
    console.log(email);
    const { data } = await axiosSecure.get(`all-cv/${email}`)
    return data
}
