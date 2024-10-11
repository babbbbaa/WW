const path = require('path');

module.exports = {
  entry: './src/index.js', // 애플리케이션의 진입 파일
  output: {
    path: path.resolve(__dirname, '../assets/js'), // 빌드된 파일이 저장될 경로
    filename: 'bundle.js', // 빌드된 파일명
  },
  module: {
    rules: [
      {
        test: /\.js$/, // .js, .jsx 파일에 대한 바벨 변환 설정
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.css$/, // .css 파일에 대한 처리
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'], // 파일 확장자 생략 가능
  },
};
