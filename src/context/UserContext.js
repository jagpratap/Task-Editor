import { createContext, useState, useContext } from "react";

// 1. Create context(with default value)
export const UserContext = createContext({
    userTasks: []
})

// 2. Create Provider(Component)
const UserProvider = ({ children }) => {
    const [userTasks, setUserTasks] = useState([])
    return (
        <UserContext.Provider value={{ userTasks, setUserTasks }}>
            {children}
        </UserContext.Provider>
    );
};
export default UserProvider;

// 3. Rap Provider around elements in root file(app)

// 4. Create useContext hook
export const useUserTasks = () => useContext(UserContext);

// 5. Consume useContext in components

