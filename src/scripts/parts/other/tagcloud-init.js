const indexTagCloudSettings = {
  entries: [
    {
      image: `assets/img/skills/gitlab-logo.svg`,
      width: `50`,
      height: `40`,
      url: `#`,
      target: `_top`
    },
    {
      image: `assets/img/skills/gulp.png`,
      width: `60`,
      height: `60`,
      url: `#`,
      target: `_top`
    },
    {
      image: `assets/img/skills/jq.svg`,
      width: `80`,
      height: `40`,
      url: `#`,
      target: `_top`
    },
    {
      image: `assets/img/skills/github-logo.svg`,
      width: `40`,
      height: `40`,
      url: `#`,
      target: `_top`
    },
    {
      image: `assets/img/skills/es6.jpg`,
      width: `50`,
      height: `40`,
      url: `#`,
      target: `_top`
    },
    {
      image: `assets/img/skills/js.svg`,
      width: `40`,
      height: `40`,
      url: `#`,
      target: `_top`
    },
    {
      image: `assets/img/skills/webpack.png`,
      width: `50`,
      height: `50`,
      url: `#`,
      target: `_top`
    },
    {
      image: `assets/img/skills/vuejs.png`,
      width: `50`,
      height: `50`,
      url: `#`,
      target: `_top`
    },

  ],
  // width of tag cloud
  width: 400,

// height of tag cloud
  height: 400,

// radius of tag cloud
  radius: `70%`,

// min radius of tag cloud
  radiusMin: 75,

// use background draw
  bgDraw: false,

// background color
  bgColor: `transparent`,

// the behavior of the individual links / Tags
  opacityOver: 1,
  opacityOut: .2,
  opacitySpeed: 4,

// how the content is presented
  fov: 800,

// animation speed
  speed: 0.2,

// font options
  fontFamily: "Arial, sans-serif",
  fontSize: "15",
  fontColor: "#fff",
  fontWeight: "normal",
  fontStyle: "normal",
  fontStretch: "normal",
  fontToUpperCase: false,

// tooltip options
  tooltipFontFamily: 'Arial, sans-serif',
  tooltipFontSize: '15',
  tooltipFontColor: '#fff',
  tooltipFontWeight: 'normal',//bold
  tooltipFontStyle: 'normal',//italic
  tooltipFontStretch: 'normal',//wider, narrower, ultra-condensed, extra-condensed, condensed, semi-condensed, semi-expanded, expanded, extra-expanded, ultra-expanded
  tooltipFontToUpperCase: false,
  tooltipTextAnchor: 'left',
  tooltipDiffX: 0,
  tooltipDiffY: 10
};

export const tagCloudSettings = {
  indexTagCloudSettings
};
