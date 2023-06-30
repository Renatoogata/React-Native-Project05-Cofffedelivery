module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          alias: {
            '@assets': './src/assets',
            '@components': './src/components',
            '@routes': './src/routes',
            '@screens': './src/screens',
            '@storage': './src/storage',
            '@styles': './src/styles',
            '@utils': './src/utils',
            '@dtos': './src/dtos',
            '@api': './src/api',
            '@contexts': './src/contexts',
            '@hooks': './src/hooks',
          }
        }
      ],
      ['react-native-reanimated/plugin'],
    ]
  };
};
