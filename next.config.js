const withReactSvg = require('next-react-svg');
const path = require('path');

module.exports = withReactSvg({
    include: path.resolve(__dirname, 'assets/svg'),
    webpack(config, options) {
        return config;
    },
    env: {
        API_BASE_URL: 'https://web-api.improver.com.tr/api/project/v1',
        // API_BASE_URL: 'https://todolist-44d8a.firebaseio.com',
    },
});