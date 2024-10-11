import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../../features/auth/authService';
import { useAuth } from '../../hooks/useAuth';
import FormGroup from '../molecules/FormGroup';
import Button from '../atoms/Button';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');
    const { setAuth } = useAuth();
    const navigate = useNavigate();

    const handleInputChange = (setter) => (e) => {
        setter(e.target.value);
        setError('');
    };

    const validateForm = () => {
        if (email === '' || password === '') {
            setError('Both fields are required');
            return false;
        }
        if (password.length < 6) {
            setError('Password must be at least 6 characters');
            return false;
        }
        setError('');
        return true;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (validateForm()) {
            try {
                const result = await login(email, password);
                console.log('Login result:', result);

                if (result.success) {
                    console.log('Login successful, setting auth and navigating to dashboard');
                    setAuth({ token: result.token });
                    navigate('/dashboard');
                } else {
                    setError(result.message);
                    console.log('Login failed:', result.message);
                }
            } catch (err) {
                setError(err.message);
                console.log('Error during login:', err);
            }
        }
    };

    return (
        <div className='flex justify-center items-center h-screen bg-gray-100'>
            <form onSubmit={handleSubmit} className='p-6 bg-white rounded-lg shadow-md w-full max-w-md'>
                <h2 className='text-2xl font-bold mb-6 text-center'>ProLogin</h2>

                {error && <p className='text-red-500 text-center mb-4'>{error}</p>}

                <FormGroup labelText='Email' inputType='email' inputValue={email} onInputChange={handleInputChange(setEmail)} inputId='email' />

                <FormGroup
                    labelText='Password'
                    inputType={showPassword ? 'text' : 'password'}
                    inputValue={password}
                    onInputChange={handleInputChange(setPassword)}
                    inputId='password'
                    showIcon={true}
                    iconType={showPassword ? 'eyeOff' : 'eye'}
                    onIconClick={() => setShowPassword(!showPassword)}
                />

                <div className='flex justify-end'>
                    <Button type='submit'>Login</Button>
                </div>
            </form>
        </div>
    );
};

export default LoginForm;
