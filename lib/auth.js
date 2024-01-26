import axiosSecure from "."

export const clearCookie = async () => {
    const { data } = await axiosSecure.get('/auth/logout')
    return data
  }

  export const saveUser = async user => {
    const currentUser = {
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      usertype: 'free',
      status: 'Verified',
    }
    const { data } = await axiosSecure.post(`/create-users`, currentUser)
    console.log(data)
  
    return data
  }

  export const googleUserSave = async (user) => {
    const currentUser = {
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      usertype: 'free',
      status: 'Verified',
    }
    const { data } = await axiosSecure.put(`/users/:${user.email}`, currentUser)
    console.log(data)
  
    return data
  }

  export const getUserType = async email => {
    const { data } = await axiosSecure(`/user/${email}`)
    return data.usertype
  }