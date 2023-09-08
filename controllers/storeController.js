const db = require('../models/index');

const getAllStoresByOwnerId = async (req, res) => {
    try {
        const storeOwnerId = req.params.id;

        const stores = await db.Store.findAll({
            where: {
                storeOwnerId,
            },
        });
        return res.status(200).json({
            success: true,
            message: 'Get all stores by store owner successfully',
            data: stores,
        });
    } catch (error) {
        return res.status(400).json({
            success: false,
            message: error.message,
            data: error,
        });
    }
}

module.exports = { getAllStoresByOwnerId }