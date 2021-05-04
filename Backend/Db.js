import mongoose from "mongoose";

const connectdb = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    });
    console.log("_____________________________________");
 
 console.log(connection.connections[0].host.cyan.underline);
  } 
  
  
  
  catch (error) {
    console.error(`Error : ${error.message}`.red.bold);
    process.exit(1);
  }
};

export default connectdb;
