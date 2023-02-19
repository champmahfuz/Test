import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';


const BlogCard = (props) => {
    const { item } = props;
    return (
        <Card sx={ {} }>
            <CardMedia
                component="img"
                height="170"
                image={ item.img }
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    { item.name.slice(0, 20) + '...' }
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    { item.description.slice(0, 180) + '...' }
                </Typography>
            </CardContent>
            <CardActions>
                {/* <Button size="small">Share</Button> */ }
                {/* <Button size="small">Read More</Button> */ }
                <Link to={ `/Blogs/${item.name.replaceAll(" ", "-")}` }>Read More ...</Link>
                {/* <Link to={ `/Blogs/${item._id}` }>Read More</Link> */ }
            </CardActions>
        </Card>
    );
};

export default BlogCard;