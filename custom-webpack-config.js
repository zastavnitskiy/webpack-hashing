const customHashedModuleIdsPlugin = require('./customHashedModuleIdsPlugin');

module.exports = {
    mode: 'production',
    plugins: [
        new customHashedModuleIdsPlugin()
    ]
}