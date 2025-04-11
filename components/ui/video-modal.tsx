"use client"

import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"

interface VideoModalProps {
  isOpen: boolean
  onClose: () => void
  videoUrl: string
  title: string
}

export function VideoModal({ isOpen, onClose, videoUrl, title }: VideoModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[800px] p-0">
      <DialogTitle className="sr-only">{title}</DialogTitle>
        <div className="aspect-video w-full">
          <iframe
            width="100%"
            height="100%"
            src={`${videoUrl}?autoplay=1`}
            title={title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </DialogContent>
    </Dialog>
  )
}

