import localFonts from 'next/font/local'
import { Inter } from "next/font/google";


const iranSans = localFonts({
  src: [
    {
      path: "../assets/fonts/iran-sans-x-regular.woff2",
      style: "normal",
      weight: "400",
    },
    {
      path: "../assets/fonts/iran-sans-x-extra-bold.woff2",
      style: "normal",
      weight: "800",
    },
    {
      path: "../assets/fonts/iran-sans-x-semi-bold.woff2",
      style: "normal",
      weight: "600",
    },
  ]
})

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600", "800"],
});

export const Fonts = {
  IranSans: iranSans,
  Inter: inter,
};
