import { css, styled } from "styled-components";

export const Todo = styled.div`
    margin-top: 100px;
`

export const TodoActive = styled.div`
    font-weight: bold;
`

export const TodoItemStyled = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 0px;
`

export const TodoHeaderStyled = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`


export const TodoActions = styled.div`
    position: relative;
`;

export const TodoSpan = styled.span<{ $active?: boolean; }>`
    padding: 0 10px;
    cursor: pointer;
    
    ${props => props.$active && css`
        font-weight: bold;
    `}
`


export const ToboBodyStyled = styled.div`
    margin-top: 20px;
`;

export const TodoItem = styled.div<{ $isOpened: boolean }>`
    margin-bottom: 20px;
    padding: 30px;
    box-shadow: 2px 2px 10px rgba(216 224 237 / 80%);
    ${props => props.$isOpened && css`
        
    `}
`
export const TodoJobs = styled.div`
    border-bottom: 1px solid #000;
`;

export const TodoBottom = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 40px;
    margin-top: 10px;
`
export const TodoTitle = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    padding-bottom: 5px;
    border-bottom: 1px solid #000;
`
export const TodoTitleSpan = styled.span`
    flex-grow: 1;
    flex-shrink: 0;
    padding-left: 15px;
    font-size: 24px;
`

export const TodoClearStyled = styled.div`
    cursor: pointer;
`

export const TodoWrapperIcons = styled.div`
    svg {
    &:only-child {
            margin: 0;
        }

        &:not(:first-child) {
            margin-left: 5px;
        }

        &:not(:last-child) {
            margin-right: 5px;
        }

        &:not(:first-child):not(:last-child) {
            margin: 0 5px;
        }
    }
`

export const TodoEmpty = styled.div`
    margin: 10px
`