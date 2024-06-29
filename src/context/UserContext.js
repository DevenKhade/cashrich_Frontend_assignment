// // UserContext.js
// import React, { createContext, useState } from 'react';

// const UserContext = createContext();

// export const UserProvider = ({ children }) => {
//   const [username, setUsername] = useState('');

//   const updateUser = (newUsername) => {
//     setUsername(newUsername);
//   }

//   return (
//     <UserContext.Provider value={{ username, updateUser }}>
//       {children}
//     </UserContext.Provider>
//   );
// };

// export default UserContext;



// UserContext.js
import React, { createContext, useState } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const updateUser = (newData) => {
    setUserData((prevData) => ({
      ...prevData,
      ...newData
    }));
  };

  return (
    <UserContext.Provider value={{ userData, updateUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
