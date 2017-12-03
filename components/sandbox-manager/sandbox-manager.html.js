module.exports = scope => `
  <style>
<<<<<<< Updated upstream

    sandbox-manager-application {
=======
    .hidden {
      display: none;
    }
    .fullscreen-icon,
    .arrows-overlap {
      background-color: Gainsboro;
      border-radius: 3px;
    }
    .fullscreen-icon {
>>>>>>> Stashed changes
      display: block;
      width: 100%;
      height: 100%;
    }

    .split {
      -webkit-box-sizing: border-box;
         -moz-box-sizing: border-box;
              box-sizing: border-box;

      overflow-y: auto;
      overflow-x: hidden;
    }

    .content {
      border: 1px solid #C0C0C0;
      box-shadow: inset 0 1px 2px #e4e4e4;
      background-color: #fff;
      display: block;
      height: 100%;
      width: 100%;
    }
    .gutter {
      background-color: transparent;

      background-repeat: no-repeat;
      background-position: 50%;
    }
    .gutter.gutter-horizontal {
      cursor: col-resize;
    }
    .gutter.gutter-vertical {
      cursor: row-resize;
    }
<<<<<<< Updated upstream
    .split.split-horizontal, .gutter.gutter-horizontal {
=======
    sandbox-manager-application * {
      box-sizing: border-box;
    }

    sandbox-manager-application {
      display: block;
      width: 100%;
>>>>>>> Stashed changes
      height: 100%;
      float: left;
    }
  </style>

  <div id="left-panel" class="${scope.mobile ? '' : 'split split-horizontal'} left-panel">
  </div>
  <div id="right-panel" class="${scope.mobile ? '' : 'split split-horizontal'} right-panel">
  </div>
`;
