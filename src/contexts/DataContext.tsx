import { 
    createContext, 
    useContext, 
    useEffect,
    useState,
    ReactNode 
} from 'react'

interface IDataContext {
    state: any[];
    setState: React.Dispatch<React.SetStateAction<any[]>>;
}

const DataContext = createContext<IDataContext>(null);

export default function DataProvider ({ children }:{children: ReactNode}) {
    const [state, setState] = useState([]);

    return (
        <DataContext.Provider value={{ state, setState }}>
            {children}
        </DataContext.Provider>
    )
}

export function useDataContext() {
	return useContext(DataContext);
}

