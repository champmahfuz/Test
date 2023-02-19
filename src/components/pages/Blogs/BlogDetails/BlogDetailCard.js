import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { Box } from '@mui/system';

const BlogDetailCard = (props) => {
    const { detail } = props;
    return (
        <Box sx={ { py: 7 } }>
            <Card sx={ {} }>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="340"
                        image={ detail?.img }
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            { detail?.name }
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            { detail?.description }
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                        Share
                    </Button>
                </CardActions>
            </Card>
        </Box>
    );
};

export default BlogDetailCard;