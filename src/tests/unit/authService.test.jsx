import { renderHook, act } from '@testing-library/react';
import { useAuth } from '../../hooks/useAuth';

describe('useAuth hook', () => {
    beforeEach(() => {
        localStorage.clear();
        jest.clearAllMocks();
    });

    test('should initialize with auth from localStorage', () => {
        const mockAuth = { token: 'test-token' };
        localStorage.setItem('auth', JSON.stringify(mockAuth));

        const { result } = renderHook(() => useAuth());
        expect(result.current.auth).toEqual(mockAuth);
    });

    test('should set auth and save to localStorage', () => {
        const { result } = renderHook(() => useAuth());

        const mockSetItem = jest.spyOn(Storage.prototype, 'setItem');
        const mockConsoleLog = jest.spyOn(console, 'log');

        const newAuth = { token: 'new-token' };
        act(() => {
            result.current.setAuth(newAuth);
        });

        expect(result.current.auth).toEqual(newAuth);
        expect(mockSetItem).toHaveBeenCalledWith('auth', JSON.stringify(newAuth));
        expect(mockConsoleLog).toHaveBeenCalledWith('Setting auth state:', newAuth);
    });

    test('should remove auth from localStorage on logout', () => {
        const { result } = renderHook(() => useAuth());

        const mockRemoveItem = jest.spyOn(Storage.prototype, 'removeItem');
        const mockConsoleLog = jest.spyOn(console, 'log');

        act(() => {
            result.current.logout();
        });

        expect(result.current.auth).toBeNull();
        expect(mockRemoveItem).toHaveBeenCalledWith('auth');
        expect(mockConsoleLog).toHaveBeenCalledWith('Logging out');
    });

    test('should clear auth in state when setAuth is called with null', () => {
        const { result } = renderHook(() => useAuth());

        const mockRemoveItem = jest.spyOn(Storage.prototype, 'removeItem');
        const mockConsoleLog = jest.spyOn(console, 'log');

        act(() => {
            result.current.setAuth(null);
        });

        expect(result.current.auth).toBeNull();
        expect(mockRemoveItem).toHaveBeenCalledWith('auth');
        expect(mockConsoleLog).toHaveBeenCalledWith('Setting auth state:', null);
    });
});
