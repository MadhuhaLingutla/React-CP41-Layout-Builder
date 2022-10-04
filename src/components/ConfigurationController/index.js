// Write your code here

import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value
      const clickedOnContent = event => {
        console.log(event.target.checked)
        onToggleShowContent()
      }
      const clickedOnLeftNavbar = event => {
        console.log(event.target.checked)
        onToggleShowLeftNavbar()
      }
      const clickedOnRightNavbar = event => {
        console.log(event.target.checked)
        onToggleShowRightNavbar()
      }

      return (
        <div className="config-control-container">
          <h1 className="config-control-heading">Layout</h1>
          <div className="controls-container">
            <div className="checkbox-field">
              <input
                type="checkbox"
                id="content"
                value="content"
                name="config-controls"
                onChange={clickedOnContent}
                checked={showContent}
                className="input-checkbox"
              />
              <label htmlFor="content" className="label-name">
                Content
              </label>
            </div>
            <div className="checkbox-field">
              <input
                type="checkbox"
                id="leftnavbar"
                value="leftnavbar"
                name="config-controls"
                onChange={clickedOnLeftNavbar}
                checked={showLeftNavbar}
                className="input-checkbox"
              />
              <label htmlFor="leftnavbar" className="label-name">
                Left Navbar
              </label>
            </div>
            <div className="checkbox-field">
              <input
                type="checkbox"
                id="rightnavbar"
                value="corightnavbarntent"
                name="config-controls"
                onChange={clickedOnRightNavbar}
                checked={showRightNavbar}
                className="input-checkbox"
              />
              <label htmlFor="rightnavbar" className="label-name">
                Right Navbar
              </label>
            </div>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
