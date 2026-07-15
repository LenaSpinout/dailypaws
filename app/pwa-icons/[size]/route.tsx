import { ImageResponse } from "next/og";
import { PawMark } from "../../icons/paw-mark";

const DEFAULT_DIMENSION = 512;

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ size: string }> }
) {
  const { size: sizeParam } = await params;
  const maskable = sizeParam.endsWith("-maskable");
  const parsed = parseInt(sizeParam, 10);
  const dimension = Number.isFinite(parsed) && parsed > 0 ? parsed : DEFAULT_DIMENSION;

  return new ImageResponse(<PawMark size={dimension} padded={maskable} />, {
    width: dimension,
    height: dimension,
  });
}
