// @ts-nocheck
export const getStorage = (_app: any) => ({});
export const ref = (_storage: any, path: string) => ({ path });
export const uploadBytes = async (_ref: any, _file: any) => ({});
export const getDownloadURL = async (storageRef: any) =>
  `https://euphemia.com/uploads/${storageRef?.path || "file.pdf"}`;
