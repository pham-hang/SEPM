const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');  // create middleware object
const cors = require('cors');

const connectDB = require('./config/db');

// Load environment variables
dotenv.config({ path: './config/config.env'});

connectDB()

// Route files
const products = require('./routes/products')

const users =  require('./routes/users')

const reviews =  require('./routes/reviews')

// Initialize app variable
const app = express();
app.use(cors())
// Create body parser
app.use(express.json())

// Checking the middleware if in the development mode
if (process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'))
};

//Mount router
app.use('/api/v1/products',products);

app.use('/api/v1/users', users);

app.use('/api/v1/reviews', reviews);

const PORT = process.env.PORT || 5000;

const server = app.listen(
    PORT, 
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
)

// Handle: The unhandle promise rejections (Close the server if there is any error)
process.on('unhandledRejection', (err,promise)=>{
    console.log(`Error: ${err.message}`);
    // Close the server and exit the process
    server.close(()=>process.exit(1))
})
