import {
  signUp,
  signIn,
  signOut,
  getCurrentUser
} from 'aws-amplify/auth';

export const registerUser = async (username: string, password: string, email: string) => {
  try {
    const result = await signUp({
      username,
      password,
      options: {
        userAttributes: { email }
      }
    });
    return result;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const loginUser = async (username: string, password: string) => {
  try {
    const user = await signIn({ username, password });
    return user;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const logoutUser = async () => {
  try {
    await signOut();
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const getCurrentUserService = async () => {
  try {
    const user = await getCurrentUser();
    return user;
  } catch (error: any) {
    throw new Error(error.message);
  }
};