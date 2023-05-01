import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const AuthContext = createContext();

const authProvider = {
	login: async (userData) => {
		try {
			const response = await axios.post("/api/authentication/login", userData);
			const token = response.data.token;
			sessionStorage.setItem("token", token);
			return Promise.resolve();
		} catch (error) {
			return Promise.reject(error);
		}
	},
	logout: async () => {
		try {
			await axios.post("/api/authentication/logout");
			sessionStorage.removeItem("token");
			return Promise.resolve();
		} catch (error) {
			return Promise.reject(error);
		}
	},
	register: async (userData) => {
		try {
			const response = await axios.post("/api/users", userData);
			const token = response.data.token;
			sessionStorage.setItem("token", token);
			return Promise.resolve();
		} catch (error) {
			return Promise.reject(error);
		}
	},
	updateUser: async () => {
		try {
			const response = await axios.get("/api/authentication/me");
			return Promise.resolve(response.data);
		} catch (error) {
			return Promise.reject(error);
		}
	},
	checkAuth: () => {
		return sessionStorage.getItem("token")
			? Promise.resolve()
			: Promise.reject({ redirectTo: "/login" });
	},
	checkError: () => Promise.resolve(),
	getPermissions: () => Promise.resolve(),
};

const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get("/api/authentication/me");
				setUser(response.data);
			} catch (error) {
				console.error(error);
			}
		};

		fetchData();
	}, []);

	const { login, logout, register } = authProvider;

	const handleLogin = async (userData) => {
		try {
			await login(userData);
			const response = await authProvider.updateUser();
			setUser(response);
		} catch (error) {
			console.error(error);
		}
	};

	const handleLogout = async () => {
		try {
			await logout();
			setUser(null);
		} catch (error) {
			console.error(error);
		}
	};
	const authContextValue = {
		user,
		login: handleLogin,
		logout: handleLogout,
		register,
		isAuthenticated: !!sessionStorage.getItem("token"),
	};

	return (
		<AuthContext.Provider value={authContextValue}>
			{children}
		</AuthContext.Provider>
	);
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
