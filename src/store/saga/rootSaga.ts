import { all } from 'redux-saga/effects';
import { watchDecrementAsync, watchIncrementAsync } from './counterSaga';
import { watchGetSalesByRegion } from './salesByRegionSaga';
import { watchGetSalesByCategory } from './salesByCategory';
import { watchGetAgeCount } from './ageCountSaga';
import { watchGetOccupationData } from './occupationSaga';
import { watchGetGenderChartData } from './genderChartSaga';
import { watchGetSalesVSTargetData } from './salesVSTargetSaga';
// Import your sagas here
// Example:
// import { watchIncrementAsync } from './counterSaga';

function* rootSaga() {
    // Add your sagas here
    // Example:
    // yield all([watchIncrementAsync()]);
    yield all([watchIncrementAsync(), watchDecrementAsync()]);
    yield all([watchGetSalesByRegion()])
    yield all([watchGetSalesByCategory()])
    yield all([watchGetAgeCount()])
    yield all([watchGetOccupationData()])
    yield all([watchGetGenderChartData()])
    yield all([watchGetSalesVSTargetData()])
}

export default rootSaga;