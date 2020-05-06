import jbinary from "jbinary";

const typeset_bin = {
  "jBinary.all": "bin",
  "jBinary.littleEndian": true,
  sample: {
    begin: "char",
    UTCTIME: "uint64",
    TZO: "int16",
    DSTO: "int16",
    GPSTIME: "uint64",
    GPSSTATUS: "uint8",
    LAT: "float64",
    LATDIR: "char",
    LNG: "float64",
    LNGDIR: "char",
    GPSSPEED: "float32",
    GPSCOURSE: "float32",
    DIPSTATE: "uint8",
    ACCSTATE: "uint8"
  },
  bin: {
    header: ["string", 177],
    length: "uint64",
    samples: ["array", "sample"]
  }
};

const getTrackingData = async function(url) {
  let binary = await jbinary.load(url, typeset_bin);
  let result = binary.readAll();
  return result;
};

export default {
  getTrackingData,
  typeset_bin
};
