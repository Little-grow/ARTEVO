module.exports = {
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  moduleNameMapper: {
    '\\.module\\.css$': 'identity-obj-proxy',
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
    '\\.(png|svg|jpg|gif)$': 'client/src/mocks/fileMock.ts',
  },
};
