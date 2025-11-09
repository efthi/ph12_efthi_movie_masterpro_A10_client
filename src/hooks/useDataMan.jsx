/**
 *  নাম দিয়েছি DataMan, মানে যে ডেটা নিয়ে আসবে, তাই
 */
import { useEffect, useState } from "react";
import axios from 'axios';

const useDataMan = () => {
    const [movies, setMovies] = useState([]); // Data এনে রাখবে এখানে
    const [loading, setLoading] = useState(true); // loading এর উপর নির্ভর করে Spinner দেখানোর জন্য
    const [err, setErr] = useState(null); // Error আসলে সেটা ধরার জন্য

    useEffect( () => {
        setLoading(true);
        axios('/public/assets/data/hollywood.json')
            .then(res => setMovies(res.data))
                .catch(err => setErr(err))
                .finally(() => setLoading(false))
    }, [])
    return {movies, loading, err} //ফাংশন রিটার্ন করলো

}

export default useDataMan;