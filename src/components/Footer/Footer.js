import React from 'react';
import Footerfonts from './Footerfonts/Footerfonts';
import './Footer.css'
import { Button, Container, Grid, Typography } from '@mui/material';

const Footer = () => {

    return (

        <Container className="footer-bg" sx={{ marginTop: "150px" }}>
            <Grid container spacing={{ xs: 2, sm: 3, md: 4 }} columns={{ xs: 4, sm: 8, md: 8 }} sx={{ marginBottom: "50px" }}>
                <Grid xs={2} sm={2} md={2}>
                    <Typography variant="h6" sx={{ color: "black", fontWeight: "600" }}>
                        ABOUT
                    </Typography> <br />
                    <Typography variant="p" sx={{ fontSize: "15px", color: "gray" }}>
                        Our Story <br /> <br />
                        Careers <br /> <br />
                        Investors <br /> <br />
                        CA Privacy Notice <br /> <br />
                        Connect with GoPro
                    </Typography>
                </Grid>
                <Grid xs={2} sm={2} md={2}>
                    <Typography variant="h6" sx={{ color: "black", fontWeight: "600" }}>
                        SHOP
                    </Typography> <br />
                    <Typography variant="p" sx={{ fontSize: "15px", color: "gray" }}>
                        Cameras <br /> <br />
                        Apps <br /> <br />
                        Accessories <br /> <br />
                        LifeStyle Gear <br /> <br />
                        GoPro Subscription <br /> <br />
                        Distributors <br /> <br />
                        Supplier Responsibility
                    </Typography>
                </Grid>
                <Grid xs={2} sm={2} md={2}>
                    <Typography variant="h6" sx={{ color: "black", fontWeight: "600" }}>
                        COMMUNITY
                    </Typography> <br />
                    <Typography variant="p" sx={{ fontSize: "15px", color: "gray" }}>
                        Latest News <br /> <br />
                        Events <br /> <br />
                        Pros <br /> <br />
                        In The Wild <br /> <br />
                        Heroes <br /> <br />
                        Tips & Tricks <br /> <br />

                    </Typography>
                </Grid>
                <Grid xs={2} sm={2} md={2}>
                    <Typography variant="h6" sx={{ color: "black", fontWeight: "600" }}>
                        Our Address
                    </Typography> <br />
                    <Typography variant="p" sx={{ fontSize: "15px", color: "gray" }}>
                        New Work -101010 Hudson <br /> Yards
                        <br /> <br /> <br />
                        <Footerfonts></Footerfonts>
                        <Button variant="contained" style={{ backgroundColor: 'Black', marginTop: "10px", color: "White" }}>+88000000000</Button>
                    </Typography>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Footer;