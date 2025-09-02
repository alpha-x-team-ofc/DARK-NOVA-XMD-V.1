module.exports = {
  apps: [{
    name: "DARK-NOVA-XMD",
    script: "./index.js",
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: "1G",
    env: {
      NODE_ENV: "production",
      PORT: 9090
    },
    env_production: {
      NODE_ENV: "production",
      PORT: 9090
    }
  }]
};
