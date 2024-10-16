const nextConfig = {
    webpack: (config) => {
      config.node = {
        __dirname: true,
      };
      return config;
    },
  };
  
  export default nextConfig; // ou module.exports = nextConfig; se estiver usando .js
  