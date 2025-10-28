import { ReactNode, useEffect } from "react";
import { X } from "lucide-react";
import { Button } from "./ui/button";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
  heroImage?: string;
}

const Modal = ({ isOpen, onClose, title, children, heroImage }: ModalProps) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 animate-fade-in"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-[1200px] max-h-[90vh] overflow-y-auto bg-background rounded-lg shadow-xl animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        <Button
          variant="ghost"
          size="icon"
          className="sticky top-4 right-4 z-10 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background float-right"
          onClick={onClose}
        >
          <X className="h-5 w-5" />
        </Button>

        {heroImage && (
          <div className="w-full h-64 overflow-hidden rounded-t-lg">
            <img 
              src={heroImage} 
              alt={title}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        <div className="p-8 md:p-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">{title}</h2>
          <div className="prose prose-lg max-w-none dark:prose-invert">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
