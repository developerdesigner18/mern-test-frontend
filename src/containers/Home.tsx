import React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { SalesByRegion } from '../components/SalesByRegion';
import { SalesByCategory } from '../components/SalesByCategory';
import { AgeCount } from '../components/AgeCount';
import { OccupationData } from '../components/OccupationData';
import { GenderChart } from '../components/GenderChart';
import { SalesVSTarget } from '../components/SalesVSTarget';
import { TopProductSell } from '../components/TopProductSell';
import { Header } from '../components/Header';
import { ProfitAndRevenue } from '../components/ProfitAndRevenue';
import { SalesConversionRate } from '../components/SalesConversionRate';

export const Home = (props: any) => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  return (
    <div>
      <Header />
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <Paper>
              <h2>Sales By Region</h2>
              <SalesByRegion />
            </Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper>
              <h2>Sales By Category</h2>
              <SalesByCategory />
            </Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper>
              <h2>Age Count</h2>
              <AgeCount />
            </Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper>
              <h2>Occupation Data</h2>
              <OccupationData />
            </Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper>
              <h2>Gender Data</h2>
              <GenderChart />
            </Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper>
              <h2>Sales VS Target Data</h2>
              <SalesVSTarget />
            </Paper>
          </Grid>
          <Grid item xs={8}>
            <Paper>
              <h2>Top 10 Products</h2>
              <TopProductSell />
            </Paper>
          </Grid>
          <Grid item xs={8}>
            <Paper>
              <h2>Profit And Revenue</h2>
              <ProfitAndRevenue />
            </Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper>
              <h2>
                Sales Conversion Rate:(%) <sub>(static)</sub>
              </h2>
              <SalesConversionRate />
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};
