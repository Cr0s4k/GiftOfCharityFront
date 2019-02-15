import validator from 'validator'

class Utils {
    static check = (input, newValue, fields) => {
        if(input === 'name') return Utils.checkName(newValue);
        else if (input === 'email') return Utils.checkEmail(newValue);
        else if(input === 'password') return Utils.checkPassword(newValue);
        else if(input === 'repeatedPassword') return Utils.checkRepeatedPassword(newValue, fields.password.value)
    };

    static checkName = name => ({
        name: {
            value: name,
            error: !validator.isAscii(name)
                || !validator.isLength(name, {min: 1, max: 50})
        }
    });

    static checkEmail = email => ({
        email: {
            value: email,
            error: !validator.isEmail(email)
        }
    });

    static checkPassword = pass => ({
        password: {
            value: pass,
            error: !validator.isAscii(pass)
                || !validator.isLength(pass, {min: 5, max: 50})
        }
    });

    static checkRepeatedPassword = (repeatedPass, pass) => ({
        repeatedPassword: {
            value: repeatedPass,
            error: !validator.isAscii(repeatedPass)
                || !validator.isLength(repeatedPass, {min: 5, max: 50})
                || pass !== repeatedPass
        }
    });

    static errorInFields = fields => {
        return Object.entries(fields).find(field => field[1].error) !== undefined
    }
}

export default Utils;