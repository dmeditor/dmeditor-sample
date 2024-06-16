import { nanoid } from "nanoid";
import "./App.css";
import {
  DMEditor,
  DMEditorRefType,
  registerDefaultWidgets,
  setDMEditorConfig,
} from "dmeditor";
import { useEffect, useRef } from "react";
import { dmeditorInit } from "./dmeditorInit";
import { registerStyles } from "./registerStyles";

dmeditorInit();
registerStyles();

const App = () => {
  const editorRef = useRef<DMEditorRefType>(null);
  const data = [
    {
      id: `widget-${nanoid()}`,
      data: {
        value: "This is a heading",
        level: 2,
        settings: {
          align: "left",
          general: {
            padding: 80,
          },
          // value: '',
        },
      },
      type: "heading",
    },
    {
      id: "N-LAQWihvfZv1SmUAPoQx",
      type: "text",
      data: {
        value: [
          {
            type: "paragraph",
            children: [
              {
                text: "",
              },
            ],
          },
          {
            type: "image",
            url: "https://zeekrlife-oss.zeekrlife.com/frontend/atom/atom_json/JSON-2c293ed22f16f3602f139511e8d9479b/zeekr001_kv_2024-32788be256e0c4bcad0fced53952a5ec.png",
            children: [
              {
                text: "",
              },
            ],
            setting: {
              width: 127,
              height: 71,
              scale: 1.79,
            },
          },
          {
            type: "paragraph",
            children: [
              {
                text: "",
              },
            ],
          },
        ],
      },
    },
  ];

  useEffect(() => {
    const editor = editorRef.current;
    if (editor) {
      editor.setData(data as any);
      editor.setPageSettings([
        { identifier: "cover_image", name: "Cover image", type: "image" },
        { identifier: "summary", name: "Summary", type: "richtext" },
        { identifier: "meta_key", name: "Meta key", type: "text" },
        {
          identifier: "meta_description",
          name: "Meta description",
          type: "multitext",
        },
      ]);
      editor.setPageData({
        title: "New page",
        theme: "red",
        meta_key: "test key",
      });
    }
  }, []);

  return (
    <div>
      <DMEditor
        ref={editorRef}
        onSave={(data) => {
          console.log(data);
          window.alert("Saved");
        }}
        onChange={(data) => {
          console.log("changed");
          console.log(data.data);
        }}
        onCancel={() => {
          window.alert("Cancel");
        }}
      />
    </div>
  );
};

export default App;
