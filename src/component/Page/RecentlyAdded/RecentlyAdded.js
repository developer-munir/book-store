import { Box } from '@mui/material';
import React from 'react';
import { Typography } from '@mui/material';
import { Button,ButtonGroup } from '@mui/material';



const RecentlyAdded = () => {
    return (
        <div className='mt-10'>
            <div style={{ display: 'flex', justifyContent:'space-between'}}>
                <div>
                    <Typography variant="h5" component="h3">
                        Recently Added
                    </Typography>
                </div> 
                <div>
                    <ButtonGroup variant="" aria-label="outlined  button group">
                        <Button>On Sell</Button>
                        <Button>Hot Sell</Button>
                        <Button>Trend</Button>
                    </ButtonGroup>
                </div>
                
            </div>
            <Box sx={{ display: 'flex',border:'1px solid gary', gap:'8px'}}>
                <div style={{ width: '250px', border: '1px solid lightgray', padding: '20px' }}>
                    <img src="https://m.media-amazon.com/images/I/81XSeWmiPEL._AC._SR360,460.jpg" alt="" style={{ with: '200px', height: '200px' }} />
                    <Typography variant="subtitle1" gutterBottom>
                        Ghosts of The Silent Hills
                    </Typography>
                    <Typography variant="subtitle1" style={{ fontWeight: 'bolder', color: 'red' }} gutterBottom>
                       $100
                    </Typography>
                </div>
                <div style={{ width: '250px', border: '1px solid lightgray', padding: '20px' }}>
                    <img src="https://m.media-amazon.com/images/I/81XSeWmiPEL._AC._SR360,460.jpg" alt="" style={{ with: '200px', height: '200px' }} />
                    <Typography variant="subtitle1" gutterBottom>
                        Ghosts of The Silent Hills
                    </Typography>
                    <Typography variant="subtitle1" style={{ fontWeight: 'bolder', color: 'red' }} gutterBottom>
                       $100
                    </Typography>
                </div>
                <div style={{ width: '250px', border: '1px solid lightgray', padding: '20px' }}>
                    <img src="https://m.media-amazon.com/images/I/81XSeWmiPEL._AC._SR360,460.jpg" alt="" style={{ with: '200px', height: '200px' }} />
                    <Typography variant="subtitle1" gutterBottom>
                        Ghosts of The Silent Hills
                    </Typography>
                    <Typography variant="subtitle1" style={{ fontWeight: 'bolder', color: 'red' }} gutterBottom>
                       $100
                    </Typography>
                </div>
                <div style={{ width: '250px', border: '1px solid lightgray', padding: '20px' }}>
                    <img src="https://m.media-amazon.com/images/I/81XSeWmiPEL._AC._SR360,460.jpg" alt="" style={{ with: '200px', height: '200px' }} />
                    <Typography variant="subtitle1" gutterBottom>
                        Ghosts of The Silent Hills
                    </Typography>
                    <Typography variant="subtitle1" style={{ fontWeight: 'bolder', color: 'red' }} gutterBottom>
                       $100
                    </Typography>
                </div>
                <div style={{ width: '250px', border: '1px solid lightgray', padding: '20px' }}>
                    <img src="https://m.media-amazon.com/images/I/81XSeWmiPEL._AC._SR360,460.jpg" alt="" style={{ with: '200px', height: '200px' }} />
                    <Typography variant="subtitle1" gutterBottom>
                        Ghosts of The Silent Hills
                    </Typography>
                    <Typography variant="subtitle1" style={{ fontWeight: 'bolder', color: 'red' }} gutterBottom>
                       $100
                    </Typography>
                </div>
                <div style={{ width: '250px', border: '1px solid lightgray', padding: '20px' }}>
                    <img src="https://m.media-amazon.com/images/I/81XSeWmiPEL._AC._SR360,460.jpg" alt="" style={{ with: '200px', height: '200px' }} />
                    <Typography variant="subtitle1" gutterBottom>
                        Ghosts of The Silent Hills
                    </Typography>
                    <Typography variant="subtitle1" style={{ fontWeight: 'bolder',color:'red'}} gutterBottom>
                       $100
                    </Typography>
                </div>
                
            </Box>
        </div>
        
    );
};

export default RecentlyAdded;