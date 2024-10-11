export const login = async (email, password) => {
    const validUser = {
        email: 'prologin@prologin.com',
        password: 'ProLogin123456',
    };

    if (email !== validUser.email) {
        return { success: false, message: 'Invalid email or password' };
    }

    if (password.length < 6) {
        return { success: false, message: 'Password must be at least 6 characters' };
    }

    if (password !== validUser.password) {
        return { success: false, message: 'Invalid email or password' };
    }

    return { success: true, token: 'dummyToken', user: { email } };
};
