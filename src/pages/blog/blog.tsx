import BlogCard from "../../components/cards/blog-card/blog-card.tsx";
import {useEffect, useState} from "react";
import axios from 'axios';
import {SpinnerComponent} from "../../components/spinners/spinner-component.tsx";
import {PostModel} from "../../model/post-model.tsx";

export const Blog = () => {

    //--- blog posts ---//
    const [data, setData] = useState<PostModel[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get('https://moviesapi.ir/api/v1/movies?page=2')
            .then(response => {
                setData(response.data.data);
                console.log(response.data.data)
                setLoading(false);
            })
            .catch(error => {
                setError(error);
                setLoading(false);
            });
    }, []);

return(
<>
    {
        loading ? <SpinnerComponent/> :
            data.map((value : PostModel, index) =>
                <BlogCard data = {value} key={index} />)
    }

</>

) ;
}