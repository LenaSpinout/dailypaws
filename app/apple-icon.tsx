import { ImageResponse } from "next/og";
import { PawMark } from "./icons/paw-mark";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(<PawMark size={180} />, size);
}
