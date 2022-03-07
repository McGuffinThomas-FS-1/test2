const { application } = require("express");
const express = require("express");
require("dotenv").config();
const app = express();

app.get("/", (req, res, next) => {
    res.json({
        message: "Using GET /",
        metadata: {
            method: req.method,
            port: 4000,
            host: "localhost:4000"
        }
    });
});

// post
app.post("/", (req, res, next) => {
    res.json({
        message: "Using POST /",
        metadata: {
            method: req.method,
            port: 4000,
            host: "localhost:4000"
        }
    });
});

// patch
app.patch("/", (req, res, next) => {
    res.json({
        message: "Using PATCH /",
        metadata: {
            method: req.method,
            port: 4000,
            host: "localhost:4000"    
        }
    });
});

// delete
app.delete("/", (req, res, next) => {
    res.json({
        message: "Using DELETE /",
        metadata: {
            method: req.method,
            port: 4000,
            host: "localhost:4000"   
        }
    });
});

/* middleware modules for error handling

app.use((req, res, next) => {
    res.json({
        name: "Tom", 
        course:"WDV353"
    })
})
*/

app.use((req, res, next) => {
    const error = new Error("NOT FOUND!!!")
    error.status = 404;
    next(error);
});

// middleware to send error nicely

app.use((error, req, res, next) => {
    res.status(error.status || 500).json({
        error: {
            message: error.message, 
            status: error.status,
            method: req.method
        }
    });
});


app.listen(process.env.port, () => console.log(`Starting server on port ${process.env.port}`))