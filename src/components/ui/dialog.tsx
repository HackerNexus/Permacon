"use client";

import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";

function Dialog({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Root>) {
  return <DialogPrimitive.Root {...props} />;
}

function DialogTrigger({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Trigger>) {
  return <DialogPrimitive.Trigger {...props} />;
}

function DialogPortal({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Portal>) {
  return <DialogPrimitive.Portal {...props} />;
}

function DialogClose({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Close>) {
  return <DialogPrimitive.Close {...props} />;
}

function DialogOverlay({
  className = "",
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Overlay>) {
  return (
    <DialogPrimitive.Overlay
      className={`fixed inset-0 z-50 bg-black/80 backdrop-blur-sm ${className}`}
      {...props}
    />
  );
}

function DialogContent({
  className = "",
  children,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Content>) {
  return (
    <DialogPortal>
      <DialogOverlay />

      <DialogPrimitive.Content
        className={`
          fixed
          left-1/2
          top-1/2
          z-50
          w-[95vw]
          max-w-3xl
          max-h-[90vh]
          -translate-x-1/2
          -translate-y-1/2
          overflow-auto
          rounded-2xl
          border
          border-white/10
          bg-[#0b1120]
          p-6
          shadow-2xl
          focus:outline-none
          ${className}
        `}
        {...props}
      >
        {children}

        <DialogPrimitive.Close
          className="
            absolute
            right-4
            top-4
            rounded-full
            p-2
            bg-white/5
            hover:bg-white/10
            transition
          "
        >
          <X className="h-5 w-5 text-white" />
        </DialogPrimitive.Close>
      </DialogPrimitive.Content>
    </DialogPortal>
  );
}

function DialogHeader({
  className = "",
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={`flex flex-col space-y-2 text-left ${className}`}
      {...props}
    />
  );
}

function DialogFooter({
  className = "",
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={`flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2 ${className}`}
      {...props}
    />
  );
}

function DialogTitle({
  className = "",
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Title>) {
  return (
    <DialogPrimitive.Title
      className={`text-2xl font-bold text-white ${className}`}
      {...props}
    />
  );
}

function DialogDescription({
  className = "",
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Description>) {
  return (
    <DialogPrimitive.Description
      className={`text-gray-400 ${className}`}
      {...props}
    />
  );
}

export {
  Dialog,
  DialogTrigger,
  DialogPortal,
  DialogClose,
  DialogOverlay,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
};