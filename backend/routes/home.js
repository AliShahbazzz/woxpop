const express = require('express');
const router = express.Router();
const User = require('../models/User');
const calculate = require('../core/calculate')

router.get('/', (req, res) => {
    User.find().then((items) => res.json(items))
})

router.delete('/', (req, res) => {
    User.find().then((items) => User.collection.deleteMany({}), res.json({ status: "removed" }))
        .catch((err) => console.log(err))
})


router.post('/', (req, res) => {
    const { body } = req;
    const {
        name,
        email,
        storefront
    } = body;

    let newUser = new User();
    newUser.name = name
    newUser.email = email
    newUser.storefront = storefront
    newUser.save(() => {
        return res.json({
            success: true,
            message: 'Created',
            id: newUser._id
        })
    })
})
router.post('/addOptional', (req, res) => {
    const { body } = req;
    const {
        id,
        marketplace,
        category,
        no_of_skus,
    } = body;
    if (id !== '') {

        User.findByIdAndUpdate(id, {
            marketplace: marketplace,
            category: category,
            no_of_skus: no_of_skus,
        })
            .then(res.json({
                success: true,
                message: 'Updated',
                id: id
            }))
            .catch(err => res.status(404).json({ success: false, error: err }))
    }
})
router.post('/addDetails', (req, res) => {
    const { body } = req;
    const {
        id,
        impressions,
        clicks,
        cpc,
        ctr,
        advertising_spend,
        acos,
        advertising_order,
        total_units,
        total_sales
    } = body;
    User.findByIdAndUpdate(id, {
        input: {
            impressions: impressions,
            clicks: clicks,
            cpc: cpc,
            ctr: ctr,
            advertising_spend: advertising_spend,
            acos: acos,
            advertising_order: advertising_order,
            total_units: total_units,
            total_sales: total_sales
        }
    })
        .then(res.json({
            success: true,
            message: 'Updated',
            result: calculate(body)
        }))
        .catch(err => res.status(404).json({ success: false, error: err }))
})

router.post('/addMessage', (req, res) => {
    const { body } = req;
    const {
        id,
        message,
    } = body;
    if (id !== '') {

        User.findByIdAndUpdate(id, {
            message: message,
        })
            .then(res.json({
                success: true,
                message: 'Updated',
                id: id
            }))
            .catch(err => res.status(404).json({ success: false, error: err }))
    }
})

router.post('/contact', (req, res) => {
    const { body } = req;
    const {
        name,
        email,
        message,
    } = body;

    let newUser = new User();
    newUser.name = name
    newUser.email = email
    newUser.message = message
    newUser.save(() => {
        return res.json({
            success: true,
            message: 'Created',
        })
    })
})

module.exports = router;