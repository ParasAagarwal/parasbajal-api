const fileType = require("file-type");

const isBase64FileValid = async (base64String) => {
  try {
    const buffer = Buffer.from(base64String, "base64");

    const mimeInfo = await fileType.fromBuffer(buffer);
    const fileSizeKb = (buffer.length / 1024).toFixed(2);

    if (mimeInfo) {
      return { valid: true, mimeType: mimeInfo.mime, sizeKb: fileSizeKb };
    } else {
      return { valid: false };
    }
  } catch (error) {
    return { valid: false };
  }
};

const processPostRequest = async (req, res) => {
  const { data, file_b64 } = req.body;

  console.log(req.body);
  const numbers = data.filter((item) => !isNaN(item));
  const alphabets = data.filter((item) => isNaN(item));

  const lowercaseAlphabets = alphabets.filter((char) => /^[a-z]$/.test(char));
  const highestLowercaseAlphabet =
    lowercaseAlphabets.length > 0 ? [lowercaseAlphabets.sort().pop()] : [];

  let fileValidation = { valid: false };
  if (file_b64) {
    fileValidation = await isBase64FileValid(file_b64);
  }


  res.json({
    is_success: true,
    user_id: "Paras Agarwal",
    email: "paras_agarwal@srmap.edu.in",
    roll_number: "AP21110010324",
    numbers,
    alphabets,
    highest_lowercase_alphabet: highestLowercaseAlphabet,
  });
};

const getOperationCode = (req, res) => {
  res.status(200).json({
    operation_code: 1,
  });
};

module.exports = { processPostRequest, getOperationCode };