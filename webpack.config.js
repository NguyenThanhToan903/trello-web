export const module = {
  rules: [
    {
      test: /\.svg$/,
      use: ["@svgr/webpack", "url-loader"],
    },
  ],
};
