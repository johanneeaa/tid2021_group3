import React, { createContext } from 'react'

// AppProvider is added to gain access to the AppContext. With this we can use the AppContext in our components. 
// Here the URL location is used to determine the colors for the current theme.

export const AppContext = createContext()

export const AppProvider = ({ children }) => {

    const getTheme = () => {

        const location = window.location.pathname

        switch (location.toLowerCase()) {
            case "/rental": {
                return {
                    primary: "#F7E8A4",
                    highlight: "#F6DF76",
                    mitigated: "#FBF3D0",
                    disabled: "#FDF9E8"
                }
            }
            case "/cars": {
                return {
                    primary: "#6BB78B",
                    highlight: "#25CF6D",
                    mitigated: "#BADEC9",
                    disabled: "#EEF7F2"
                }
            }
            case "/transfers": {
                return {
                    primary: "#F790CE",
                    highlight: "#F7469B",
                    mitigated: "#FCCFF7",
                    disabled: "#FEF3FD"
                }
            }
            case "/customer": {
                return {
                    primary: "#B4C3F4",
                    highlight: "#7F98EE",
                    mitigated: "#D2DBF9",
                    disabled: "#E9EDFC"
                }
            }
            default: {
                return {
                    primary: "#cccccc",
                    highlight: "#dddddd",
                    mitigated: "#777777",
                    disabled: "#333333"
                }
            }
        }

    }


	return (
		<AppContext.Provider
			value={{getTheme}}>
			{children}
		</AppContext.Provider>
	)
}