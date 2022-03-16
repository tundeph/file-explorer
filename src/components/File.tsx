//types
import { FileProps } from "../models/Display.types"

//components from styled
import { FileContainer } from "../pages/styles"
import Icon from "./Icon"

const File = ({ value }: FileProps) => {
  return (
    <FileContainer>
      <Icon typeOfFile={value.type} /> {value.name} | {value.added}
    </FileContainer>
  )
}

export default File
