const paletteMonokai = Object.freeze({
  Background: toOpaqueColor("#272822"),
  Foreground: toOpaqueColor("#F8F8F2"),
  Gray: toOpaqueColor("#75715E"),
  GrayLight: toOpaqueColor("#CFCFC2"),
  Whitish: toOpaqueColor("#F8F8F0"),
  Yellow: toOpaqueColor("#E6DB74"),
  Blue: toOpaqueColor("#66D9EF"),
  Purple: toOpaqueColor("#AE81FF"),
  Red: toOpaqueColor("#F92672"),
  Green: toOpaqueColor("#A6E22E"),
  Orange: toOpaqueColor("#FD971F"),
  OrangeLight: toOpaqueColor("#E69F66"),
});

const adaptive = Object.freeze({
  Background: toOpaqueColor('BACKGROUND1'),
  Foreground: toOpaqueColor('TEXT1'),
  ACCENT1: toOpaqueColor('ACCENT1'),
  ACCENT2: toOpaqueColor('ACCENT2'),
  ACCENT3: toOpaqueColor('ACCENT3'),
  ACCENT4: toOpaqueColor('ACCENT4'),
  ACCENT5: toOpaqueColor('ACCENT5'),
  ACCENT6: toOpaqueColor('ACCENT6'),
  ACCENT7: toOpaqueColor('TEXT2'),
  ACCENT8: toOpaqueColor('BACKGROUND2'),
});

function toOpaqueColor(col)
{
  if (typeof col == 'string' && col[0] == '#')
    return col.length >= 7
      ? {rgbColor: {
        red: Math.round(parseInt(col.substr(1, 2), 16) / 2.55) / 100,
        green: Math.round(parseInt(col.substr(3, 2), 16) / 2.55) / 100,
        blue: Math.round(parseInt(col.substr(5, 2), 16) / 2.55) / 100,
      }}
      : {rgbColor: {
        red: Math.round(parseInt(col.charAt(1), 16) / 2.55) / 100,
        green: Math.round(parseInt(col.charAt(2), 16) / 2.55) / 100,
        blue: Math.round(parseInt(col.charAt(3), 16) / 2.55) / 100,
      }};

  if (Array.isArray(col) && col.length == 3)
    return {rgbColor: {
      red: Math.round(col[0] / 2.55) / 100,
      green: Math.round(col[1] / 2.55) / 100,
      blue: Math.round(col[2] / 2.55) / 100,
    }};
  
  return {themeColor: col};
}