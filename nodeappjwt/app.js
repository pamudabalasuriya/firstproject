router.post("/login", async(req, res) => {
    const username = req.body.userName;
    const password = req.body.password;
    const user = { name: username, password: password};

    const accessToken = jwt.sign(user, "ACCESS_TOKEN". {
        expiresIn: "10",
    });
    const refreshToken = jwt.sign(user, "Refresh_TOKEN", {
        expiresIn: "24h",
    });

    res.cookie("accessToken", accessToken, {httpOnly: true});
    res.cookie("refreshToken", refreshToken, {httpOnly: true});
    res.send({accessToken, refreshToken});
});


const jwt = require("jsonwebtoken");

module.exports = function authenticateToken(req, res, next) {
    if (
        req.headers.authorization &&
        req.headers.authorization.startsWith("bearer")
    ) {
        const token = req.header.authorization.split(" ")[1];
        if (token == null) res.sendStatus(401);
        jwt.verify(token, process.env.TOKEN_KEY, (err, user) => {
            if (err) res.sendStatus(403);
            req.user = user;
            next();
        }); 
    } else res.sendStatus(401);
};