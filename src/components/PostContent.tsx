import { ReactMarkdown } from 'react-markdown/lib/react-markdown'

interface PostContentProps {
  body?: string
}

export function PostContent({ body }: PostContentProps) {
  return (
    <>
      <ReactMarkdown className="flex text-justify w-full max-w-[865px] py-10 px-8">
        {body || ''}
      </ReactMarkdown>
    </>
  )
}
