import { FC } from 'react'

type TitleProps = {
    title: string | React.ReactNode,
    type: string,
    className?: string
}

const Title: FC<TitleProps> = ({ title, type }) => {

    const Type = type as keyof JSX.IntrinsicElements;


    return (
        <>

            <Type
            >
                {title}
            </Type>


        </>
    )
}

export default Title;
