import { ReactMarkdown } from 'react-markdown/lib/react-markdown'

export function PostContent() {
  return (
    <>
      <ReactMarkdown className="flex w-full max-w-[865px] py-10 px-8">
        # Hello World
      </ReactMarkdown>
    </>
  )
}
