import React, { useEffect } from 'react';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';
import { useDispatch, useSelector } from 'react-redux';
import { getAgeCount } from '../store/reducers/ageCount.reducer';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);
export const AgeCount = (props: any) => {
  const dispatch = useDispatch();
  const { data } = useSelector((state: any) => state.ageCount);
  const redarData = {
    labels: Object.keys(data),
    datasets: [
      {
        label: '# of Votes',
        data: Object.values(data),
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
    ],
  };

  useEffect(() => {
    dispatch<any>(getAgeCount());
  }, []);

  return (
    <div style={{ height: '500px' }}>
      <Radar style={{ width: '100%', height: '100%' }} data={redarData} />;
    </div>
  );
};
