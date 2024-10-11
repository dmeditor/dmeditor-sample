import { nanoid } from "nanoid";
import "./App.css";
import { DMEditor, DMEditorRefType } from "dmeditor";
import { useEffect, useRef } from "react";
import { dmeditorInit } from "./dme-config/dmeditorInit";

dmeditorInit();

const App = () => {
  const editorRef = useRef<DMEditorRefType>(null);
  const data = [
    {
      id: `widget-${nanoid()}`,
      style: { _: "_default" },
      data: {
        value: "This is a heading",
        level: 2,
        settings: {
          align: "left",
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
            url: "https://dmeditor.c.digimaker.com/var/images/full/images/p/ptf/upload-4271003480-enterprise.jpg",
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
        { identifier: "meta_keyword", name: "keyword", type: "text" },
        {
          identifier: "meta_description",
          name: "Meta description",
          type: "multitext",
        },
      ]);
      editor.setPageData({
        title: "New page",
        theme: "red",
        meta_keyword: "test key",
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
