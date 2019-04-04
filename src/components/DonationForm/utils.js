import validator from 'validator'

class Utils {
    static check = (input, newValue, fields) => {
        if(input === 'address') return {
            address: {
                value: newValue,
                error: Utils.checkStandard(newValue)
            }
        };
        else if (input === 'city') return {
            city: {
                value: newValue,
                error: Utils.checkStandard(newValue)
            }
        };
        else if (input === 'province') return {
            province: {
                value: newValue,
                error: Utils.checkStandard(newValue)
            }
        };
        else if(input === 'country') return {
            country: {
                value: newValue,
                error: Utils.checkStandard(newValue)
            }
        };
        else if(input === 'postcode') return {
            postcode: {
                value: newValue,
                error: Utils.checkPostcode(newValue)
            }
        };
        else if(input === 'email') return {
            email: {
                value: newValue,
                error: Utils.checkEmail(newValue)
            }
        };
        else if(input === 'amount') return {
            amount: {
                value: parseInt(newValue),
                error: Utils.checkQuantity(newValue)
            }
        };
        else if (input === 'donorName') return {
            donorName: {
                value: newValue,
                error: Utils.checkStandard(newValue)
            }
        };
        else if (input === 'receiverName') return {
            receiverName: {
                value: newValue,
                error: Utils.checkStandard(newValue)
            }
        };
    };

    static checkStandard = text => {
        return !validator.isAscii(text)
                || !validator.isLength(text, {min: 1, max: 100})
    };

    static checkEmail = email => {
        return !validator.isEmail(email)
    };

    static checkPostcode = postcode => {
        return !validator.isNumeric(postcode)
    };

    static checkQuantity = quantity => {
        return !validator.isNumeric(quantity) || quantity < 1 || quantity > 9999999 || !validator.isInt(quantity)
    };

    static errorOrEmptyFields = fields => {
        return Object.entries(fields).find(field => field[1].error || field[1].value === '') !== undefined
    };
}

export default Utils;