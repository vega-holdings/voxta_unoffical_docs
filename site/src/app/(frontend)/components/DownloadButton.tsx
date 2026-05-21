'use client'

interface DownloadButtonProps {
  content: string
  filename: string
  title: string
}

export function DownloadButton({ content, filename, title }: DownloadButtonProps) {
  const handleDownload = () => {
    // Create markdown with title as header
    const markdown = `# ${title}\n\n${content}`
    const blob = new Blob([markdown], { type: 'text/markdown' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `${filename}.md`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  return (
    <button onClick={handleDownload} className="download-button" title="Download as Markdown">
      DL .md
    </button>
  )
}
