import { Container, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import BlogSideber from '../BlogSidebar/BlogSidebar';
import BlogDetailCard from './BlogDetailCard';

const BlogDetails = () => {
    const { slug } = useParams();
    const blogSlug = (slug.replaceAll("-", " "));
    const [blog, setBlog] = useState([]);
    const [detail, setDetail] = useState({});


    useEffect(() => {
        fetch('/Blogs.json')
            .then(res => res.json())
            .then(data => setBlog(data))
    }, []);

    useEffect(() => {
        const foundDetails = blog.find(service => service.name === blogSlug)
        setDetail(foundDetails);
    }, [blogSlug, blog]);
    console.log(blog);

    return (
        <div>
            <Navigation />
            <Container maxWidth="lg"
                sx={ {
                    py: 7
                } }>
                <Grid>
                    <Grid container spacing={ 2 }>

                        <Grid item xs={ 12 } sm={ 6 } md={ 9 } >
                            <BlogDetailCard
                                detail={ detail }
                            />

                        </Grid>

                        <Grid item xs={ 12 } sm={ 6 } md={ 3 } >
                            <BlogSideber />
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
            <Footer />
        </div>
    );
};

export default BlogDetails;