export const calculateByHeight = (
  screenWidth: number = document.documentElement.clientWidth,
  screenHeight: number = document.documentElement.clientHeight,
  imageWidth: number,
  imageHeight: number
): [number, number, number, number] => {
  const scaledImageWidth = (screenWidth / screenHeight) * imageHeight;
  return [
    (imageWidth - scaledImageWidth) / 2,
    0,
    scaledImageWidth,
    imageHeight,
  ];
};

export const calculateByWidth = (
  screenWidth: number = document.documentElement.clientWidth,
  screenHeight: number = document.documentElement.clientHeight,
  imageWidth: number,
  imageHeight: number
): [number, number, number, number] => {
  const scaledImageHeight = (screenHeight / screenWidth) * imageWidth;
  return [
    0,
    scaledImageHeight - imageHeight > 0
      ? scaledImageHeight - imageHeight
      : imageHeight - scaledImageHeight,
    imageWidth,
    scaledImageHeight,
  ];
};

export const scaleImageAndGetPointToCenterBottom = (
  screenWidth: number = document.documentElement.clientWidth,
  screenHeight: number = document.documentElement.clientHeight,
  imageWidth: number,
  imageHeight: number
): [number, number, number, number] => {
  // [pointX, pointY, scaledWidth, scaledHeight]
  return imageHeight / screenHeight <= imageWidth / screenWidth
    ? calculateByHeight(screenWidth, screenHeight, imageWidth, imageHeight)
    : calculateByWidth(screenWidth, screenHeight, imageWidth, imageHeight);
};
