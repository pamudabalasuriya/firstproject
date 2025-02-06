const jwt = require("jsonwebtoken");
const express = require("express");
const router = express.Router();

router.post("/login", async(req, res) => {
    const username = req.body.userName;
    const password = req.body.password;
    const user = { name: username, password: password };

    const accessToken = jwt.sign(user, "ACCESS_TOKEN", {
        expiresIn: "10",
    });
    const refreshToken = jwt.sign(user, "Refresh_TOKEN", {
        expiresIn: "24h",
    });

    res.cookie("accessToken", accessToken, {httpOnly: true});
    res.cookie("refreshToken", refreshToken, {httpOnly: true});
    res.json({accessToken, refreshToken});
});

module.exports = router;