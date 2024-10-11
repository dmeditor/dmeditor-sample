import * as React from "react";
import { css } from "@emotion/css";
import { Slider } from "@mui/material";

import { DME, useEditorStore } from "dmeditor";
import { EntitySampleWidget } from "./entity";

export const SampleWidget = (
  props: DME.WidgetRenderProps<EntitySampleWidget>
) => {
  const {
    blockNode: {
      data: { settings, text },
    },
    path,
    styleClasses,
  } = props;

  const { updateBlockByPath } = useEditorStore();

  const updateWidth = (e: any, v: any) => {
    //update data with entity
    updateBlockByPath<EntitySampleWidget>(path, (data) => {
      data.settings.width = v as number;
    });
  };

  return (
    <div>
      <div
        className={css`
          height: 300px;
          width: ${settings.width}px;
          background: ${settings.insideBackground ?? "#ffe3e3"};
        `}
      >
        <span className={styleClasses["text"] || "dme-w-text"}>{text}</span>
      </div>
      <div className="flex align-center">
        <div>Adjust inline:</div>
        <Slider
          valueLabelDisplay="auto"
          style={{ width: 200 }}
          value={settings.width}
          step={5}
          max={800}
          onChange={updateWidth}
        />
      </div>
    </div>
  );
};

export default SampleWidget;
