import * as React from "react";
import { css } from "@emotion/css";
import { Slider } from "@mui/material";

import { DME, useEditorStore } from "dmeditor";
import { EntitySampleWidget } from "./entity";

const { useState, useEffect } = React;

export const SampleWidget = (
  props: DME.WidgetRenderProps<EntitySampleWidget>
) => {
  const {
    blockNode: {
      data: { settings, text },
    },
    path,
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
        style={{ width: settings.width }}
        className={css`
          height: 300px;
          background: ${settings.insideBackground ?? "#ffe3e3"};
        `}
      >
        {text}
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
