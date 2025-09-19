import React from 'react';

/*shape of the data the context will store.*/
interface UserContextType {
	name: string
	message: string
}

/*function that creates a new Context object*/
/*Provider → A React component you wrap around your tree (or part of it) to provide a value to all nested components.
Consumer → A React component you can use to read the context value (less common now because useContext hook is easier)*/
export const UserContext = React.createContext <UserContextType | undefined>(undefined)