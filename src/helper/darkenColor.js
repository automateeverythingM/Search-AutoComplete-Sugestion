/**
 * Lighten or Darken Color
 *
 * The CSS preprocessor Sass and LESS can take any color and darken() or
 * lighten() it by a specific value. But no such ability is built into
 * JavaScript. This function takes colors in hex format (i.e. #F06D06, with or
 * without hash) and lightens or darkens them with a value.
 *
 * @param {String} colorCode The hex color code (with or without # prefix).
 * @param {Int} amount
 */
export default function LightenDarkenColor(colorCode, amount) {
    var usePound = false;

    if (colorCode[0] == "#") {
        colorCode = colorCode.slice(1);
        usePound = true;
    }

    var num = parseInt(colorCode, 16);

    var r = (num >> 16) + amount;

    if (r > 255) {
        r = 255;
    } else if (r < 0) {
        r = 0;
    }

    var b = ((num >> 8) & 0x00ff) + amount;

    if (b > 255) {
        b = 255;
    } else if (b < 0) {
        b = 0;
    }

    var g = (num & 0x0000ff) + amount;

    if (g > 255) {
        g = 255;
    } else if (g < 0) {
        g = 0;
    }

    return (usePound ? "#" : "") + (g | (b << 8) | (r << 16)).toString(16);
}