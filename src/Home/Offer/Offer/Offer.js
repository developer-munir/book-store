
import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import './Offer.css';
import { Grid } from '@mui/material';
import img from '../../../asete/asset 17.png'
import TimeCount from '../TimeCount/TimeCount';
import OfferCard from "../OfferCard/OfferCard";
import { Link } from 'react-router-dom';

const Offer = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/offer/${30}`)
      .then((res) => res.json())
      .then((data) => {
        setBooks(data);
      });
  }, []);

  const handelOffer = (offer) => {
    fetch(`http://localhost:5000/offer/${offer}`)
      .then((res) => res.json())
      .then((data) => {
        setBooks(data);
      });
  };

  return (
    <Container className="offer mt-5 mb-5" maxWidth="xl">
      <Box sx={{ width: "100%" }}>
        <Grid container spacing={2}>
          <Grid item sx={12} sm={4} xl={4}>
            <Box className="mega-offer">
              <div className="m-6 md:m-2">
                <img className="w-40 md:w-60 m-auto my-8" src={img} alt="" />
                <p className="md:text-xl text-base duration-300">
                  Time Limited Mega
                </p>
                <h1
                  className="text-[#fc3333] text-2xl md:text-[30px] lg:text-2xl  
                   xl:text-3xl font-semibold duration-300"
                >
                  50% Discount $500
                </h1>
                <div
                  className="flex justify-between text-[12px] xl:px-16 lg:px-10  
                  md:text-[13px] md:px-2 font-semibold"
                >
                  <p>Already Sold:01</p>
                  <p>Available:20</p>
                </div>
                <h1 className="text-xl  md:text-[19px] font-semibold my-6 lg:text-xl">
                  <span className="text-[#fc3333]">Hurry up!</span> offer end
                  in:
                </h1>
                <TimeCount></TimeCount>
              </div>
            </Box>
          </Grid>
          <Grid item sx={12} sm={8} xl={8}>
            <ul className="flex justify-center md:justify-end lg:justify-end offer-ul no-underline">
              <li>
                <Link onClick={() => handelOffer(30)} className="text-gray-60">
                  30%Offer
                </Link>
              </li>
              <li className='ml-5'>
                <Link onClick={() => handelOffer(40)} className=" text-gray-600">
                  45%Offer
                </Link>
              </li>
              <li className='ml-5'>
                <Link onClick={() => handelOffer(60)} className=" text-gray-600">
                  60%Offer
                </Link>
              </li>
            </ul>
            {
              books.length !== 0 ?
                <Box
                  className="flex justify-center md:justify-between 
              lg:justify-between mt-5"
                >
                  <Grid className="card-img" container spacing={2}>
                    {books.map((book, i) => (
                      <Grid key={i} item sx={12} sm={6} md={6} lg={4} xl={4}>
                        <OfferCard book={book} />
                      </Grid>
                    ))}
                  </Grid>
                </Box>
                :
                <div className='flex justify-center items-center h-full'>
                  <p className='text-2xl font-bold'>No Data To Show</p>
                </div>
            }
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Offer;
