let assert = require("assert");
let TaxiTrips = require("../taxi-trips");
const pg = require("pg");
const Pool = pg.Pool;

const connectionString = process.env.DATABASE_URL || 'postgresql://codex:codex123@localhost:5432/my_taxi_trip';

const pool = new Pool({
    connectionString
});

describe('Taxi Trips', function () {

    beforeEach(async function () {
        // await pool.query(`delete from routes;`);
        // await pool.query(`delete from taxi;`);
        // await pool.query(`delete from trip;`);
    });

    it.skip('should find how many trips all the taxis made', async function () {

        const taxiTrips = TaxiTrips(pool);


        assert.equal(0, taxiTrips.totalTripCount());


    });

    it('should find all the regions', async function () {

        const taxiTrips = TaxiTrips(pool);

        await taxiTrips.findAllRegions();

        assert.deepEqual([{ id: 1, name: 'Durban' },
        { id: 2, name: 'Cape Town' },
        { id: 3, name: 'Gauteng' }]
            , await taxiTrips.findAllRegions());

    });

    it('should find all the taxis for a region', async function () {
        const taxiTrips = TaxiTrips(pool);

        await taxiTrips.findTaxisForRegion('Durban');
        await taxiTrips.findTaxisForRegion('Cape Town');
        await taxiTrips.findTaxisForRegion('Gauteng');

        assert.deepEqual([{ id: 11, reg_number: 'NUZ 654-098', region_name: 'Durban' },
        { id: 12, reg_number: 'NU 687-008', region_name: 'Durban' }]
            , await taxiTrips.findTaxisForRegion('Durban'));

        assert.deepEqual([{ id: 8, reg_number: 'CA 123-09', region_name: 'Cape Town' },
        { id: 9, reg_number: 'CY 186-076', region_name: 'Cape Town' }, { id: 10, reg_number: 'CA 199-999', region_name: 'Cape Town' }], await taxiTrips.findTaxisForRegion('Cape Town'));
        
        assert.deepEqual([{ id: 13, reg_number: 'GP 674-090', region_name: 'Gauteng' },
            { id: 14, reg_number: 'GP 777-888', region_name: 'Gauteng' }], await taxiTrips.findTaxisForRegion('Gauteng'));

    })

    it.skip('should find all the trips for a reg number', async function () {

        const taxiTrips = TaxiTrips(pool);

        assert.deepStrictEqual([], taxiTrips.findTripsByRegNumber('...'));
        assert.deepStrictEqual([], taxiTrips.findTripsByRegNumber('***'));

    });

    it.skip('should find the total number of trips by region', async function () {

        const taxiTrips = TaxiTrips(pool);

        assert.deepStrictEqual([], taxiTrips.findTripsByRegion('Cape Town').length);
        assert.deepStrictEqual([], taxiTrips.findTripsByRegion('Gauteng').length);
        assert.deepStrictEqual([], taxiTrips.findTripsByRegion('Gauteng').length);

    });

    it.skip('find the total income for a given reg number', async function () {

        const taxiTrips = TaxiTrips(pool);
        assert.deepStrictEqual(0, taxiTrips.findIncomeByRegNumber('...').length);
        assert.deepStrictEqual(0, taxiTrips.findIncomeByRegNumber('***').length);

    });

    it.skip('find the total income for each taxi', async function () {

        const taxiTrips = TaxiTrips(pool);
        assert.deepStrictEqual([{}, {}, {}], taxiTrips.findTotalIncomePerTaxi());

    });

    it.skip('find the total income for all the taxis', async function () {
        const taxiTrips = TaxiTrips(pool);
        assert.deepStrictEqual(0.00, taxiTrips.findTotalIncome());
    });


    after(function () {
        pool.end();
    });

});