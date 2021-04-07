const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        type: String,
        default: ''
    },
    email: {
        type: String,
        default: ''
    },
    storefront: {
        type: String,
        default: ''
    },
    marketplace: {
        type: String,
        default: ''
    },
    category: {
        type: String,
        default: ''
    },
    no_of_skus: {
        type: String,
        default: ''
    },
    message: {
        type: String,
        deafult: ''
    },
    input: {
        impressions: {
            type: String,
            default: ''
        },
        clicks: {
            type: String,
            default: ''
        },
        cpc: {
            type: String,
            default: ''
        },
        ctr: {
            type: String,
            default: ''
        },
        advertising_spend: {
            type: String,
            default: ''
        },
        acos: {
            type: String,
            default: ''
        },
        advertising_order: {
            type: String,
            default: ''
        },
        total_units: {
            type: String,
            default: ''
        },
        total_sales: {
            type: String,
            default: ''
        }
    },
})

module.exports = User = mongoose.model('User', UserSchema)