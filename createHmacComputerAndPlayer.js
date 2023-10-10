import crypto from "crypto";

class GenerateHmac {
  constructor(param) {
    this.param = param;
    this.key = crypto.randomBytes(32);
  }

  getKey() {
    return this.key;
  }

  getHmac(param) {
    const hash = crypto.createHmac("sha256", this.key);
    const hmac = param + this.key;
    const decodeHash = hash.update(hmac).digest("hex");
    return decodeHash;
  }
}

export default GenerateHmac;
