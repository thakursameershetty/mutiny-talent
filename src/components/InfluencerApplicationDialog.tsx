import React, { useState } from "react";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

interface InfluencerApplicationDialogProps {
  trigger?: React.ReactNode;
  mode?: "brand" | "creator";
}

export const InfluencerApplicationDialog: React.FC<InfluencerApplicationDialogProps> = ({ 
  trigger, 
  mode = "creator" 
}) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const isBrand = mode === "brand";

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);
    
    // [!code ++] Create a clean, formatted object for the email
    const submissionData = {
      // 1. FormSubmit Settings
      _subject: `New ${mode.toUpperCase()} Application: ${formData.get("fullName")}`,
      _template: "box", // Nice box design
      _captcha: "false",

      // 2. Readable Data
      "Application Type": mode === 'brand' ? "Brand" : "Influencer",
      "Full Name": formData.get("fullName"),
      "Mobile Number": formData.get("mobile"),
      "Email Address": formData.get("email"),
      "Location": formData.get("location"),
      
      // 3. Conditional Fields
      ...(isBrand 
        ? { "Company Name": formData.get("companyName") } 
        : { "Instagram Handle": formData.get("instagram") }
      ),
      
      // 4. Price Field (Specific to this dialog)
      ...(formData.get("price") ? { "Proposed Price": formData.get("price") } : {}),
    };
    
    try {
      // Use your test email (change to Connect@mutinytalent.com when ready)
      const response = await fetch("https://formsubmit.co/ajax/connect@mutinytalent.com", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(submissionData)
      });

      if (response.ok) {
        toast.success("Application submitted successfully!");
        setIsOpen(false);
        form.reset();
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch (error) {
      toast.error("Network error. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      {trigger ? (
        <DialogTrigger asChild>
          {trigger}
        </DialogTrigger>
      ) : (
        <DialogTrigger asChild>
          <Button variant="hero" size="hero" className="w-full sm:w-auto">
            Open Form
          </Button>
        </DialogTrigger>
      )}

      <DialogContent className="bg-white text-black max-w-xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>
            <span className="block text-2xl !font-body">
              {isBrand ? "Join as Brand" : "Join as Influencer"}
            </span>
            <span className="text-sm text-mutiny-yellow font-semibold !font-body">
              Fill in the details below
            </span>
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="grid gap-4 mt-4">
          <input type="text" name="_honey" style={{ display: 'none' }} />
          
          <div>
            <Label htmlFor="fullName">Full Name</Label>
            <Input id="fullName" name="fullName" placeholder="Enter your full name" required />
          </div>

          <div>
            <Label htmlFor="mobile">Mobile Number</Label>
            <Input id="mobile" name="mobile" type="tel" placeholder="Enter your mobile number" required />
          </div>

          <div>
            <Label htmlFor="email">Email Address</Label>
            <Input id="email" name="email" type="email" placeholder="Enter your email address" required />
          </div>

          {isBrand ? (
            <div>
              <Label htmlFor="companyName">Company Name</Label>
              <Input id="companyName" name="companyName" placeholder="Enter your company name" required />
            </div>
          ) : (
            <div>
              <Label htmlFor="instagram">Instagram ID</Label>
              <Input id="instagram" name="instagram" placeholder="Enter your Instagram handle" required />
            </div>
          )}

          <div>
            <Label htmlFor="location">Location</Label>
            <Input id="location" name="location" placeholder="City, Country" />
          </div>

          <div>
            <Label htmlFor="price">Price for Promotion</Label>
            <Input id="price" name="price" placeholder="Enter your price" />
          </div>

          <DialogFooter className="mt-4 gap-3 sm:gap-0">
            <Button 
              variant="outline" 
              type="button" 
              onClick={() => setIsOpen(false)}
              className="w-full sm:w-1/3"
              disabled={isSubmitting}
            >
              Cancel
            </Button>
            
            <Button 
              type="submit" 
              className="w-full sm:w-2/3 bg-black text-mutiny-yellow hover:bg-black/90 hover:text-white transition-colors"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Submit Application"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default InfluencerApplicationDialog;