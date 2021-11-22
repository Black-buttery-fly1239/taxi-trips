module.exports = function TaxiTrips(pool) {

    async function totalTripCount(taxiId, routeId) {
        var route_id = await routeSelectId(routeId)
        var taxi_id = await taxiSelectId(taxiId)
        var totalResult = await pool.query('select sum(taxis) from trip where taxiId = $1', [taxi_id, route_id])
        return totalResult.rows

    }

    async function taxiSelectId() {

        var fruitId = await pool.query("select * from taxi");
        return fruitId.rows;

    }

    async function routeSelectId() {
        var routeId = await pool.query("select id from routes where id = $1");
        return routeId.rows.id;

    }

    async function findAllRegions() {
        //console.log(await pool.query('select * from region'));
        var allRegions = await pool.query("select * from region");
        return allRegions.rows
    };

    async function findTaxisForRegion(region_name) {
        console.log(region_name)
        const regions = await pool.query('select * from taxi where region_name = $1', [region_name])
        return regions.rows

    }

    async function findTripsByRegNumber(reg_number) {

    }

    async function findTripsByRegion() {

    }

    async function findIncomeByRegNumber() {

    }

    async function findTotalIncomePerTaxi() {

    }

    async function findTotalIncome() {

    }

    async function findTotalIncomeByRegion() {

    }

    return {
        totalTripCount,
        findAllRegions,
        findTaxisForRegion,
        findTripsByRegNumber,
        findTripsByRegion,
        findIncomeByRegNumber,
        findTotalIncomePerTaxi,
        findTotalIncome,
        findTotalIncomeByRegion,
        taxiSelectId,
        routeSelectId


    }

}