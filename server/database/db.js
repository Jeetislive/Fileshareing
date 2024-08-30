import mongoose from "mongoose";

const DBConnection = async () => {
    try {
        await mongoose.connect(process.env.DB_URL || 'mongodb://localhost:27017/File-Shareing-App', { useNewUrlParser: true});
        console.log('Connected to MongoDB'); 
        
    } catch (error) {
        console.error('Database connection failed:', error);
    }
}

export default DBConnection;