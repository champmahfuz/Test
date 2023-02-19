import React, { useEffect, useState } from 'react';
import { Box, CardActionArea, Container, Grid, Paper } from '@mui/material';
import Navigation from '../../Shared/Navigation/Navigation';
import Footer from '../../Shared/Footer/Footer';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import BlogCard from '../BlogCard/BlogCard';


const Blog = () => {

    const [blogs, setBlog] = useState([]);
    useEffect(() => {
        fetch('Blogs.json')
            .then(res => res.json())
            .then(data => setBlog(data))
    }, []);
    console.log(blogs);
    return (
        <div>
            <Container maxWidth="lg"
                sx={ {
                    py: 7
                } }>
                <Grid>
                    <Grid container spacing={ 2 }>
                        { blogs.map((item, index) =>
                            (index === 0) && (
                                <Grid item xs={ 12 } sm={ 6 } md={ 8 } key={ item._id }>
                                    <Card sx={ {

                                    } }>

                                        <CardMedia
                                            component="img"
                                            height="170"
                                            image={ item.img }
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                                { item.name.slice(0, 50) + '...' }
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                { item.description.slice(0, 380) + '...' }
                                            </Typography>
                                        </CardContent>
                                        <CardActions>
                                            {/* <Button size="small">Share</Button> */ }
                                            {/* <Button size="small">Read More</Button> */ }
                                            {/* <Link to={ `/Blogs/${item._id}` }>Read More</Link> */ }
                                            <Link to={ `/Blogs/${item.name.replaceAll(" ", "-")}` }>Read More ...</Link>
                                        </CardActions>
                                    </Card>
                                </Grid>
                            )) }
                        { blogs.map((item, index) =>
                            (index > 0 && index < 8) && (
                                <Grid item xs={ 12 } sm={ 6 } md={ 4 }>

                                    <BlogCard
                                        item={ item }
                                        key={ item._id }
                                    />

                                </Grid>
                            )) }
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default Blog;