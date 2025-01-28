const mongoose = require("mongoose");
const connectToDatabase = async () => {
    try {
        await mongoose.connect(
            "mongodb+srv://pamuda:lWD2E0IImI9fzMWO@slttest.ic1j2.mongodb.net/People",
        {
            //userNewUrParser: true,
            useUnifiedTopology: true,
        }
        );
        console.log("Connected  to MongoDB Successfully!");
    }
    catch (error) {
        console.error("Error Connecting to Mongodb:", error);
        process.exit(1);
    }
};

module.exports = connectToDatabase;