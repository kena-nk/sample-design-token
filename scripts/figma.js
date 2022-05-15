// ファイル書きこみ用
const fs = require('fs');

// Promiseの形式にする
const { promisify } = require("util");

// パスを扱うがどうつかうかはまだわかってない
const path = require("path");

// よくわからぬ
const fetch = (...args) => import("node-fetch").then(({ default: fetch }) => fetch(...args));

// よくわからぬ
const writeFile = promisify(fs.writeFile);

// env情報使えるようにした
require('dotenv').config();

// 変数群
const TOKEN = process.env.FIGMA_TOKEN;
const FIGMA_FILE_KEY = process.env.FIGMA_DESIGN_TOKEN_FILE_KEY;
const PREFIX = "Test";

const fetchFigma = (path) =>
  fetch(`https://api.figma.com/v1/files/${FIGMA_FILE_KEY}${path}`, {
    headers: {
      "X-FIGMA-TOKEN": TOKEN,
    },
  }).then((response) => response.json());

const main = async () => {
  // https://www.figma.com/developers/api#get-file-styles-endpoint
  const responseStyles = await fetchFigma("/styles");
  const styles = responseStyles.meta.styles;
  // await writeFile(
  //   path.resolve(__dirname, "../tokens/color/primitive.json"),
  //   responseStyles
  // );
  console.log(responseStyles);
  console.log(styles);
};

main();
