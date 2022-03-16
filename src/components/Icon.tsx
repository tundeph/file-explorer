import { PdfIcon, CsvIcon, FolderIcon } from "../pages/styles"

export type typeOfFileProps = {
  typeOfFile: string
}

const Icon = ({ typeOfFile }: typeOfFileProps) => {
  const handleIcon = () => {
    switch (typeOfFile) {
      case "pdf":
        return <PdfIcon />
      case "csv":
        return <CsvIcon />
      case "doc":
        return <PdfIcon />
      case "mov":
        return <PdfIcon />
      case "folder":
        return <FolderIcon />
      default:
        return <CsvIcon />
    }
  }
  return <>{handleIcon()}</>
}

export default Icon
