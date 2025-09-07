import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
import customParseFormat from "dayjs/plugin/customParseFormat";

dayjs.extend(duration);
dayjs.extend(customParseFormat);

export const getDuration = (startDate: string, endDate: string, format: string = 'MM/YYYY') => {

    const d1 = dayjs(startDate, format);
    const d2 = dayjs(endDate, format);

    const diffMs = d2.diff(d1, "M");

    const diff = dayjs.duration(diffMs, "M");

    return diff;
}