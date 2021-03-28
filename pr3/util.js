import bcrypt from "bcrypt";
import AWS from "aws-sdk";
import client from "./client";

export const protectResolver = (resolver) => (root, args, context, info) => {
  if (!context.getUser) {
    return {
      ok: false,
      error: "Login!",
    };
  }
  return resolver(root, args, context, info);
};

AWS.config.update({
  credentials: {
    accessKeyId: process.env.AWS,
    secretAccessKey: process.env.AWS_KEY,
  },
});

export const deleteFile = async (fileName) => {
  await new AWS.S3().deleteObject({
    Bucket: "stockwork",
    key: fileName,
    ACL: "public-read",
  });
};

export const upload = async (file, id, folder) => {
  const { filename, createReadStream } = await file;
  const fileName = `${folder}/${id}-${Date.now()}-${filename}`;
  const stream = createReadStream();
  const upload = await new AWS.S3()
    .upload({
      Bucket: "stockwork",
      Key: fileName,
      ACL: "public-read",
      Body: stream,
    })
    .promise();
  return upload.Location;
};

export const isLogin = async (password, userName) => {
  const user = await client.user.findFirst({
    where: { userName },
    select: { password: true },
  });
  return await bcrypt.compare(password, user.password);
};
export const hashPassword = async (password) => await bcrypt.hash(password, 10);
