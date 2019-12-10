import React from 'react';

// createContext() creates two components

// FirebaseContext.Provider: used to provide a Firebase instance
// once at the top-level of your React component tree

// FirebaseContext.Consumer: used to retrieve the Firebase instance
// if it is needed
const FirebaseContext = React.createContext(null);

export default FirebaseContext;