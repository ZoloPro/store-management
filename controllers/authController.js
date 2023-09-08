const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const db = require('../models/index');


const storeOwnerRegister = async (req, res) => {
    try {
        const { name, phone, email, birthdate, gender, password } = req.body;

        const salt = await bcrypt.genSaltSync(10);
        const hashedPassword = await bcrypt.hashSync(password, salt);

        const storeOwner = await db.StoreOwner.create({ name, phone, email, birthdate, gender, password: hashedPassword });

        delete storeOwner.dataValues.password;

        return res.status(200).json({
            success: true,
            message: 'Store ower register account successfully',
            data: storeOwner,
        });
    } catch (error) {
        return res.status(400).json({
            success: false,
            message: error.message,
            data: error,
        });
    }
}

const storeOwnerLogin = async (req, res) => {
    try {
        const { email, password } = req.body;

        let storeOwner = await StoreOwner.findAll({
            where: {
                email,
            }
        });

        if (storeOwner.length === 0) {
            return res.status(400).json({
                success: false,
                message: 'Email not found',
                data: {},
            })
        }

        storeOwner = storeOwner[0];

        const isPasswordCorrect = await bcrypt.compareSync(password, storeOwner.password);
        if (!isPasswordCorrect) {
            return res.status(400).json({
                success: false,
                message: 'Password is incorrect',
                data: {},
            })
        }

        const isVerified = storeOwner.emailVerifiedAt ? true : false;
        if (!isVerified) {
            return res.status(400).json({
                success: false,
                message: 'Unverified email',
                data: {},
            })
        }

        const token = await jwt.sign({
            exp: Math.floor(Date.now() / 1000) + (60 * 60), //Expires in 1 hourse
            data: storeOwner,
        }, process.env.JWT_SECRET);

        return res.status(200).json({
            success: true,
            message: 'Login successfully',
            data: { access_token: token },
        });
    } catch (error) {
        return res.status(400).json({
            success: false,
            message: error.message,
            data: error,
        });
    }
}

module.exports = { storeOwnerRegister, storeOwnerLogin };