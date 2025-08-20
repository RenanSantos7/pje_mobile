import { 
    createContext, 
    useContext, 
    useEffect,
    useState,
    ReactNode 
} from 'react'

interface IDataContext {

}

const DataContext = createContext<IDataContext>(null);

export default function DataProvider ({ children }:{children: ReactNode}) {
    const [, ] = useState([]);

    return (
        <DataContext.Provider value={{ ,  }}>
            {children}
        </DataContext.Provider>
    )
}

export function useDataContext() {
	return useContext(DataContext);
}

