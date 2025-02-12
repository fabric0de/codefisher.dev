import { useEffect, useRef } from 'react'

export default function Utterances({ darkMode }: { darkMode: boolean }) {
  const utterancesRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const utterancesFrame = utterancesRef.current?.querySelector(
      '.utterances-frame'
    ) as HTMLIFrameElement

    if (utterancesFrame) {
      const theme = darkMode ? 'github-dark' : 'github-light'
      utterancesFrame.contentWindow?.postMessage(
        { type: 'set-theme', theme },
        'https://utteranc.es'
      )
      return
    }

    const script = document.createElement('script')
    const attributes = {
      src: 'https://utteranc.es/client.js',
      repo: 'fabric0de/codefisher.dev-comment',
      'issue-term': 'pathname',
      theme: darkMode ? 'github-dark' : 'github-light',
      crossorigin: 'anonymous',
      async: 'true',
      label: 'comments'
    }

    for (const [key, value] of Object.entries(attributes)) {
      script.setAttribute(key, value)
    }

    script.addEventListener('error', () => {
      console.error('Utterances 스크립트 로딩 실패')
    })

    utterancesRef.current?.append(script)

    return () => {
      script.remove()
    }
  }, [darkMode])

  return <div className='utterances mt-8' ref={utterancesRef} />
}
