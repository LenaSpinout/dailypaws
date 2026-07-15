import { ImageResponse } from "next/og";
import { PawMark } from "./icons/paw-mark";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(<PawMark size={32} />, size);
}
