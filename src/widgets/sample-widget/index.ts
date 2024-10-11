import { nanoid } from "nanoid";

import { sampleWidgetDef } from "./definition";
import SampleWidget from "./SampleWidget";
import SettingInput from "./setting-input/SettingInput";
import { registerSettingComponent, registerWidget } from "dmeditor";

const registerSampleWidget = function () {
  registerWidget(sampleWidgetDef, {
    render: SampleWidget,
  });
  registerSettingComponent("setting_input", SettingInput);
};

export default registerSampleWidget;
