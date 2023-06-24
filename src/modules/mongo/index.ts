import mongoose, { ConnectOptions } from 'mongoose';

class MongoClient {
  private static instance: MongoClient;
  private connectionString: string;
  private options: ConnectOptions;
  
  private constructor(connectionString: string, options?: ConnectOptions) {
    this.connectionString = connectionString;
    this.options = options || {};
  }

  public static getInstance(connectionString: string, options?: ConnectOptions): MongoClient {
    if (!MongoClient.instance) {
        MongoClient.instance = new MongoClient(connectionString, options);
    }
    return MongoClient.instance;
  }

  public async connect(): Promise<typeof mongoose> {
    try {
      const connection = await mongoose.connect(this.connectionString, this.options);
      console.log("connection: ",connection);
      console.log("Successfully connected to MongoDB.");
      return connection;
    } catch (error) {
      console.error("Error connecting to database: ", error);
      throw error;
    }
  }
}

export default MongoClient;
