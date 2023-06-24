import IDevice from "./interfaces/IDevice";
import mongoose, { Schema } from 'mongoose';

const DeviceSchema: Schema = new Schema({
    deviceId: { type: String, required: true, unique: true },
    alias: {type: String, required: true},
    location: { type: String, required: false },
    ping: {type: Date, required: false, default: null},
    status: { type: String, required: false, enum: ['active', 'inactive', 'maintenance'], default: 'active' },
    data: [{
      timestamp: { type: Date, default: Date.now },
      value: { type: Number }
    }]
  });
  
  export default mongoose.model<IDevice>('Device', DeviceSchema);