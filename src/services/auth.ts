import { Auth } from 'aws-amplify';

export const registerUser = async (username: string, password: string, email: string) => {
    try {
        const { user } = await Auth.signUp({
            username,
            password,
            attributes: {
                email,
            },
        });
        return user;
    } catch (error) {
        throw new Error(error.message);
    }
};

export const loginUser = async (username: string, password: string) => {
    try {
        const user = await Auth.signIn(username, password);
        return user;
    } catch (error) {
        throw new Error(error.message);
    }
};

export const logoutUser = async () => {
    try {
        await Auth.signOut();
    } catch (error) {
        throw new Error(error.message);
    }
};

export const getCurrentUser = async () => {
    try {
        const user = await Auth.currentAuthenticatedUser();
        return user;
    } catch (error) {
        throw new Error(error.message);
    }
};