import React from 'react';
import { Container, Grid } from '@mui/material';
import Footer from '../../Shared/Footer/Footer';
import Blog from '../Blog/Blog';
import BlogSideber from '../BlogSidebar/BlogSidebar';
import Navbarv2 from '../../../UserFile/UserLogin/Navbar/Navbarv2';


const Blogs = () => {

    return (
        <div>
            <Navbarv2 />
            <Container maxWidth="lg"
                sx={{
                    py: 7
                }}>
                <Grid>
                    <Grid container spacing={2}>

                        <Grid item xs={12} sm={6} md={9}>
                            <Blog />
                        </Grid>

                        <Grid item xs={12} sm={6} md={3} >
                            <BlogSideber />
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
            <Footer />
        </div>
    );
};

export default Blogs;