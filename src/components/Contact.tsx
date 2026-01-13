import { useState, ChangeEvent, FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { sendEmailFn } from "@/lib/email";

export default function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [isSending, setIsSending] = useState(false);
    const [status, setStatus] = useState<{ type: 'success' | 'error', message: string } | null>(null);

    const isValid = name.trim() !== "" && email.trim() !== "" && message.trim() !== "";

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSending(true);
        setStatus(null);

        try {
            const result = await sendEmailFn({ data: { name, email, message } });

            if (result.success) {
                setStatus({ type: 'success', message: 'Message sent successfully!' });
                setName("");
                setEmail("");
                setMessage("");
            } else {
                setStatus({ type: 'error', message: result.message || 'Failed to send message.' });
            }
        } catch (error) {
            setStatus({ type: 'error', message: 'An unexpected error occurred.' });
        } finally {
            setIsSending(false);
        }
    };

    return (
        <section id="contact" className="py-20 bg-background">
            <div className="container px-4 mx-auto max-w-xl text-center">
                <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
                <p className="text-muted-foreground mb-8">
                    Have a project in mind or just want to say hi? Feel free to send me a message.
                </p>

                <form className="space-y-4 text-left" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <label htmlFor="name" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Name</label>
                            <Input
                                id="name"
                                placeholder="John Doe"
                                value={name}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
                                disabled={isSending}
                            />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="email" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Email</label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="john@example.com"
                                value={email}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                                disabled={isSending}
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Message</label>
                        <Textarea
                            id="message"
                            className="min-h-[120px]"
                            placeholder="Your message here..."
                            value={message}
                            onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setMessage(e.target.value)}
                            disabled={isSending}
                        />
                    </div>

                    {status && (
                        <div className={`p-3 rounded-md text-sm ${status.type === 'success' ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400' : 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400'}`}>
                            {status.message}
                        </div>
                    )}

                    <Button type="submit" className="w-full" disabled={!isValid || isSending}>
                        {isSending ? "Sending..." : "Send Message"}
                    </Button>
                </form>
            </div>
        </section>
    );
}
