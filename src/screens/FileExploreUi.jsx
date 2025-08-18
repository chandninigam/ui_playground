import { useEffect, useState } from "react";
import "../styles/file-explore-ui.css";
import { FaFile, FaFolder } from "react-icons/fa";

// type Folder = {
//   title: string,
//   path: string,
//   type: "folder",
//   children: Array<Content>,
// };

// type File = {
//   title: string,
//   path: string,
//   type: "file",
//   content: string,
// };

function FileComponent({ fileObj }) {
  return (
    <div className="file">
      <FaFile color="black" /> <span>{fileObj.title}</span>
    </div>
  );
}

function FolderComponent({ folderObj, selectedPath, setSelectedPath }) {
  function handleFolderBtn(e) {
    e.stopPropagation();
    setSelectedPath(folderObj.path);
  }

  return (
    <div>
      <button className="folderBtn" onClick={handleFolderBtn}>
        <FaFolder color="black" />{" "}
        <span className="folderWithName">{folderObj.title}</span>
      </button>
      {folderObj.children.length > 0 && (
        <ContentComponent
          data={folderObj.children}
          selectedPath={selectedPath}
          setSelectedPath={setSelectedPath}
          indentation={2}
        />
      )}
    </div>
  );
}

function ContentComponent({
  data,
  selectedPath,
  setSelectedPath,
  indentation,
}) {
  return (
    <div className={indentation ? "mr-l10" : ""}>
      {data.length > 0 &&
        data.map((ele, index) => {
          if (ele.type === "file") {
            return <FileComponent fileObj={ele} key={index} />;
          }
          return (
            <FolderComponent
              folderObj={ele}
              key={index}
              selectedPath={selectedPath}
              setSelectedPath={setSelectedPath}
            />
          );
        })}
    </div>
  );
}

export function FileExploreUi() {
  const [workSpaceData, setWorkSpaceData] = useState([]);
  const [selectedPath, setSelectedPath] = useState("/");

  useEffect(() => {
    function handleGlobalClick() {
      setSelectedPath("/");
    }
    document.addEventListener("click", handleGlobalClick);

    return () => document.removeEventListener("click", handleGlobalClick);
  }, []);

  function getFolderFileName(type) {
    let name;
    if (type === "file") {
      name = prompt(`Please Enter ${type} Name`);
    } else {
      name = prompt("Please Enter Folder Name ");
    }

    if (name) {
      return name;
    }
    return "";
  }

  function onClickFileTab(e) {
    e.stopPropagation();
    const fileName = getFolderFileName("file");
    if (fileName) {
      const createObj = {
        title: fileName,
        type: "file",
        path:
          selectedPath === "/"
            ? `${selectedPath}${fileName}`
            : `${selectedPath}/${fileName}`,
      };
      if (selectedPath === "/") {
        setWorkSpaceData((prev) => [...prev, createObj]);
      } else {
        const updatedData = addChildNode(
          workSpaceData,
          selectedPath,
          createObj
        );
        setWorkSpaceData(updatedData);
      }
    }
  }

  function addChildNode(arr, target, newNode) {
    return arr.map((node) => {
      if (node.path === target) {
        return { ...node, children: [...node.children, newNode] };
      }

      if (node.children && node.children.length > 0) {
        return {
          ...node,
          children: addChildNode(node.children, target, newNode),
        };
      }

      return node;
    });
  }

  function onClickFolderTab(e) {
    e.stopPropagation();
    const fileName = getFolderFileName("folder");
    if (fileName) {
      const createObj = {
        title: fileName,
        type: "folder",
        path:
          selectedPath === "/"
            ? `${selectedPath}${fileName}`
            : `${selectedPath}/${fileName}`,
        children: [],
      };

      if (selectedPath === "/") {
        setWorkSpaceData((prev) => [...prev, createObj]);
      } else {
        const updatedData = addChildNode(
          workSpaceData,
          selectedPath,
          createObj
        );
        setWorkSpaceData(updatedData);
      }
    }
  }
  return (
    <div>
      <div className="header">
        <h1>File Explore UI</h1>
        <div className="fileFolderWrapper">
          <button onClick={onClickFileTab}>
            <FaFile color="black" />
            <span>Create File</span>
          </button>
          <button onClick={onClickFolderTab}>
            <FaFolder color="black" />
            <span>Create Folder</span>
          </button>
        </div>
      </div>
      <div className="main">
        <ContentComponent
          data={workSpaceData}
          selectedPath={selectedPath}
          setSelectedPath={setSelectedPath}
        />
      </div>
    </div>
  );
}
