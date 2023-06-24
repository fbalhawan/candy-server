import { Request, Response } from 'express';
import Device from '../models/Device';
import { randomUUID } from 'crypto';

const getDevice = (req: Request, res: Response) => {
    const id = req.params.id;
    res.json({
        device: "device"
    })
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


export { getDevice, postDevice };
