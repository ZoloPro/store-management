const db = require('../models/index');

const addOfferJob = async (req, res) => {
    try {
        const { storeId, freelancerId, type } = req.body;

        const jobRequest = await db.JobRequest.create({
            storeId,
            freelancerId,
            type: 1,
            status: -1,
        });

        return res.status(200).json({
            success: true,
            message: 'Created new job request successfully',
            data: jobRequest,
        });
    } catch (error) {
        return res.status(400).json({
            success: false,
            message: error.message,
            data: error,
        });
    }
}

const responseOfferJob = async (req, res) => {
    try {
        const { status } = req.body;

        const jobRequest = await db.JobRequest.findByPk(req.params.id);

        if(!jobRequest) {
            return res.status(400).json({
                success: false,
                message: 'Job request not found',
                data: {},
            });
        }

        jobRequest.update({ status });

        return res.status(200).json({
            success: true,
            message: 'Response successfully',
            data: jobRequest,
        });
    } catch (error) {
        return res.status(400).json({
            success: false,
            message: error.message,
            data: error,
        });
    }
}

module.exports = { addOfferJob, responseOfferJob };