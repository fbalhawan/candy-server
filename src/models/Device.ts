import { IDevice, IDeviceModel } from "./interfaces/IDevice";
import mongoose, { Schema } from 'mongoose';

const DeviceSchema: Schema = new Schema<IDevice>({
  deviceId: { type: String, required: true, unique: true },
  alias: { type: String, required: true },
  location: { type: String, required: false },
  ping: { type: Date, required: false, default: null },
  status: { type: String, required: false, enum: ['active', 'inactive', 'maintenance'], default: 'active' },
  data: [{
    timestamp: { type: Date, default: Date.now },
    value: { type: Number }
  }]
});

DeviceSchema.statics.searchDevices = async function (filters: any, pageNumber: number = 1, pageSize: number = 10) {

  const totalCount = await this.countDocuments(filters);
  const totalPages = Math.ceil(totalCount / pageSize);

  const devices = await this.find(filters)
    .skip((pageNumber - 1) * pageSize)
    .limit(pageSize);

  return {
    devices,
    pageNumber,
    totalPages
  }
}



export default mongoose.model<IDevice, IDeviceModel>('Device', DeviceSchema);