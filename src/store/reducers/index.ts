// store/reducers/index.ts
import { combineReducers } from '@reduxjs/toolkit';
import counterReducer from './counterReducer';
import salesByRegionReducer from './salesByRegion.reducer';
import salesByCategoryReducer from './salesByCategory.reducer';
import ageCountReducer from './ageCount.reducer';
import occupationReducer from './occupation.reducer';
import genderChartReducer from './genderChart.reducer';
import salesVSTargetReducer from './salesVSTarget.reducer';
import topProductsReducer from './topProducts.reducer';
import profitAndRevenueReducer from './profitAndRevenue.reducer';
// Import your reducers here
// Example:
// import counterReducer from './counter';

const rootReducer = combineReducers({
  // Add your reducers here
  // Example:
  // counter: counterReducer,
  counter: counterReducer,
  salesByRegion: salesByRegionReducer,
  salesByCategory: salesByCategoryReducer,
  ageCount: ageCountReducer,
  occupationData: occupationReducer,
  genderChart: genderChartReducer,
  salesVSTarget: salesVSTargetReducer,
  topProductsSell: topProductsReducer,
  profitAndRevenue: profitAndRevenueReducer
});

export default rootReducer;
