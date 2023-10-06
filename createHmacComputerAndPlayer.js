import crypto from "crypto";

class GenerateHmac {
  constructor(param) {
    this.param = param;
  }

  getHmac(param) {
    const key = crypto.randomBytes(32);
    const hmac = crypto.createHmac("sha256", key);
    const decodeHmac = hmac.update(param).digest("hex");
    return decodeHmac.toUpperCase();
  }
}

export default GenerateHmac;
