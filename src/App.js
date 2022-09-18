import {useEffect, useState} from "react";
import Header from './components/Header';
import axios from 'axios';
import ItemsList from './components/ItemsList'

const getItemsList = async (page, limit = 4) => {
    const response = await axios.get(
        `https://api.punkapi.com/v2/beers?page=${page}&per_page=${limit}`
    );
    return response && response.data || [];
}

const App = () => {
    const [items, setItems] = useState([]);
    const [page, setPage] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');

    useEffect(() => {
        const loadItems = async () => {
            try {
                setIsLoading(true);
                const apiItems = await getItemsList(page)
                setItems((items) => [...items, ...apiItems]);
                setErrorMsg('');
            } catch (error) {
                setErrorMsg('Error while loading data. Try again later.');
            } finally {
                setIsLoading(false);
            }
        };
        loadItems()
    }, [page]);

    const loadMore = () => {
        setPage((page) => page + 1);
    };

    return (
        <div className="main-section">
            <Header/>
            <ItemsList items={items}/>
            {errorMsg && <p className="errorMsg">{errorMsg}</p>}
            <div className="row mb-2">
                <div className="col text-center">
                    <a href="#" onClick={loadMore} style={{"text-decoration": "none"}}>
                        {isLoading ? 'Loading...' : 'Load More'}
                    < /a>
                </div>
            </div>
        </div>
    )
}

export default App;