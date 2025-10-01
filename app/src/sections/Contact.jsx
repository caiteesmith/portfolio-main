import { useRef, useState } from "react";
import Input from "@/components/ui/Input";
import Textarea from "@/components/ui/Textarea";
import Button from "@/components/ui/Button";
import { Send } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card";
import burst from "@/utils/burst";

export default function Contact(){
  const [sending,setSending]=useState(false);
  const [sent,setSent]=useState(false);
  const formRef=useRef(null);

  const submitContact=async(e)=>{
    e.preventDefault(); if(sending) return;
    const payload=new URLSearchParams(new FormData(e.currentTarget)).toString();
    try{
      setSending(true);
      await fetch("/",{ method:"POST", headers:{ "Content-Type":"application/x-www-form-urlencoded" }, body:payload });
      setSent(true); burst(formRef.current?.querySelector("button[type='submit']"));
      e.currentTarget.reset();
    }catch{ alert("Something went wrong. Try again?"); } finally{ setSending(false); }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Let's build something!</CardTitle>
        <CardDescription>Looking for a .NET/C# developer with Azure experience? Drop me a note and let's talk.</CardDescription>
      </CardHeader>
      <CardContent>
        <form ref={formRef} onSubmit={submitContact} name="contact" data-netlify="true">
          <input type="hidden" name="form-name" value="contact" />
          <div className="grid md:grid-cols-2 gap-3">
            <div><label htmlFor="name" className="text-sm">Your Name</label><Input id="name" name="name" required placeholder="Jane Dev" /></div>
            <div><label htmlFor="email" className="text-sm">Email</label><Input id="email" name="email" type="email" required placeholder="you@domain.com" /></div>
          </div>
          <div className="mt-3"><label htmlFor="message" className="text-sm">Message</label><Textarea id="message" name="message" required placeholder="What are we building?" rows={6} /></div>
          <div className="flex items-center gap-3 mt-4">
            <Button variant="primaryPink" type="submit" disabled={sending}>{sending ? "Sending…" : (<><Send className="h-4 w-4 mr-2" />Submit</>)}</Button>
            {sent && <span className="text-sm text-green-600 dark:text-green-400">Thank you! I'll reply soon.</span>}
          </div>
        </form>
      </CardContent>
    </Card>
  );
}