declare module '*.jpg';

declare module '*.png';

declare module '*.svg' {
  const value: string;
  export default value;
}

declare module '*.webp';
