const jwt = require ("jsonwebtoken")
const secret = "$Rutveek1234@$";

//creating tokens
function setUser(user) {
    return jwt.sign(
        {
            _id: user._id,
            email: user.email,
        },
        secret,
        { expiresIn: "1h" }
    );
}

//verfying token from the browser
function getUser(token) {
    try {
        if (!token) return null;
        return jwt.verify(token, secret);
    } catch (err) {
        return null;
    }
}

module.exports = {
    setUser,
    getUser
}