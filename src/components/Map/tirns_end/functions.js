import { tirnsList0, tirnsList1, tirnsList2, tirnsList3, tirnsList4 } from "./api";

export const tirnsRender = (region, count) => {
    if (count === 0) {
        return tirnsList0();
    } else if (count === 1) {
        return tirnsList1();
    } else if (count === 2) {
        return tirnsList2();
    } else if (count === 3) {
        return tirnsList3();
    } else if (count === 4) {
        return tirnsList4();
    }
}