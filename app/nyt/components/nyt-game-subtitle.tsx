import { longDateString } from "@/lib/date";

export interface NYTGameSubtitleProps {
  date: Date | string;
  editor?: string;
}

export default function NYTGameSubtitle({
  date,
  editor,
}: NYTGameSubtitleProps) {
  return (
    <>
      <h2 className="text-2xl mb-2">{longDateString(date)}</h2>
      {editor && <h3 className="font-bold">{`By ${editor}`}</h3>}
    </>
  );
}
