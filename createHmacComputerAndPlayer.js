import crypto from "crypto";

class GenerateHmac {
  constructor(param) {
    this.param = param;
    this.key = this.getKey();
  }

  getKey() {
    const key = crypto.randomBytes(32);
    return key.toString("hex");
  }

  getHmac(param) {
    const hmac = crypto.createHmac("sha256", this.key);
    const decodeHmac = hmac.update(param).digest("hex");
    return decodeHmac;
  }
}

export default GenerateHmac;
