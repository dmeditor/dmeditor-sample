import { nanoid } from "nanoid";
import "./App.css";
import { DMEditor, DMEditorRefType } from "dmeditor";
import { useEffect, useRef } from "react";
import { dmeditorInit } from "./dme-config/dmeditorInit";
import defaultData from "./data/default.json";

dmeditorInit();

const App = () => {
  const editorRef = useRef<DMEditorRefType>(null);
  const data = defaultData;

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
