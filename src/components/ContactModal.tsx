import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, Copy, Mail, MapPin, MessageCircle, Phone, X } from "lucide-react";
import { contact, profile } from "../content";

function CopyField({
  Icon,
  label,
  value,
  copyValue,
}: {
  Icon: typeof Phone;
  label: string;
  value: string;
  copyValue?: string;
}) {
  const [copied, setCopied] = useState(false);

  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(copyValue ?? value);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      /* clipboard 不可用时静默忽略 */
    }
  };

  return (
    <div className="flex items-center gap-3 rounded-xl border border-line bg-bg-soft p-4">
      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-line text-accent">
        <Icon className="h-5 w-5" />
      </span>
      <div className="min-w-0 flex-1">
        <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-faint">{label}</div>
        <div className="mt-0.5 truncate text-[15px] font-medium text-text">{value}</div>
      </div>
      {copyValue && (
        <button
          onClick={onCopy}
          className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-line text-faint transition hover:border-accent/50 hover:text-accent"
          aria-label={`复制${label}`}
        >
          {copied ? <Check className="h-4 w-4 text-accent" /> : <Copy className="h-4 w-4" />}
        </button>
      )}
    </div>
  );
}

export function ContactModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (open) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={onClose}
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 20 }}
            transition={{ duration: 0.28, ease: "easeOut" }}
            className="relative w-full max-w-md overflow-hidden rounded-2xl border border-line bg-surface p-7"
          >
            <div className="glow absolute -right-16 -top-16 h-40 w-40 rounded-full bg-accent/15" />

            <button
              onClick={onClose}
              className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-lg border border-line text-faint transition hover:border-accent/50 hover:text-accent"
              aria-label="关闭"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="flex items-center gap-4">
              <span className="grid h-12 w-12 place-items-center rounded-xl border border-line bg-bg-soft text-lg font-semibold text-accent">
                唐
              </span>
              <div>
                <div className="text-lg font-semibold text-text">{profile.name}</div>
                <div className="font-mono text-xs uppercase tracking-[0.18em] text-faint">
                  {profile.role}
                </div>
              </div>
            </div>

            <div className="mt-6 grid gap-3">
              <CopyField Icon={Phone} label="电话" value={contact.phone} copyValue={contact.phoneRaw} />
              <CopyField
                Icon={MessageCircle}
                label="微信（同手机号）"
                value={contact.wechat}
                copyValue={contact.wechat}
              />
              <CopyField Icon={Mail} label="邮箱" value={contact.email} copyValue={contact.email} />
              <CopyField Icon={MapPin} label="地址" value={contact.location} />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
