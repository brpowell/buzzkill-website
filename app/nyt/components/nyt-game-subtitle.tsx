import { longDateString } from "@/lib/date";

export interface NYTGameSubtitleProps {
  date: Date | string;
  editor: string;
}

export default function NYTGameSubtitle({
  date,
  editor,
}: NYTGameSubtitleProps) {
  return (
    <>
      <h2 className="text-2xl mb-2">{longDateString(date)}</h2>
      <h3 className="text-slate-500">{`By ${editor}`}</h3>
    </>
  );
}
