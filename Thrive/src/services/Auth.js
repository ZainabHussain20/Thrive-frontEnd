import Client from "./api"

export const SignInUser = async (data) => {
  try {
    const res = await Client.post("/auth/login", data)
    localStorage.setItem("token", res.data.token)
    localStorage.setItem("userId", res.data.user.id)
    localStorage.setItem("userType", res.data.user.type)
    localStorage.setItem("userName", res.data.user.userName)
    return res.data.user
  } catch (error) {
    throw error
  }
}

export const RegisterUser = async (data) => {
  try {
    const res = await Client.post("/auth/register", data)
    return res.data
  } catch (error) {
    throw error
  }
}

export const updatePassword = async (data) => {
  try {
    const res = await Client.put("/auth/reset-password", data)
    return res.data
  } catch (error) {
    throw error
  }
}

export const CheckSession = async () => {
  try {
    const res = await Client.get("/auth/session")
    return res.data
  } catch (error) {
    throw error
  }
}
