import mongoose, { Document, Model } from 'mongoose';

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

interface IDeviceModel extends Model<IDevice>{
  searchDevices: (filters: any, pageNumber: number, pageSize: number) => Promise<IDevice[]>;
}

export {IDevice, IDeviceModel};