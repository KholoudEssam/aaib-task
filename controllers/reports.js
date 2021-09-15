const AppError = require('../utils/AppError');
const catchAsync = require('../utils/catchAsync');
const Report = require('../models/report');

exports.getReports = catchAsync(async (req, res, next) => {
    const data = await Report.find({ state: 'OPEN' }).select({
        id: 1,
        state: 1,
        'payload.reportType': 1,
        'payload.message': 1,
        _id: 0,
    });

    res.send(data);
});

exports.resolveReport = catchAsync(async (req, res, next) => {
    const { id } = req.params;
    const data = await Report.findOne({ id });
    if (!data) return next(new AppError('Invalid id', 400));

    await Report.updateOne({ id: id }, { $set: { state: 'RESOLVED' } });

    res.send({ message: 'resolved' });
});

exports.blockReport = catchAsync(async (req, res, next) => {
    const { id } = req.params;
    const data = await Report.findOne({ id });
    if (!data) return next(new AppError('Invalid id', 400));

    await Report.updateOne({ id: id }, { $set: { state: 'BLOCKED' } });

    res.send({ message: 'blocked' });
});
