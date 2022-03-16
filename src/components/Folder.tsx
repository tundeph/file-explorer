import { useState } from "react"

//types
import { FolderProps } from "../models/Display.types"

//components from styled
import Icon from "./Icon"
import File from "./File"
import { Arrow } from "../pages/styles"
import { FileContainer, FolderContainer } from "../pages/styles"

const Folder = ({ value }: FolderProps) => {
  const [showFiles, setShowFiles] = useState<boolean>(false)

  const handleShowFiles = () => {
    setShowFiles((showFiles) => !showFiles)
  }
  return (
    <>
      <FileContainer>
        <Arrow onClick={handleShowFiles} />
        <Icon typeOfFile={value.type} />
        {value.name}
      </FileContainer>
      {showFiles && (
        <FolderContainer>
          {value.files &&
            value.files.map((val, i) => <File key={i} value={val} />)}
        </FolderContainer>
      )}
    </>
  )
}

export default Folder
