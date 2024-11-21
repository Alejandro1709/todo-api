process.loadEnvFile();

export const ENV = process.env.NODE_ENV || "development";
export const PORT = process.env.PORT || 2026;
