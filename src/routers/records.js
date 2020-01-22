const router = require('express').Router();
const Record = require('../models/record')
const { validate } = require('../middleware/validate')
const schema = require('./../middleware/schemas/record');
var { responseHandler } = require("../middleware/response");



router.get('/error', (req, res) => {
    throw new ErrorHandler(500, 'Internal server error');
})
router.post('/records', [validate(schema)], async (req, res, next) => {
    try {
        const { startDate, endDate, minCount, maxCount } = req.body;
        const record = await Record.aggregate([
            {
                $project: {
                    _id: 0,
                    key: '$key',
                    createdAt: '$createdAt',
                    totalCount: { $sum: '$counts' },
                },
            },
            {
                $match: {
                    createdAt: {
                        $gt: new Date(startDate),
                        $lt: new Date(endDate),
                    },
                    totalCount: {
                        $gt: parseInt(minCount),
                        $lt: parseInt(maxCount),
                    },
                },
            }]);
        if (!record.length) {
            res.status(404);
            return next(responseHandler(1, 'Record does not exists', record));
        }
        res.status(200);
        next(responseHandler(0, 'Success', record));

    } catch (error) {
        res.status(500);
        next(responseHandler(-1, error.message));
    }
})




module.exports = router;