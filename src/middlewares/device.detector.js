import det from 'device-detector-js'

const deviceDetector = new det();

export const detector = (req, res, next) => {
    const userAgent = req.headers(['user-agent'] || '');
    const device = deviceDetector.parse(userAgent);
    req.deviceInfo = {
        client_type: device?.client?.type,
        client_name: device?.client.name,
        os: device?.os?.name,
        device_type: device?.device?.type,
        device_brand: device?.device?.brand,
        device_model: device?.device?.model,

    }
    next()
};