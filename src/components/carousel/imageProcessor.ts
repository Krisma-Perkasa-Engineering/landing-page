/**
 * This component focus on resize image to fit the screen width based on image path.
 * The output of this component is img element.
 */

import {scaleImageAndGetPointToCenterBottom} from './calculatePositionAndScaleImage';
import type {ScreenSize} from '../types';

const fetchImage = async (
  path: string,
  image: HTMLImageElement
): Promise<HTMLImageElement> => {
  const processImage = (
    path: string,
    image: HTMLImageElement
  ): Promise<HTMLImageElement> => {
    return new Promise((resolve, reject) => {
      image.onload = () => {
        resolve(image);
      };
      image.onerror = (err) => {
        reject(err);
      };
      image.src = path;
    });
  };
  const imageLoaded = await processImage(path, image);
  return imageLoaded;
};

const canvasToBlob = async (canvas: HTMLCanvasElement): Promise<Blob> => {
  return new Promise((resolve) => {
    canvas.toBlob(
      (blob) => {
        resolve(blob);
      },
      'image/jpeg',
      1
    );
  });
};

const setCanvasSize = (
  canvas: HTMLCanvasElement,
  screenWidth: number,
  screenHeight: number
): HTMLCanvasElement => {
  canvas.width = screenWidth;
  canvas.height = screenHeight;
  return canvas;
};

const getCanvasContext = (
  canvas: HTMLCanvasElement
): CanvasRenderingContext2D => {
  return canvas.getContext('2d');
};

const drawImageOnContext = (
  context: CanvasRenderingContext2D,
  image: HTMLImageElement,
  sX: number,
  sY: number,
  sWidth: number,
  sHeight: number,
  dX: number,
  dY: number,
  dWidth: number,
  dHeight: number
): CanvasRenderingContext2D => {
  context.drawImage(image, sX, sY, sWidth, sHeight, dX, dY, dWidth, dHeight);
  return context;
};

const halfImageOpacityOnContext = (
  context: CanvasRenderingContext2D
): CanvasRenderingContext2D => {
  context.globalAlpha = 0.5;
  return context;
};

const drawBackground = (
  context: CanvasRenderingContext2D,
  width: number,
  height: number
): CanvasRenderingContext2D => {
  context.fillStyle = '#FFFFFF';
  context.fillRect(0, 0, width, height);
  return context;
};

const imageProcessor = async (
  path: string,
  screenSize: ScreenSize,
  imageElement: HTMLImageElement = new window.Image(),
  canvasElement: HTMLCanvasElement = document.createElement('canvas')
): Promise<Blob> => {
  const image = await fetchImage(path, imageElement);
  const [
    imagePositionX,
    imagePositionY,
    imageScaledWidth,
    imageScaledHeight,
  ] = scaleImageAndGetPointToCenterBottom(
    screenSize.width,
    screenSize.height,
    image.width,
    image.height
  );

  // Resize and add opacity to image in single context
  drawImageOnContext(
    halfImageOpacityOnContext(
      drawBackground(
        getCanvasContext(
          setCanvasSize(canvasElement, screenSize.width, screenSize.height)
        ),
        screenSize.width,
        screenSize.height
      )
    ),
    image,
    imagePositionX,
    imagePositionY,
    imageScaledWidth,
    imageScaledHeight,
    0,
    0,
    screenSize.width,
    screenSize.height
  );

  // return canvasElement.toDataURL('image/jpeg', 1.0);
  return canvasToBlob(canvasElement);
};

export default imageProcessor;
