import mongoose, { Document } from 'mongoose';

interface IDevice extends Document {
  deviceId: string;
  alias: string;
  location: string;
  ping: Date;
  status: string;
  data: Array<{
    timestamp: Date;
    value: number;
  }>;
}

export default IDevice;