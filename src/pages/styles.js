import styled, { css } from "styled-components"

//icons
import { FileEarmarkPdfFill } from "@styled-icons/bootstrap/FileEarmarkPdfFill"
import { ArrowForwardIos } from "@styled-icons/material-rounded/ArrowForwardIos"
import { Microsoftexcel } from "@styled-icons/simple-icons/Microsoftexcel"
import { Folder } from "@styled-icons/boxicons-solid/Folder"

//css
const iconProps = css`
  height: 1em;
  padding: 5px;
`

const FormContainerProps = css`
  flex-grow: 2;

  input,
  button {
    border: 0px;
    border-radius: 5px;
    padding: 10px;
  }

  input:focus {
    outline-width: 0;
  }

  &:focus-within {
    border: 1px solid #000;
    border-radius: 50px;
  }
`

//components
export const Container = styled.div`
  margin: 0 auto;
  width: 80%;
`

export const Title = styled.h1`
  font-size: 2em;
  padding: 1em 1em 0.5em 0;
  border-bottom: 1px solid #ddd;
`

export const FileContainer = styled.div`
  border-top: 1px solid #ccc;
  padding: 10px 10px;
`

export const FolderContainer = styled.div`
  padding-left: 30px;
`

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 10px;

  h3 {
    margin: 0;
  }
`

export const SortContainer = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: row;
  gap: 10px;
  padding: 0px 20px;
  min-width: 200px;
`

export const FormContainer = styled.div`
  padding: 5px;
  margin: 10px;
  border: 1px solid #cdcdcd;
  border-radius: 50px;
  display: flex;
  justify-content: space-between;
  transform-origin: bottom right 60px;
  height: 30px;
  ${FormContainerProps}
`

export const Arrow = styled(ArrowForwardIos)`
  height: 12px;
`

export const FolderIcon = styled(Folder)`
  ${iconProps}
`

export const PdfIcon = styled(FileEarmarkPdfFill)`
  ${iconProps}
`

export const CsvIcon = styled(Microsoftexcel)`
  ${iconProps}
`
