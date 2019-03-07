import themes from './themes'

export default {
  name: 'Chartlib',
  /**
   * show story component as full screen
   * @type {Boolean}
   */
  isFullScreen: false,
  /**
   * display panel that shows a list of stories
   * @type {Boolean}
   */
  showNav: true,
  /**
   * display panel that shows addon configurations
   * @type {Boolean}
   */
  showPanel: true,
  /**
   * where to show the addon panel
   * @type {String}
   */
  panelPosition: 'bottom',
  /**
   * sorts stories
   * @type {Boolean}
   */
  sortStoriesByKind: false,
  /**
   * regex for finding the hierarchy separator
   * @example:
   *   null - turn off hierarchy
   *   /\// - split by `/`
   *   /\./ - split by `.`
   *   /\/|\./ - split by `/` or `.`
   * @type {Regex}
   */
  hierarchySeparator: /\/|\./,
  /**
   * regex for finding the hierarchy root separator
   * @example:
   *   null - turn off multiple hierarchy roots
   *   /\|/ - split by `|`
   * @type {Regex}
   */
  hierarchyRootSeparator: /\|/,
  /**
   * sidebar tree animations
   * @type {Boolean}
   */
  sidebarAnimations: true,
  /**
   * enable/disable shortcuts
   * @type {Boolean}
   */
  enableShortcuts: true,
  theme: themes.dark,
}
