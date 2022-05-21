import styled from 'styled-components'

const Row = styled.div<{
  width?: string
  align?: string
  justify?: string
  padding?: string
  border?: string
  borderRadius?: string
  gap?: string
}>`
  width: ${({ width }) => width ?? 'unset'};
  display: flex;
  padding: 0;
  align-items: ${({ align }) => align ?? 'center'};
  justify-content: ${({ justify }) => justify ?? 'flex-start'};
  padding: ${({ padding }) => padding};
  border: ${({ border }) => border};
  border-radius: ${({ borderRadius }) => borderRadius};

  & > * {
    margin: ${({ gap }) => gap} !important;
  }
`

export const RowBetween = styled(Row)`
  justify-content: space-between;
  white-space: nowrap;
`
export const RowCenter = styled(Row)`
  justify-content: center;
`

export const RowFlat = styled.div`
  display: flex;
  align-items: flex-end;
`

export const AutoRow = styled(Row)<{ gap?: string; justify?: string; nowrap?: boolean }>`
  flex-wrap: ${({ nowrap }) => (nowrap ? 'nowrap' : 'wrap')};
  margin: ${({ gap }) => gap && `-${gap}`};
  justify-content: ${({ justify }) => justify && justify};

  & > * {
    margin: ${({ gap }) => gap} !important;
  }
`

export const RowFixed = styled(Row)<{ gap?: string; justify?: string }>`
  width: fit-content;
  margin: ${({ gap }) => gap && `-${gap}`};
`

export default Row
