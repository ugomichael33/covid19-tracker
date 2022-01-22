import React from 'react';
import { Card, CardContent, Typography } from '@mui/material'

const InfoBox = ({ title, cases, total}) => {
  return (
      <Card className='infoBox'>
          <CardContent>
              <Typography className='infobox__title' color='textSecondary'>{title}</Typography>
              <h2 className='infobox__cases'>{cases}</h2>
              <Typography className='infobox__total' color='textSecondary'>
                  {total} Total
              </Typography>
          </CardContent>
      </Card>
  )
};




export default InfoBox
