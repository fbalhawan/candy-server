import { Request, Response } from 'express';
import Device from '../models/Device';
import { randomUUID } from 'crypto';

const getDevices = async (req: Request, res: Response) => {
    const {pageNumber, pageSize, filters = {} } = req.body;
    
    const devices = await Device.searchDevices(filters, pageNumber, pageSize);

    res.json(devices);
}


const postDevice = async (req: Request, res: Response) => {
    const errors = [];
    const {
        deviceId,
        alias
    } = req.body;

    const _deviceId = deviceId ?? randomUUID();

    const device = new Device({
        deviceId: _deviceId,
        alias
    });

    try {
        console.log("try to save device: ",device);
        const savedDevice = await device.save();
        console.log("savedDevice: ",savedDevice);
        res.status(200).json(savedDevice);
    }
    catch (error) {
        console.error(error);
        errors.push(error);
        res.status(500).json({
            errors
        });
    }
}


export { postDevice, getDevices };
