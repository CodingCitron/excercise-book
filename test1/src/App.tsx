import { useEffect } from "react";
import Editor from "./components/editor";
import useEditorStore from "./store/editor";

function App() {
  const { data, addEditor, updateData } = useEditorStore((state) => {
    return {
      data: state.data,
      addEditor: state.addEditor,
      updateData: state.updateData,
    };
  });

  useEffect(() => {
    addEditor(0);
  }, []);

  return (
    <>
      <h1>
        테스트 입니다. 이런 경우는 없겠지만 이런 경우에 성능이 이상해짐...
      </h1>
      <div>
        {data.length > 0 && (
          <>
            <div className="editor-container">
              <Editor
                value={data[0].string}
                onChange={(value) => updateData(0, value)}
              />
              <Editor
                value={data[0].string}
                onChange={(value) => updateData(0, value)}
              />
              <Editor
                value={data[0].string}
                onChange={(value) => updateData(0, value)}
              />
              <Editor
                value={data[0].string}
                onChange={(value) => updateData(0, value)}
              />
              <Editor
                value={data[0].string}
                onChange={(value) => updateData(0, value)}
              />
              <Editor
                value={data[0].string}
                onChange={(value) => updateData(0, value)}
              />
              <Editor
                value={data[0].string}
                onChange={(value) => updateData(0, value)}
              />
              <Editor
                value={data[0].string}
                onChange={(value) => updateData(0, value)}
              />
              <Editor
                value={data[0].string}
                onChange={(value) => updateData(0, value)}
              />
              <Editor
                value={data[0].string}
                onChange={(value) => updateData(0, value)}
              />
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default App;
