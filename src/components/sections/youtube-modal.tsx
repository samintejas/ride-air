import { Close } from "@/app/assets/icons";
import Image from "next/image";
import { createPortal } from "react-dom";

export const YoutubeModal = ({
  videoURL,
  onClose,
}: {
  videoURL: string;
  onClose: () => void;
}) => {
  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/63 p-6.25"
      onClick={onClose}
    >
      <div className="flex w-full max-w-286.5 flex-col items-end justify-center gap-4">
        <button className="cursor-pointer" onClick={onClose}>
          <Image
            src={Close}
            alt="close-icon"
            className="aspect-square size-6 md:size-7"
          />
        </button>
        <iframe
          className="aspect-[1.7] h-full w-full"
          src={videoURL}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </div>,
    document.body,
  );
};
